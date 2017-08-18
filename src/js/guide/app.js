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

//----------------------------------------------------------------------------
