<template>
  <my-component></my-component>
</template>

<script>
  const Child = {
    template: '<div>A custom local component!</div>'
  };

  export default {
    components: {
      'my-component': Child
    }
  }
</script>