<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>

    <router-link to="/">Home</router-link>

    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: ["logo", "alt"]
  }
</script>

<style scoped>
  #nav {
    background-color: var(--graphite-color);
    border-bottom: 4px solid var(--fire-brick);
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: var(--header-height);
  }

  #nav #logo-url{
    margin: auto;
    margin-left: 0;
  }

  #logo{
    width: 40px;
    height: 40px;
  }

  #nav a{
    color: var(--mustard-color);
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  #nav a:hover {
    color: var(--white-color);
  }
</style>