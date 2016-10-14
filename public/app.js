// Hello World
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
});

// 双方向バインディング
new Vue({
  el: '#two-way',
  data: {
    message: 'two-way'
  }
});

// リストのレンダリング
new Vue({
  el: '#list',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
  }
});

// ユーザー入力のハンドリング
new Vue({
  el: '#handle',
  data: {
    message: 'handle'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

// TODOアプリケーション
new Vue({
  el: '#todo',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos'}
    ]
  },
  methods: {
    addTodo: function() {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text: text });
        this.newTodo = '';
      }
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});
