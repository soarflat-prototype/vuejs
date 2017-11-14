<template lang="pug">
  .warning(v-show="isActive")
    h1 Warning
    p delete?
</template>

<script>
  export default {
    props: {
      currentView: String
    },

    computed: {
      isActive() {
        return (this.currentView === 'warning')
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>