<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style scoped>

  #main-banner {
    background-image: url('/public/img/burger.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(98vh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #main-banner h1 {
    color: var(--white-color);
    text-align: center;
    font-size: 60px;
    background-color: var(--graphite-color);
    padding: 20px 40px;
  }

</style>