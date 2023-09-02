<template>
    <div class="container-general">

    <div class="container">
        <label for="">Semilla</label>
        <input type="text" v-model="token.semilla">
        <label for="">Tiempo Vigencia</label>
        <input type="text" v-model="token.vigencia">
        <label for="">Token</label>
        <textarea class="token" type="text" v-model="generado"/>
        <button @click="generar">Generar</button>
    </div>
</div>

  </template>
  
  <script>
  import { obtenerTokenFachada } from '@/modules/token/TokenCliente';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
        return {
            token:{
                semilla:null,
                vigencia:null
            },
            generado:null
        }
    },
    methods: {
        async generar(){
           
            this.generado=await obtenerTokenFachada(this.token)
            console.log(this.generado.data)
        }
    },

  }
  </script>
  
  <style scoped>
 .container{
    display: grid;
    width: 50%;
 }
 .container-general{
    display: flex;
    justify-content: center;
    align-items: center;
 }
 input{
    border: solid 2px black;
    border-radius: 5px;
 }
 .token{
    border: solid 2px black;
    border-radius: 5px;
    height: 50px;
 }
 button{
        margin-top: 20px;
    background-color: aqua;
    
 }
  </style>