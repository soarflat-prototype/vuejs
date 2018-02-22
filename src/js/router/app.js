import Vue from 'vue';
import Router from 'vue-router';
import appComponent from './components/app.vue';

// プラグインをインストール
Vue.use(Router);

//----------------------------------------------------------------------------

// ルートを定義する
const Foo = { template: '<transition name="slide"><div>foo</div></transition>' };
const Bar = { template: '<transition name="slide"><div>bar</div></transition>' };

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
    '$route' (to, from) {
      console.log('changed route');
      console.log('to', to);
      console.log('from', from);
    }
  }
}).$mount('#app');

//----------------------------------------------------------------------------

const User = {
  template: '<div>{{ $route.params.id }}</div>',
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;

    console.log('toDepth', toDepth);
    console.log('fromDepth', fromDepth);
    next()
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