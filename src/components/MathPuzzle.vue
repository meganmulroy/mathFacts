<template>
  <div class="outerBox">
    <div class="timeTest">
      <div>
        <div class="mathProblem">
          <p class="number">
            <span class="left"></span>
            <span class="right">{{ numberOne }}</span>
          </p>
          <p class="number">
            <span class="left">{{ operation }}</span>
            <span class="right">{{ numberTwo }}</span>
          </p>
        </div>

        <form v-on:submit.prevent="checkAnswer">
          <input type="number" input="numeric" v-model.number="answer" />
          <br />
          <button hidden type="submit">SUBMIT</button>
        </form>
        <div class="score">
          <span>Correct: {{ $store.getters.correct }}</span>
          <span>Incorrect: {{ $store.getters.incorrect }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOne: 2,
      numberTwo: 10,
      operation: "+",
      answer: "",
      // correctCount: 0,
      // incorrectCount: 0
    };
  },
  methods: {
    random21() {
      return Math.floor(Math.random() * 21);
    },
    checkAnswer() {
      if (this.numberOne + this.numberTwo === this.answer) {
        this.$store.dispatch("addCorrect", 1);
      } else {
        this.$store.dispatch("addIncorrect", 1);
      }
      this.newQuestion();
    },
    newQuestion() {
      this.numberOne = this.random21();
      this.numberTwo = this.random21();
      this.answer = "";
    },
    resetQuiz() {
      // this.correctCount = 0;
      this.$store.dispatch("addCorrect", -(this.$store.getters.correct));

      this.incorrectCount = 0;
    }
	},
	created() {
    this.newQuestion();
  }
};
</script>

<style>
div.mathProblem {
  width: 30vw;
  margin: 0 auto 10px auto;
  border-bottom: 2px solid darkslategrey;
}
span.left {
  display: inline-block;
  width: 20%;
}
span.right {
  display: inline-block;
  width: 80%;
  text-align: center;
}
.number {
  padding: 0 20px;
  text-align: right;
  font-size: 2em;
}
div.mathProblem p {
  margin: 0;
}
input {
  height: 30px;
  width: 30vw;
  font-size: 2em;
  text-align: center;
  padding: 0;
  color: darkslategrey;
}
div.score {
  text-transform: uppercase;
  padding-top: 10px;
}
div.score span {
  padding: 0 5px;
}

input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
