import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

store.commit('increment');
store.commit('increment');

console.log(store.state.count); // -> 1

const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return this.$store.state.count
    }
  },
};

const app = new Vue({
  el: '#app',
  // ルートインスタンスにstoreオプションを渡すことで、渡されたストアをルートの全ての子コンポーネントに注入する
  // そのため、this.$storeで各コンポーネントから参照することができる
  // 今回の場合、Counterコンポーネントからストアを参照できる
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `,
});