<template>
        <GuardarEstudiante ></GuardarEstudiante>

        <TodosEstudiante ></TodosEstudiante>
  </template>
  
  <script>
      import TodosEstudiante from '@/modules/estudiante/TodosEstudiante.vue';
      import GuardarEstudiante from '@/modules/estudiante/GuardarEstudiante.vue';

  export default {
    components:{
        TodosEstudiante,GuardarEstudiante
    },
    mounted() {
      console.log(this.token)
    },
    data() {
      return {
        token:null
      }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>