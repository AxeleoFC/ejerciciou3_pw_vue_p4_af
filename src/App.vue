<template>
  <ListaVehiculos></ListaVehiculos>
  <Vizualizarvehiculo></Vizualizarvehiculo>
</template>

<script>
import Vizualizarvehiculo from './modulos/components/Vizualizarvehiculo.vue';
import ListaVehiculos from './modulos/components/ListaVehiculos.vue';
export default {
  name: 'App',
  components: {
    Vizualizarvehiculo,
    ListaVehiculos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
