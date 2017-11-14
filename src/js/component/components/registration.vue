<template lang="pug">
  .registration(v-show="isActive")
    h1 registration
    p welcome!
</template>

<script>
  export default {
    props: {
      currentView: String
    },

    computed: {
      isActive() {
        return (this.currentView === 'registration')
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>