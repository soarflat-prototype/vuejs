import Vue from 'vue';

//----------------------------------------------------------------------------

/**
 * Hello Worldを表示する
 */
const app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello World',
    };
  },
});

/**
 * データ属性にリアルタイムの時間を挿入する
 */
const app2 = new Vue({
  el: '#app2',
  data() {
    return {
      message: 'You loaded this page on ' + new Date()
    };
  },
});

/**
 * 条件分岐で要素を表示、非表示にする
 */
const app3 = new Vue({
  el: '#app3',
  methods: {
    toggleSeen() {
      this.$data.seen = (!this.$data.seen);
    }
  },
  data() {
    return {
      seen: true
    };
  },
});

/**
 * ループでリストを表示
 */
const app4 = new Vue({
  el: '#app4',
  data() {
    return {
      todos: [{
        text: 'todo1'
      }, {
        text: 'todo2'
      }, {
        text: 'todo3'
      }]
    }
  }
});

/**
 * ボタンをクリック時、文字を反転する
 */
const app5 = new Vue({
  el: '#app5',
  data() {
    return {
      message: 'message'
    }
  },
  methods: {
    reverseMessage() {
      this.$data.message = this.$data.message.split('').reverse().join('');
    }
  }
});

/**
 * 双方向バインディング、inputに入力した文字列が反映される
 */
const app6 = new Vue({
  el: '#app6',
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
});

/**
 * コンポーネントを利用する
 *
 * Vue.component(tagName, options)でグローバルなコンポーネントを登録できる
 * 例えば<todo-item></todo-item>というタグを登録したい場合は
 * Vue.component('todo-item')と記述する
 * オプションにはpropsとtemplateを指定している。
 *
 * propsは親コンポーネントからのデータを受け入れるために公開される属性のリストやハッシュのこと
 * コンポーネントのインスタンスはスコープが分離しているため、テンプレート内の親データを直接参照することはできない
 * propsを利用すると親データを子コンポーネントに渡すことができる
 * propsはカスタム属性であり、渡したいデータ（属性）を明示的に指定する必要がある
 * 今回propsにはtodoを指定しており、以下のように、todo-itemタグにtodoがあれば
 * <todo-item todo="{text: 'buy camera'}"></todo-item>
 * それを参照してtemplateに利用できる
 *
 * そして、templateが以下のような指定になっていれば
 * template: '<li>{{ todo.text }}</li>'
 * todoを参照するため、<li>buy camera</li>が出力される
 */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>id:{{ todo.id }} {{ todo.text }}</li>'
});

const app7 = new Vue({
  el: '#app7',
  data() {
    return {
      groceryList: [{
        id: 0,
        text: 'Vegetables',
      }, {
        id: 1,
        text: 'meat',
      }, {
        id: 2,
        text: 'drink',
      }]
    }
  }
});

//----------------------------------------------------------------------------
