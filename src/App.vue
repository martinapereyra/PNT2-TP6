<template>
  <div id="app">

    <Navegacion/>

  </div>
</template>

<script>


import Navegacion from './componentes/Navegacion.vue'


export default {
  name: 'App',
  components: {
    Navegacion
  }
}
</script>

<style>
body{
  background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
</style>
