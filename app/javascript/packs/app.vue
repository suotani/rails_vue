<template>
  <div id="app">
    <nav>
      <router-link to="/">まもの管理</router-link>
      <router-link to="/maou">魔王管理</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style scoped>
  nav{
    padding: 7px;
    background-color: black;
    margin-bottom: 10px;
  }
  nav a{
    color: #4f97e2;
    text-decoration: none;
    margin-right: 10px;
  }
</style>