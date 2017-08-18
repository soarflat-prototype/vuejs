import Vue from 'vue';

//----------------------------------------------------------------------------

/**
 * コンポーネント間のカスタムイベントの監視、発火などを管理するVueインスタンスを生成
 * 全てのコンポーネントがEventBus:updateStoreを発火、監視をする
 * コンポーネントがstoreを更新したらEventBus:updateStoreを発火
 * 監視している全てのコンポーネントがstoreの状態に応じた処理を実行する
 */
const EventBus = new Vue();

/**
 *
 */
// EventBus.$on('event', (data) => {
//   console.log(data);
//   sendUpdateStoreMessage();
// });

/**
 * storeを更新したメッセージを送信する
 */
// function sendUpdateStoreMessage() {
//   // NOTE: debug
//   console.log(store);
//
//   EventBus.$emit('EventBus:updateStore', store);
// }

//----------------------------------------------------------------------------

/**
 * store、全てのデータはここで管理
 * storeを更新したらイベントを発火する
 */
const store = {
  data: {}
};

//----------------------------------------------------------------------------

const sample = new Vue({
  el: '#sample',
  methods: {
    sample(e) {
    }
  },
  data() {
    return {
      data: null,
    };
  },
  created() {
  },
  mounted() {
  }
});
