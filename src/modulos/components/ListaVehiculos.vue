<template>
    <label for="">Id</label>
    <label for="">Placa</label>
    <label for="">Marca</label>
    <label for="">Modelo</label>
    <label for="">Cilindraje</label>
    <li>
        
    </li>
</template>

<script>
import {todosVehiculoFachada} from '../helpers/vehiculos.js'
export default {
    data(){
        return{
            lista:null,
        }
    },
    methods(){
        async function obtenerVehiculos(){
            this.lista=await todosVehiculoFachada()
        }
    }
}
</script>

<style>
label{
    border: 100px;
}
</style>