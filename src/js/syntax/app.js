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

/**
 * マウントするDOMが
 * <div id="app4" v-bind:id="dynamicId">DYNAMIC ID</div>
 * であり、v-bind:idを指定しているのでマウント時
 * dynamicIdがDYNAMIC_IDに置き換わる属性の値は{{}}で指定することができないため
 * v-bindを利用する
 *
 * 同じくマウントするDOMである
 * <button v-bind:disabled="isButtonDisabled">button</button>
 * isButtonDisabledはtrueの場合disabledが付与され、
 * falseの場合はdisabledがなくなる
 */
const app4 = new Vue({
  el: '#app4',
  data() {
    return {
      dynamicId: 'DYNAMIC_ID',
      isButtonDisabled: true,
    }
  },
});

/**
 * {{}}やv-bind内などではJavaScript式が利用できる
 * {{'element ' + id}}
 * {{ok ? 'YES' : 'NO'}}
 * v-bind:id="'element' + id"
 */
const app5 = new Vue({
  el: '#app5',
  data() {
    return {
      id: 'DMM',
      ok: false,
    }
  },
});

/**
 * ディレクティブ
 * このディレクティブは、それ自身をVueインスタンスのプロパティや
 * インスタンスの文脈の中で評価される表現にバインドできる。
 * 配下のプロパティや表現の値が変更されたら、それらのディレクティブのupdate()関数が同期的に呼ばれる。
 * <div v-if="active">seen</div>
 * の場合activeがtrueの場合、要素が表意され、falseの場合、非表示なる。
 */
const app6 = new Vue({
  el: '#app6',
  data() {
    return {
      active: true,
    }
  },
  methods: {
    doSomething() {
      console.log('doSomething');
    }
  }
});

/**
 * フィルタ
 * Vue.jsのフィルタは「値を取り、加工し、加工した値を返す」関数のことを指す
 * ファイルを利用するには、パイプ(|)を利用して以下のように記述をする
 * <span>{{message | capitalize}}</span>
 *
 * messageを引数としてフィルタであるcapitalizeを実行する
 *
 * 以下のようにディレクティブの値にも記述できる
 * <span v-text="message | capitalize"></span>
 */

/**
 * グローバルフィルタにreverseを登録する
 * グローバルフィルタに登録すればどのコンポーネントでもreverseを利用できる
 */
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('');
});

const app7 = new Vue({
  el: '#app7',
  data() {
    return {
      message: 'hello world',
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
});

//----------------------------------------------------------------------------
