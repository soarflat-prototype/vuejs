import Vue from 'vue';
import App from './App.vue';
import ParentComponent from './components/Parent';
import ChildComponent from './components/Child';

Vue.component('my-component', {
  props: ['message'],
  template: '<div>{{message}}</div>'
});

new Vue({
  el: '#app'
});

new Vue({
  el: '#app2',
  render: (h) => h(App),
});

new Vue({
  el: '#app3',
  components: {
    'parent': ParentComponent,
    'child': ChildComponent,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 6, 7, 8, 9, 10]
    }
  }
});
