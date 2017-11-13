# Vuex
Vue.jsアプリケーションのための状態管理ライブラリのこと。全てのコンポーネントの集中型のストアとして機能する。

## Vuexの考え方

以下はVueで作られた単純なカウンターアプリ。

```javascript
new Vue({
  // state
  data() {
    return {
      count: 0,
    }
  },

  // view
  template: `<div>{{ count }</div>`,

  // actions
  methods: {
    increment() {
      this.count += 1;
    }
  }
});
```

上記はいくつかの要素をアプリ自身に含んでいる。

- state
- view
- action

### state
アプリを動かす情報源。

### view
stateの宣言的なマッピング（上記のアプリの場合は）。

### action
viewからユーザー入力に反応して、状態の変更を可能にする方法。

# single state tree
Vuexはsingle state treeを利用する。

single state treeとはアプリケーションの状態が全て含まれており、信頼できる唯一の情報源として機能するもの。

そのため、Vuexを利用する場合、アプリケーションは通常1つのストアしか持たない。

## Vuexの状態をVueコンポーネントに入れる
Vuexストアはリアクティブのため、ストアから状態を取り出す一番シンプルな方法は、以下のように状態を算出プロパティで返すこと。

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuexストアを定義する
const store = new Vuex.Store({
  state: {
    count: 0,
  },
});

// カウンターコンポーネントにVuexの状態を入れる
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count;
    }
  }
};
```

`store.state.count`が更新される度に、算出プロパティの再評価が発生し、関連したDOMの更新をトリガーする。

このパターンでは、コンポーネントがグローバルストアシングルトンに依存してしまう。つまり、ストアの状態を利用している全てのコンポーネントでインポートが必要になる。

共通のストアを利用しているのに、全てのコンポーネントにインポートするのは面倒、また変更が会った際に辛い。

Vuexはルートコンポーネントに`store`オプションを指定することにより、全ての子コンポーネントにストアを注入する仕組みを提供している。

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuexストアを定義する
const store = new Vuex.Store({
  state: {
    count: 0,
  },
});

// 親コンポーネントであるappからストアが注入されているため、this.$storeでストアを参照できる
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count;
    }
  }
};

const Counter2 = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return Math.pow(this.$store.state.count, 2);
    }
  }
};

// 子コンポーネントであるCounterと、Counter2にストアを注入する
const app = new Vue({
  el: '#app',
  // storeオプションで指定されたストアは、全ての子コンポーネントに注入される
  store,
  components: { Counter, Counter2 },
  template: `
    <div class="app">
      <counter></counter>
      <counter2></counter2>
    </div>
  `,
});

```

## `mapState`ヘルパー
算出プロパティを繰り返す宣言することは防ぐために算出ゲッター関数を生成するヘルパー。

