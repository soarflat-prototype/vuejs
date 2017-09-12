import Vue from 'vue';
import Router from 'vue-router';
import appComponent from './components/app.vue';

// プラグインをインストール
Vue.use(Router);

//----------------------------------------------------------------------------

// ルートを定義する
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

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
  router
}).$mount('#app');

//----------------------------------------------------------------------------

const User = {
  template: '<div>{{ $route.params.id }}</div>'
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
    component: appComponent,
  }, {
    path: '/user/:id',
    component: User,
  }, {
    path: '*',
    redirect: '/app/doraemon',
  }],
});

const app3 = new Vue({
  router: appRouter
}).$mount('#app3');