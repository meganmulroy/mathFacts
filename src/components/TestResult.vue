<template>
  <div>
    <div class="finished">
      <div>
          <p>You answered {{ $store.getters.correct }} questions correctly out of {{ $store.getters.correct + $store.getters.incorrect}}.</p>
          <router-link v-bind:to="{name: 'home'}" class="btn">START OVER</router-link>
          <!-- <a class="btnSO" v-on:click.prevent="resetQuiz">START OVER</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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