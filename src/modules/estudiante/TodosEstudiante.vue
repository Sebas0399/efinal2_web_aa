<template >
   <div class="container-tabla">
    <table>
        <thead>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>

        </thead>
        <tbody v-for="(est, index) in estudiantes" :key="index">
            <td>{{ est.id }}</td>
            <td>{{ est.nombre }}</td>
            <td>{{ est.apellido }}</td>
            <td>{{ est.cedula }}</td>

        </tbody>
    </table>
</div>
</template>
<script>
import { getAllEstudiantesFachada } from '@/modules/estudiante/EstudianteCliente';

export default {
    data() {
        return {
                       estudiantes:null
        }
    },
    methods: {
        
        async obtenerEstudiantes(){
            this.estudiantes=await getAllEstudiantesFachada(this.estudiante.token);
        }
    },
    props:{
        
    }
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