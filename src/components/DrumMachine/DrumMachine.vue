<template>
  <div id="drum-machine">
    <header><h2>Drum Machine</h2></header>
    <main>
      <KeyPad @updateDisplay="updateDisplay"></KeyPad>
      <DrumControls :display="soundDisplay"></DrumControls>
    </main>
  </div>
</template>

<script>
import KeyPad from "./KeyPad.vue";
import DrumControls from "./DrumControls.vue";

export default {
  components: {
    KeyPad,
    DrumControls,
  },
  data() {
    return {
      soundDisplay: '&nbsp;'
    };
  },
  methods: {
    updateDisplay(val) {
      this.soundDisplay = val;
    }
  }
};
</script>

<style scoped>
#drum-machine {
  width: 650px;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

header {
  /* padding: 1rem; */
}

main {
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
