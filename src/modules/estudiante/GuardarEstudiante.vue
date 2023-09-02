<template >
      <div class="container-general">

<div class="container">
  
    <label for="">Token</label>
    <textarea class="token" type="text" v-model="estudiante.token"/>
    <label for="">Nombre</label>
    <input type="text" v-model="estudiante.nombre">
    <label for="">Apellido</label>
    <input type="text" v-model="estudiante.apellido">
    <label for="">Cedula</label>
    <input type="text" v-model="estudiante.cedula">
    
    <button @click="guardar" >Guardar</button>
</div>

</div>

</template>
<script>
import { guardarEstudianteFachada } from '@/modules/estudiante/EstudianteCliente';

export default {
    
    data() {
        return {
            estudiante:{
                token:null,
                nombre:null,
                apellido:null,
                cedula:null
            },
        }
    },
    methods: {
        async guardar(){

            guardarEstudianteFachada(this.estudiante)
            this.estudiante={
                token:this.estudiante.token,
                nombre:null,
                apellido:null,
                cedula:null
            }


        },
    },
}
</script>
<style scoped>
.container{
    display: grid;
    width: 50%;
    border: 2px black dotted;
    padding:20px

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
 .container-tabla{
    margin-top:20px;
    display: grid;
    width: 50%;
    border: 2px black dotted;

 }
</style>