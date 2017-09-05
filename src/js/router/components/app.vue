<template lang="pug">
  .example {{$route.params.id}}
</template>

<script>
  export default {
    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        console.log('fetchData', this.$route.params.id);
      }
    }
  }
</script>

<style scoped>
  .example {
    color: red;
  }
</style>