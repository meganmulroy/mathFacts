<template>
  <div class="outer-container">
    <h2 class="timer">{{ $store.getters.secondsLeft }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalTimer: "",
    };
  },
  methods: {
    timer() {
      const now = Date.now();
      const end = now + 30 * 1000;
      this.countdown(end);
    },
    countdown(end) {
      this.intervalTimer = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);

        if (secondsLeft < 0) {
          this.intervalTimer = "";
          return;
        }
        this.$store.dispatch("minusOne", secondsLeft);
      }), this.secondsLeft*1000;
    },
  },
  created() {
    this.timer();
  }
};
</script>

<style>
.outer-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.timer {
  font-size: 4em;
  width: 100%;
  text-align: center;
  background-color: blue;
  color: white;
  margin: 0;
  padding: 10px 0px;
}
</style>
