const MyNameApp = {
  data () {
    return {
      name : "Joao",
      age: "30",
    }
  }
}

Vue.createApp(MyNameApp).mount("#app")