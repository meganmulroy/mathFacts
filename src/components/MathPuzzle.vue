<template>
    <div class="outerBox">
        <div v-if="!started" class="start">
            <div>
                <p>How many addition problems can you answer correctly in 30 seconds?</p>
                <a class="btn" v-on:click.prevent="timer(); newQuestion();">START</a>
            </div>
        </div>
        <div v-if="started" class="timeTest">
            <div class="timer">
                <h2>{{ timeLeft }}</h2>
            </div>
            <div>
                <div class=mathProblem>
                    <p class="number"><span class="left"></span><span class="right">{{ numberOne }}</span></p>
                    <p class="number"><span class="left">{{ operation }}</span><span class="right">{{ numberTwo }}</span></p>
                </div>
                
                <form v-if="started" v-on:submit.prevent="checkAnswer">
                    <input type="number" input="numeric" v-model.number="answer"/><br>
                    <button hidden type="submit">SUBMIT</button>
                </form>
                <div class="score">
                    <span>Correct: {{ correctCount }}</span>
                    <span>Incorrect: {{ incorrectCount }}</span>
                </div>
            </div>
        </div>
        <div v-if="finished" class="finished">
            <div>
                <p>You answered {{ correctCount }} questions correctly out of {{ correctCount + incorrectCount}}.</p>
                <a class="btnSO" v-on:click.prevent="resetQuiz">START OVER</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            started: false,
            finished: false,
            intervalTimer: '',
            timeLeft: '',
            numberOne: 2,
            numberTwo: 10,
            operation: '+',
            answer: "",
            correctCount: 0,
            incorrectCount: 0,
        }
    },
    methods: {
        random21() {
            return Math.floor(Math.random() * 21);
        },
        checkAnswer() {
            if(this.numberOne + this.numberTwo === this.answer) {
                this.correctCount++;
            } else {
                this.incorrectCount++;
            }   
            this.newQuestion();
        },
        newQuestion() {
            this.numberOne = this.random21();
            this.numberTwo = this.random21();
            this.answer = "";
        },
        resetQuiz() {
            this.started = false;
            this.finished = false;
            this.correctCount = 0;
            this.incorrectCount = 0;   
        },
        timer() {
            this.started = true;

            const now = Date.now();
            const end = now + 30 * 1000;
            this.displayTimeLeft(30);

            this.countdown(end);
        },
        countdown(end) {
            this.intervalTimer = setInterval(() => {
                const secondsLeft = Math.round((end - Date.now()) / 1000);

                if(secondsLeft < 0) {
                    clearInterval(this.intervalTimer);
                    this.finished = true;
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
    }
}
function zeroPadded(num) {
  // 4 --> 04
  return num < 10 ? `0${num}` : num;
}
</script>

<style>
    div.outerBox {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-width: 100%;
        max-width: 100%;
        margin: auto;
        padding: auto;
        min-height: 100%;
        max-height: 100%;
        background-color: skyblue;
    }
    div.start {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 100%;
        margin: auto;
        padding: auto;
        height: 100vh;
        background-color: skyblue;
        font-weight: bold;
    }
    div.timer{
        display: flex;
        justify-content: space-around;

    }
    h2{
        width: 20vw;
        padding: 10px;
        border-radius: 10px;
        color: skyblue;
        border: 1px solid darkslategrey;
        background-color: darkslategrey;

    }
    div.mathProblem{
        width: 30vw;
        margin: 0 auto 10px auto;
        border-bottom: 2px solid darkslategrey;
    }
    span.left{
        display: inline-block;
        width: 20%;
    }
    span.right{
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
        padding: 0 ;
        color: darkslategrey;
    }
    div.score {
        text-transform: uppercase;
        padding-top: 10px;
    }
    div.score span {
        padding: 0 5px;
    }
    div.finished {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        margin: auto;
        padding: auto;
        height: 100vh;
        color: white;
        background-color: darkslategrey;
    }
    a.btn{
        height: 40px;
        padding: 5px 30px;
        color: white;
        border-radius: 10px;
        border: 1px solid darkslategrey;
        background-color: darkslategrey;
    }

    a.btnSO{
        height: 40px;
        padding: 5px 30px;
        color: darkslategrey;
        border-radius: 10px;
        border: 1px solid skyblue;
        background-color: skyblue;
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
