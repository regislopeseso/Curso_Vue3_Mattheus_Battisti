<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
 <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src: "/img/logo.png",
        app_name: "Make Your Burger"
      }
    }
  }
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing:  border-box;
    --header-height: 100px;
    --footer-height: 100px;
    --white-color: #fff;
    --ice-color: #CCC;
    --graphite-color: #222;
    --mustard-color:  #FCBA03;
    --fire-brick: #111;
  }
  body {   
    height: 100%;  
    width: 100%;
  }

  .main-container {   
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    padding: 50px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: var(--graphite-color);
  }



</style>
