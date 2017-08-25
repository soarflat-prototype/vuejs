import Vue from 'vue';

//----------------------------------------------------------------------------

/**
 * VueアプリケーションはVue コンストラクタ関数で
 * root Vue instanceを作成することによって起動される
 *
 * Vueコンストラクタを拡張することで、あらかじめ定義されたオプションを伴う再利用可能な
 * コンポーネントコンストラクタを生成できる
 *
 * 以下はMyComponentという拡張されたVueコンストラクタを定義している
 */
const MyComponent = Vue.extend({
  el: '#app',
  data() {
    return {
      message: 'My Component Constructor',
    };
  },
});

const app = new MyComponent();

/**
 * Vueインスタンスは、自身のdataオブジェクトの全てのプロパティをプロキシする
 * ようはリアクティブにしたいデータ（データ更新時、再描画するデータ）はdataオブジェクト内に指定する必要がある
 */
const app2 = new Vue({
  el: '#app2',
  data: { a: 1 },
  created() {
    console.log('a is: ' + this.a)
  }
});

/**
 * app2.aの変更を監視し、変更されたらコールバックを実行
 */
app2.$watch('a', function (newVal, oldVal) {
  console.log(`changed ${oldVal} to ${newVal}`);
});

setTimeout(() => {
  app2.a = '10';
}, 1000);

//----------------------------------------------------------------------------
