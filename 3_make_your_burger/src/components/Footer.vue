<template>
  <div id="footer">
    <p>Make Your Burger &copy; 2021</p>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  #footer {
    height: var(--footer-height);
    background-color: var(--graphite-color);
    border-top: 4px solid var(--fire-brick);
    color: var(--mustard-color);
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
  }
</style>