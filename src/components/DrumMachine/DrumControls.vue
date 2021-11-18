<template>
  <div id="controls-container">
    <h4 class="control-label">Power</h4>
    <label class="switch">
      <input type="checkbox" name="power-switch" id="power-switch" checked @change="setPower">
      <span class="slider"></span>
    </label>
    <p id="display" v-html="display" :class="{ displayOn : powerIsOn }"></p>
    <div class="volume-control">
      <label for="volume-slider" class="control-label">Volume</label>
      <input type="range" name="volume-slider" id="volume-slider" min="0" max="100" @change="setVolume">
    </div>
  </div>
</template>

<script>
export default {
  props: ['display'],
  data() {
    return {
      powerIsOn: true,
      volume: 1 
    }
  },
  computed: {
    clips() {
      return [].slice.call(document.getElementsByClassName('clip'))
    }
  },
  methods: {
    setPower(event) {
      const powerIsOn = event.target.checked;
      this.powerIsOn = event.target.checked;
      this.clearDisplay();
      this.$emit('togglePower', powerIsOn);
    },
    clearDisplay() {
      document.getElementById('display').innerHTML = '&nbsp;';
    },
    setVolume(event) {
      let volLevel = event.target.value / 100;
      // this.$emit('adjustVolume', volLevel);
      this.clips.forEach(sound => {
        sound.volume = volLevel
      })
      // this.volume = event.target.value / 100;
    }
  }
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
  border: 1px solid black;
  padding: 2px;
  width: 200px;
  /* height: 30px; */
    font-family: 'Press Start 2P';
  text-align: center;
}

.displayOn {
  background-color: aqua;
  color: blue;
}

.control-label {
  margin: 0;
  padding: 0;
  font-family: 'Audiowide';
  color: aliceblue;
}

.volume-control {
  margin: 5px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CCC;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

</style>