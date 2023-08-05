<template>
  <div class="contenedor">
    <label for="">Id</label>
    <input v-model="id" type="text" />
    <label for="">Placa</label>
    <input v-model="placa" type="text" />
    <label for="">Marca</label>
    <input v-model="marca" type="text" />
    <label for="">Modelo</label>
    <input v-model="modelo" type="text" />
    <label for="">Cilindraje</label>
    <input v-model="cilindraje" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      placa: null,
      marca: null,
      modelo: null,
      cilindraje: null,
    };
  },
};
</script>

<style>
.contenedor {
  align-items: center;
  align-content: center;
}
</style>