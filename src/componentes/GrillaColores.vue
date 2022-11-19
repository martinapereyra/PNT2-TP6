<template>
  <div id="src-components-grillaColores">
		<div v-for="(square, index) in $store.state.squares" :key="index">
      <div class="square" :style="square"  
      @click='colorCheck(square)'></div>
    </div>
  </div>
</template>

<script>
  export default  {
    name: 'src-components-grillaColores',
    props: [],
    data(){
      return{
      
      }
    },
    methods: {
      colorCheck(square){
        this.$store.dispatch('colorCheck', square)
      },
    }
  }
</script>

<style scoped lang="css">

#src-components-grillaColores {
	margin: 20px auto;
	max-width: 600px;
}
.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}

</style>