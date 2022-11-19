<template>
  <div>
    <Cabecera></Cabecera>
		<div id="navigator">
			<button @click="start()">{{$store.state.startText}}</button>
			<span id="message"> {{$store.state.messageDisplay}}</span>
			<button @click="easyPlay()" :class="easyClass" >easy</button>
			<button @click="hardPlay()" :class="hardClass" >hard</button>
		</div>
		<GrillaColores >
    </GrillaColores>
	</div>
</template>

<script>

import Cabecera from './Cabecera.vue'
import GrillaColores from './GrillaColores.vue'

  export default  {
    name: 'src-components-navegacion',
    components: {
      Cabecera,
      GrillaColores
    },
    data () {
      return {
        colorCount : 6,
        isHard : true,
        easyClass : '',
        hardClass : 'selected',
        colorMessage : '',
        squares : [],
        colorDisplay : this.$store.state.colorDisplay,
        startText : 'New Colors!',
        messageDisplay : "",
        colors : [],
      }
    },

    mounted () {
      this.$store.dispatch('createColors', this.colorCount)
      this.colors = this.$store.state.colors
      this.$store.dispatch('pickColor', this.colorCount)
      this.colorDisplay = this.$store.state.colorDisplay,
       this.$store.dispatch('inicializarSquares', this.colorCount)
       this.squares = this.$store.state.squares

    

    },

    methods: {

       start(){
        this.$store.dispatch('createColors', this.colorCount)
        this.$store.dispatch('iniciarJuego', 'New Colors!')
        this.$store.dispatch('pickColor', this.colorCount)
        this.colors = this.$store.state.colors
        this.colorDisplay = this.$store.state.colorDisplay
        for(let i = 0; i < this.squares.length ; i++){
          this.squares[i].backgroundColor = this.$store.state.colors[i]
        }
      },

      easyPlay(){
        if(this.isHard){
          this.isHard = false;
          this.easyClass = 'selected'
          this.hardClass = ''
          this.colorCount = 3
          for(let i = 0 ; i < this.colorCount ; i++){
            this.squares[i + 3].display = 'none'
          }
          this.start()
        }
      },
      hardPlay(){
        if(!this.isHard){
          this.isHard = true;
          this.hardClass = 'selected'
          this.easyClass = ''

          this.colorCount = 6
          this.start()
          for(let i = 3 ; i < this.colorCount ; i++){
            this.squares[i].display = 'block'
          }
        }
      },
     
    /*   pickColor() {
        let quantity;
        if (this.isHard) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity);
      },
 */
      /* createNewColors(numbers){
        let colors = []
        for (let i = 0 ; i < numbers ; i++){
          colors.push(this.createRandomStringColor())
        }

        return colors;
      }, */

    /*   createRandomStringColor(){
        return "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")"
      },

      randomInt() {
        return Math.floor(Math.random() * 256)
      }, */

      /* inicializarSquares(){
        let newSquares = []
        for(let i = 0 ; i < this.colorCount ; i++){
          newSquares.push(
            { 
              backgroundColor : this.colors[i]
            }
          )
        }
        return newSquares
      }, */

    },
    
  }
</script>

<style scoped lang="css">
  #navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }
  #message {
    color: #000000;
    display: inline-block;
    width: 20%;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
</style>