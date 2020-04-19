<template>
  <div>
    <div class="results">
      <div>
          <p>You answered {{ $store.getters.correct }} questions correctly out of {{ $store.getters.correct + $store.getters.incorrect}}.</p>
          <router-link v-bind:to="{name: 'home'}" class="btn">START OVER</router-link>
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
  div.results {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 50%;
  }
</style>