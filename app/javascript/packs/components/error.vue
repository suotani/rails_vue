<template>
  <div v-if="errors.length != 0">
    <p v-for="error in errors" class="error">{{error}}</p>
  </div>
</template>

<script>
  export default {
      props: ['errors']
  }
</script>

<style scoped>
  .error{
      color: red;
      margin: 0;
      margin-bottom: 3px;
  }
</style>