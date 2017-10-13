# trantion（トランジション）
[Enter/Leave とトランジション一覧（Vue.js公式ドキュメント）](https://jp.vuejs.org/v2/guide/transitions.html)

## 単一要素/コンポーネントのトランジション

```html
<div id="app">
  <div class="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</div>
<style type="text/css">
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s
  }
  
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
</style>
```

```javascript
const app = new Vue({
  el: '#app',
  data() {
    return {
      show: true
    }
  }
});
```

### サンプルコードの解説

以下は`transition`コンポーネントにラップされた要素。

```html
<p v-if="show">hello</p>
```

このような要素が挿入、あるいは削除されるとき、以下のことが行われる。

1. Vueは対象の要素がCSSトランジション、あるいはアニメーションが適用されるか自動的に察知する。それがない場合、適切なタイミングでCSSトランジションのクラスを追加/削除をする。
1. もし、`transition`コンポーネントが[JavaScriptフック](https://jp.vuejs.org/v2/guide/transitions.html#JavaScript-%E3%83%95%E3%83%83%E3%82%AF)を提供している場合、適切なタイミングでそれらのフックが呼ばれる。
1. もし、CSSトランジション/アニメーションが検出されず、JavaScriptフックも提供されない場合。挿入、削除のいずれか、あるいは両方のDOM操作を次のフレームでただちに実行する。

今回の場合、`1.`が適用される。