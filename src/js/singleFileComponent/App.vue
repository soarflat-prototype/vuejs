<template>
  <div class="wrapper">
    <div class="content">
      <warning :currentView="currentView"></warning>
      <registration :currentView="currentView"></registration>
    </div>

    <button v-for="view in views" :view="view" @click="changeView(view)">{{ view }}</button>
  </div>
</template>

<script>
  import warning from './components/warning.vue';
  import registration from './components/registration.vue';

  export default {
    components: {
      warning,
      registration,
    },

    data() {
      return {
        views: ['warning', 'registration'],
        currentView: 'warning'
      }
    },

    methods: {
      changeView(view) {
        this.currentView = view;
      }
    }
  }
</script>

<style>
  .wrapper {
    width: 600px;
    margin: 0 auto;
    padding: 5px;
    background: #ccc;
  }

  .content {
    padding: 20px;
    background: #fff;
  }

  button {
    margin-right: 10px;
    background: #fff;
  }
</style>