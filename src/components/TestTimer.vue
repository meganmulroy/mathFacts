<template>

    <div class="inner-container">
        <h2>
            {{ timeLeft }}
        </h2>
        <a v-on:click.prevent="timer">
            START
        </a>
    </div>

</template>

<script>

export default {
    data() {
        return{
            intervalTimer: '',
            selectedTime: 0,
            timeLeft: '00:00',
            // endTime: '0',
            // times: [
            //     {
            //         sec: 3,
            //         display: '3s'
            //     },
            //     {
            //         sec: 600,
            //         display: ' 10m'
            //     },
            //     {
            //         sec: 1800,
            //         display: '30m'
            //     }
            // ]
        }
    },
  methods: {
    setTime() {
      clearInterval(this.intervalTimer);
      this.timer(30);
    },
    timer() {
      const now = Date.now();
      const end = now + 30 * 1000;
      this.displayTimeLeft(30);

      this.selectedTime = 30;
    //   this.displayEndTime(end);
      this.countdown(end);
    },
    countdown(end) {
      // this.initialTime = this.selectedTime;
      this.intervalTimer = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);

        // if(secondsLeft === 0) {
        //   this.endTime = 0;
        // }

        if(secondsLeft < 0) {
            this.intervalTimer = '';
          return;
        }
        this.displayTimeLeft(secondsLeft)
      }, 1000);
    },
    displayTimeLeft(secondsLeft) {
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      this.timeLeft = `${zeroPadded(minutes)}:${zeroPadded(seconds)}`;
    },
    // displayEndTime(timestamp) {
    //   const end = new Date(timestamp);
    //   const hour = end.getHours();
    //   const minutes = end.getMinutes();

    //   this.endTime = `${hourConvert(hour)}:${zeroPadded(minutes)}`
    // },
  }
}

function zeroPadded(num) {
  // 4 --> 04
  return num < 10 ? `0${num}` : num;
}

// function hourConvert(hour) {
//   // 15 --> 3
//   return (hour % 12) || 12;
// }
</script>

<style>
body {
  font-family: 'Sarpanch', sans-serif;
  color: hsl(0, 0%, 7%);
  background: #f2f1ed;
  background: radial-gradient(hsl(204, 86%, 93%), hsl(204, 86%, 63%));
}
.outer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
/* ==================
 *  APP
 * ================== */
.countdown {
  margin: 5px 0 30px;
}
h1 {
  text-align: center;
  font-size: 18px;
  color: hsl(204, 86%, 43%);
}
h2 {
  font-size: 120px;
  width: 390px;
  line-height: 1;
  text-align: center;
}
h3 {
  font-size: 28px;
  display: flex;
  align-items: baseline;
  justify-content: center;
}
h3 span {
  width: 70px;
  border-bottom: 2px solid hsl(348, 100%, 71%);
  margin-left: 15px;
  text-align: center;
}
.time {
  display: flex;
  justify-content: center;
}
.columns {
  margin-left: 0;
  margin-right: 0;
}

</style>
