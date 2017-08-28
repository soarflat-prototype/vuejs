import Vue from 'vue';

//----------------------------------------------------------------------------

const app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello world'
    }
  }
});

/**
 * マウントするDOMが
 * <div id="app2" v-once>never chnage {{message}}</div>
 * であり、v-onceを指定しているので
 * app2.message = 'changed!!'
 * データを変更しても、viewは更新されない
 */
const app2 = new Vue({
  el: '#app2',
  data() {
    return {
      message: 'Hello world'
    }
  },
  mounted() {
    setTimeout(() => {
      app2.message = 'changed!!';
    }, 1000);
  }
});

/**
 * マウントするDOMが
 * <div id="app3" v-html="rawHtml"></div>
 * であり、v-htmlを指定しているので、マウント時
 * <div style="color:red" class="rawHTML">rawHtml</div>
 * に置き換わる
 */
const app3 = new Vue({
  el: '#app3',
  data() {
    return {
      rawHtml: '<div style="color:red" class="rawHTML">rawHtml</div>'
    }
  },
});

//----------------------------------------------------------------------------
