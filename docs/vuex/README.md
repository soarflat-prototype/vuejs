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

