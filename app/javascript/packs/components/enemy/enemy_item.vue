<template>
  <tr>
    <td>
        <span v-if="enemy.power > 50">*</span>{{enemy.name}}
    </td>
    <td>{{enemy.hp}}</td>
    <td>{{enemy.magic_point}}</td>
  </tr>
</template>

<script>
  export default {
      props: ['enemy']
  }
</script>

<style scoped>

</style>