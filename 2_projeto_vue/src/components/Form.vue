<template>
  <div>
    <h2>Meu formulário:</h2>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name">
      </div>
  
      <div>
        <input type="text" v-model="email"> 
      </div>
      <Submit />
    </form>

    <p>Conteúdo</p>
    <p>Conteúdo</p>
    <p>Conteúdo</p>
  </div>
</template>

<script >
  import InputText from './form/InputText.vue';
  import Submit from './form/Submit.vue';

  export default {
    name: "Form",
    components: {
      InputText,
      Submit
    },
    data() {
      return {
        name: "",
        email: ""
      }
    },
    methods: {
      enviarFormulario(e) {
        e.preventDefault();

        const name = this.name;
        const email = this.email;

        console.log("Formulario Enviado")
        console.log("Name is: ", name)
        console.log("Email is: ",email)

        // Ajax entra a partir daqui...
        // ... inserir dados no banco.
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 150px;
  }
</style>