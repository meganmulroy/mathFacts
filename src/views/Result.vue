<template>
  <div>
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
  name: 'result',
  components: {
  }
}
</script>

<style>
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
  a.btnSO{
    height: 40px;
    padding: 5px 30px;
    color: darkslategrey;
    border-radius: 10px;
    border: 1px solid skyblue;
    background-color: skyblue;
  }
</style>