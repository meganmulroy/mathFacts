import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    secondsLeft: 30,
    correct: 0,
    incorrect: 0
  },
  mutations: {
    MINUS_ONE(state, secondsLeft) {
      state.secondsLeft = secondsLeft
    },
    ADD_CORRECT(state, amount) {
      state.correct += amount
    },
    ADD_INCORRECT(state, amount) {
      state.incorrect += amount
    }
  },
  actions: {
    minusOne: (context, payload) => {
      context.commit("MINUS_ONE", payload)
    },
    addCorrect: (context, amount) => {
      context.commit("ADD_CORRECT", amount)
    },
    addIncorrect: (context, amount) => {
      context.commit("ADD_INCORRECT", amount)
    }
  },
  getters: {
    secondsLeft: state => state.secondsLeft,
    correct: state => state.correct,
    incorrect: state => state.incorrect
  }
})