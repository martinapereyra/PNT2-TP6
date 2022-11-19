import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messageDisplay: "",
        colorDisplay : "",
        headerBackgrounColor: "",
        squares: [],
        backgroundColor: "",
        txtCorrect : 'You Picked Right!',
        txtAgain: 'Play Again!',
        txtTry: 'Try Again!',
        colors: [],
        startText: 'New Colors!',
        header: {
            backgroundColor: "steelblue",
        }

    },
    actions:{
        colorCheck({commit},square) {
            commit('colorCheckMut', square)        
        },

        setAllColorsTo({commit}, color){
            commit('setColors', color) 
          },

        createColors({commit}, count){
            commit('createColors', count)
        },
        pickColor({commit}, color){
            commit('pickColor', color)
        },

        inicializarSquares({commit}, cant){
            commit('inicializarSquares', cant)
        },

        iniciarJuego({commit}, texto){
            commit('reset', texto)
        }
          

    }, mutations:{
        colorCheckMut(state, square) {
            if(square.backgroundColor === state.colorDisplay){
                state.header.backgroundColor = state.colorDisplay
                state.squares.forEach( square => square.backgroundColor = state.colorDisplay)
                state.messageDisplay = state.txtCorrect
                state.startText = state.txtAgain 
                state.headerBackgrounColor = square.backgroundColor
              }else{
                square.backgroundColor = 'transparent'
                state.messageDisplay= state.txtTry 
              }

        },

        reset(state,texto){
            state.startText = texto 
            state.messageDisplay = ""
            state.header.backgroundColor= "steelblue"
        },
        pickColor(state, count){
            state.colorDisplay = state.colors[Math.floor(Math.random() * count)];
        },

        inicializarSquares(state, count){
            for(let i = 0 ; i < count ; i++){
            state.squares.push(
            { 
              backgroundColor : state.colors[i]
            })
            }
      },
        

        createColors(state, count){
            state.colors = [];
            for (let i = 0 ; i < count ; i++){
            state.colors.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")")
            }
        },

        
    }
})