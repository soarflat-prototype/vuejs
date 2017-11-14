import Vue from 'vue';
import app from './components/app.vue';
import app2 from './components/app2.vue';
import App from './App.vue';

new Vue({
  el: '#app',
  components: { app, app2 },
});

new Vue({
  el: '#app2',
  render: (h) => h(App),
});