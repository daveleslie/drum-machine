<template>
  <div id="drum-machine">
    <header><h1>Drum Machine</h1></header>
    <main>
      <KeyPad :power="powerIsOn" :volume="volume"></KeyPad><!-- @updateDisplay="updateDisplay" -->
      <DrumControls :display="soundDisplay" @togglePower="togglePower" @adjustVolume="setVolume"></DrumControls>
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
      soundDisplay: '&nbsp;',
      powerIsOn: true,
      volume: 0.5
    };
  },
  methods: {
    togglePower(powerIsOn) {
      this.powerIsOn = powerIsOn
    },
    setVolume(volLevel) {
      this.volume = volLevel;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

#drum-machine {
  width: 650px;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: dimgray;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

header {
  /* padding: 1rem; */
  font-family: 'Audiowide';
  color: aliceblue;
  text-decoration: underline;
}

main {
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
