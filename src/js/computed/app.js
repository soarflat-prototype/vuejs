import Vue from 'vue';

//----------------------------------------------------------------------------

/**
 * 算出プロパティを利用して文字を反転して表示
 */
const app = new Vue({
  el: '#app',

  data() {
    return {
      message: 'Hello World',
    };
  },

  // computed内にgetter関数を指定できる
  // methodsに同じような定義をすることで同様の結果になる
  // 算出プロパティ（computed）は依存関係にもとづきキャッシュされる
  // 今回の場合messageが更新されない限り、以前計算された結果を即時に返す
  // 計算に無茶苦茶コストがかかる場合、キャッシングを利用するために算出プロパティを利用する
  // 逆にキャッシュを利用しない（再描画が起こる度に関数を実行したい）場合methodsを利用する
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
  },

  // 上記のcomputedと同じ結果、キャッシングするかしないかの違いがある
  methods: {
    reverseMessage2() {
      return this.message.split('').reverse().join('');
    },
  }
});

/**
 * watchとcomputedを利用して、フルネームを描画する
 * どちらも同じ結果になるが、computedの方が簡潔に書ける
 */
const app2 = new Vue({
  el: '#app2',

  data() {
    return {
      firstName: 'DOM',
      lastName: 'BAR',
      fullName: 'DOM BAR'
    };
  },

  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val;
    },
  },

  computed: {
    fullName2() {
      return this.firstName + ' ' + this.lastName;
    }
  },
});