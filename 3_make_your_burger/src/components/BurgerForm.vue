<template>
  <div>
    <p>Componente de mensagem</p>
    <div>
      <form id="burger-form" @submit="orderBurger">
        <div class="input-container">
          <label for="nome">
            Nome do cliente:
          </label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Ditie o seu nome">
        </div>

        <div class="input-container">
          <label for="pao">
            Escolha o pão:
          </label>
          <select id="pao" name="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{pao.tipo}}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">
            Escolha a carne do seu burger:
          </label>
          <select id="carne" name="carne" v-model="carne">
            <option value="">Selecione a carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{carne.tipo}}
            </option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">
            Escolha os opcionais:
          </label>
          <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
             <span>
              {{opcional.tipo}}
            </span>
          </div>
        </div>

        <div class="input-container">         
          <input type="submit" class="submit-btn" value="Pedir meu Burger">   
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  

  export default {
    name: "BurgerForm",
    data() {
      return {
        paes: null,
        carnes: null,
        opcionaisdata: null,
        nome: null,
        pao: null,
        carne: null,
        opcionais: [],
        status: "Solicitado",
        msg: null,
      }
    },
    methods: {
      async getIngredientes() {
        const req = await fetch("http://localhost:3000/ingredientes");
        const data = await req.json();

        this.paes = data.paes;
        this.carnes = data.carnes;
        this.opcionaisdata = data.opcionais;       
      },
      async orderBurger(e) {
        e.preventDefault();

        const data = {
          nome: this.nome,
          carne: this.carne,
          pao: this.pao,
          opcionais: Array.from(this.opcionais),
          status: "Solicitado"
        };

        const dataJson = JSON.stringify(data);

        const req = await fetch("http://localhost:3000/burgers", {
          method: "POST",
          headers: { "Content-Type" : "application/json" },
          body: dataJson
        });

        const res = await req.json();

        this.msg = "Pedido realizado com sucesso!";

        // clear message
        setTimeout(() => this.msg = "", 3000);

        // limpar campos
        this.nome = "";
        this.carne = "";
        this.pao = "";
        this.opcionais = [];
      }
    },
    mounted() {
      this.getIngredientes()
    }
  }
</script>

<style scoped>
  #burger-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label{
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--graphite-color);
    padding: 5px 10px;
    border-left: 4px solid var(--mustard-color)
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title{
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: var(--graphite-color);
    color: var(--mustard-color);
    font-weight: bold;
    border: 2px solid var(--graphite-color);
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
    width: 100%;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: var(--graphite-color);
  }
</style>
