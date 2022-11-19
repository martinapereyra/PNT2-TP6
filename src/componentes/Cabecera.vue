<template>
    <div id="src-components-cabecera" :style="$store.state.header">
      <h1>The Great <br>
        <span id="colorDisplay">{{$store.state.colorDisplay}}</span><br>
        Guessing Game
      </h1>
    </div>
</template>

<script>
  export default  {
    name: 'src-components-cabecera',
    props: []
}
</script>

<style scoped lang="css">
#src-components-cabecera {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}

#colorDisplay {
  font-size: 200%;
}
</style>