import Vue from 'vue';
import Router from 'vue-router';
import appComponent from './components/app.vue';
import anime from 'animejs'

// プラグインをインストール
Vue.use(Router);

//----------------------------------------------------------------------------

// ルートを定義する
const Foo = { template: '<transition name="slide"><div>foo</div></transition>' };
const bar = { name: 'bar', template: '<span>bar Component!</span>' };
const Bar = {
  template: `<transition name="slide"><bar></bar></transition>`,
  components: { 'bar': bar }
};

// ルーターインスタンスを作成し、ルートのオプションを渡す
const routes = [{
  path: '/foo',
  component: Foo,
}, {
  path: '/bar',
  component: Bar,
},];

// ルートとなるインスタンスを作成し、マウントする
const router = new Router({
  routes
});

const app = new Vue({
  router,
  watch: {
    '$route'(to, from) {
      console.log('changed route');
      console.log('to', to);
      console.log('from', from);
      console.log(this.$el);
    }
  }
}).$mount('#app');

//----------------------------------------------------------------------------

const User = {
  template: '<div>{{ $route.params.id }}</div>',
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;

    console.log(this.$el);
    console.log('toDepth', toDepth);
    console.log('fromDepth', fromDepth);
    next();
  }
};

const userRouter = new Router({
  routes: [{
    // コロン（:）を指定することによって
    // /user/foo や /user/barなど、同じルートにマッチする
    path: '/user/:id',
    component: User,
  }],
});

const app2 = new Vue({
  router: userRouter
}).$mount('#app2');

//----------------------------------------------------------------------------

const appRouter = new Router({
  routes: [{
    path: '/app/:id',
    components: {
      a: appComponent,
    },
  }, {
    path: '/user/:id',
    components: {
      b: appComponent,
    },
  }],
});

const app3 = new Vue({
  router: appRouter
}).$mount('#app3');

//----------------------------------------------------------------------------

const Section1 = {
  template: `<section>section1</section>`,
  beforeRouteEnter(to, from, next) {
    // ルート変更に反応する...
    // next() を呼び出すのを忘れないでください
    next(vm => {
      vm.$router.replace('/section2');
    });
    next();
  }
};

/**
 * beforeRouteEnter, beforeRouteUpdate, beforeRouteLeaveに関しては以下参照
 * https://router.vuejs.org/ja/advanced/navigation-guards.html
 */
const Section2 = {
  template: `<section>section2</section>`,
  methods: {
    show() {
      anime({
        targets: this.$el,
        translateX: [
          { value: 100, duration: 1200 },
          { value: 0, duration: 800 }
        ],
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 2000
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    // このコンポーネントを描画するルートが確立する前に呼ばれます。
    // `this` でのこのコンポーネントへのアクセスはできません。
    // なぜならばこのガードが呼び出される時にまだ作られていないからです!
    next(vm => {
      // `vm` を通じてコンポーネントインスタンスにアクセス
      // console.log(vm.$el);
      vm.show();
    });
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    // このコンポーネントを描画するルートが変更されたときに呼び出されますが、
    // このコンポーネントは新しいルートで再利用されます。
    // たとえば、動的な引数 `/foo/:id` を持つルートの場合、`/foo/1` と `/foo/2` の間を移動すると、
    // 同じ `Foo` コンポーネントインスタンスが再利用され、そのときにこのフックが呼び出されます。
    // `this` でコンポーネントインスタンスにアクセスできます。
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    // このコンポーネントを描画するルートが間もなく
    // ナビゲーションから離れていく時に呼ばれます。
    // `this` でのコンポーネントインスタンスへのアクセスができます。
    next();
  }
};

const sectionRouter = new Router({
  routes: [{
    path: '/section1',
    component: Section1,
  }, {
    path: '/section2',
    component: Section2
  }]
});

new Vue({
  router: sectionRouter
}).$mount('#app4');