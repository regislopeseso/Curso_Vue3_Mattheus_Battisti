<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>

    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <!-- v-for example -->
      <li v-for="(tech, index) in tecnologies" :key="index">
        {{ tech }}
      </li>
    </ul>

    <div>
      <button @click="showEmail">{{textoBotao}}</button>
    </div>

    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p class="teste">Para acessar meu portifólio <a v-bind:href="meu_link" target="blank">basta cliclar aqui</a></p>
    <Picture />
  </div>
</template>

<script>
import Picture from "./Picture.vue"

export default {
  name: "Info",
  components: {
    Picture
  },
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email: "matheus@email.com",   
      tecnologies: ["JavaScript", "PHP", "Python"],
      meu_link: "https://google.com",
      textoBotao: "Mostrar e-mail"
    };
  },
  methods: {
    showEmail() {
      this.mostrar_email= !this.mostrar_email;
      
      this.textoBotao = "Ocultar e-mail";

      if(this.mostrar_email === false){
        this.textoBotao = "Mostrar e-mail"
      }
    }
  }
};
</script>

<style>
  .paragrafo-pai {
    color: red;
  }
</style>