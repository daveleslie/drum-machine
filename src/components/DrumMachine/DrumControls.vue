<template>
  <div id="controls-container">
    <p id="display" v-html="display"></p>
  </div>
</template>

<script>
export default {
  props: ['display']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#controls-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  padding: 10px;
  /* margin-bottom: 20px; */
  height: 250px;
  width: 250px;
}

#display {
  border: 2px solid black;
  padding: 2px;
  width: 200px;
  /* height: 30px; */
  background-color: aqua;
  color: blue;
  font-family: 'Press Start 2P';
  text-align: center;
}
</style>