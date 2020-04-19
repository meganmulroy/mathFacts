<template>
  <div class="start">
    <div class="head-container">

    </div>
    <div>
        <p>How many addition problems can you answer correctly in 30 seconds?</p>
        <router-link v-bind:to="{name: 'game'}" class="btn">START</router-link>
        <!-- <a class="btn" v-on:click.prevent="timer(); newQuestion();">START</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
    };
  },
  methods: {
      resetQuiz() {
      this.$store.dispatch("addCorrect", -(this.$store.getters.correct));
      this.$store.dispatch("addIncorrect", -(this.$store.getters.incorrect));
    }
  },
  created() {
    this.resetQuiz();
  }
};
</script>

<style>
  div.start {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 100%;
  }
  .head-container {
    height: 4.7em;
    margin-bottom: 2em;
    background-color: blue;
    padding: 10px 0px;
  }
</style>
