<template>
  <div class="time-test">
    <test-timer></test-timer>
    <math-puzzle v-if="timeLeft > 0"></math-puzzle>
    <test-result v-if="timeLeft === 0"></test-result>
  </div>
</template>

<script>
import MathPuzzle from '@/components/MathPuzzle.vue'
import TestTimer from '@/components/TestTimer.vue'
import TestResult from '@/components/TestResult.vue'

export default {
  name: "game",
  components: {
    MathPuzzle,
    TestTimer,
    TestResult
  },
  data() {
    return {
    };
  },
  computed: {
    timeLeft() {
      return this.$store.getters.secondsLeft;
    }
  }
};
</script>

<style>
.time-test {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
