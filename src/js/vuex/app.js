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
    },
    decrement(state) {
      state.count--;
    }
  }
});

const Counter = {
  template: `<p>{{ count }}</p>`,
  computed: {
    count() {
      return this.$store.state.count
    }
  },
};

const counter = new Vue({
  el: '#counter',
  // ルートインスタンスにstoreオプションを渡すことで、渡されたストアをルートの全ての子コンポーネントに注入する
  // そのため、this.$storeで各コンポーネントから参照することができる
  // 今回の場合、Counterコンポーネントからストアを参照できる
  store,
  components: { Counter },
});

const power = new Vue({
  el: '#power',
  store,
  computed: {
    power() {
      return Math.pow(this.$store.state.count, 2);
    }
  },
});

const ui = new Vue({
  el: '#ui',
  store,
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    }
  }
});