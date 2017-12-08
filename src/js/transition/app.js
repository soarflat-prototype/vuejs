import Vue from 'vue';

//----------------------------------------------------------------------------

const app = new Vue({
  el: '#app',
  data() {
    return {
      show: true
    }
  }
});

Vue.component('Item', {
  template: '<span>{{item.id}}</span>',
  props: { item: Object }
});

const app2 = new Vue({
  el: '#app2',
  data() {
    return {
      maxId: 3,
      list: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]
    }
  },
  methods: {
    random(max) {
      return Math.floor(Math.random() * (max + 1))
    },
    add() {
      const id = ++this.maxId;
      const index = this.random(this.list.length);
      this.list.splice(index, 0, { id });
    },
    remove() {
      const index = this.random(this.list.length - 1);
      this.list.splice(index, 1);
    },
    shuffle() {
      const shuffled = [];
      while (this.list.length > 0) {
        const index = this.random(this.list.length - 1);
        shuffled.push(this.list[index]);
        this.list.splice(index, 1);
      }
      this.list = shuffled;
    }
  }
});

//----------------------------------------------------------------------------