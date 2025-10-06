<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>

    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <!-- v-for example -->
      <li v-for="(tech, index) in tecnologias" :key="index">
        {{ tech }}
      </li>
    </ul>

    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email: "matheus@email.com",
      // Array used by v-for
      tecnologias: ["JavaScript", "PHP", "Python"]
    };
  }
};
</script>
