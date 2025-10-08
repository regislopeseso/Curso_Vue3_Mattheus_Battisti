<template>
  <div>
    <p>Componente de mensagem</p>
    <div>
      <form id="burger-form">
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
            <option value="">Integral</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">
            Escolha a carne do seu burger:
          </label>
          <select id="carne" name="carne" v-model="carne">
            <option value="">Selecione a carne</option>
            <option value="">Maminha</option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">
            Escolha os opcionais:
          </label>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salamene</span>
          </div>
        </div>

        <div class="input-container">         
          <input type="submit" class="submit-btn" value="Criar meu Burger">   
        </div>
      </form>
    </div>
  </div>
  <p>Burger Form</p>
</template>

<script>
  export default {
    name: "BurgerForm"
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
