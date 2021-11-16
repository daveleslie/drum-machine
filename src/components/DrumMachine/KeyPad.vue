<template>
  <div id="keypad-container">
    <div class="grid-container">
      <DrumKey
        class="grid-item"
        v-for="(key, i) in keys"
        :key="i"
        :name="key.name"
        :sound="key.audio"
        :letter="key.code"
        :ref="key.code"
        :power="power"
        :volume="volume"
        
      ></DrumKey><!-- @updateDisplay="updateDisplay" -->
    </div>
  </div>
</template>

<script>
import DrumKey from "./DrumKey.vue";
export default {
  props: ['power', 'volume'],
  components: {
    DrumKey,
  },
  data() {
    return {
      keys: [
        {
          name: "Boom",
          audio: require("../../assets/sounds/boom.wav"),
          code: "Q",
        },
        {
          name: "Clap",
          audio: require("../../assets/sounds/clap.wav"),
          code: "W",
        },
        {
          name: "Hihat",
          audio: require("../../assets/sounds/hihat.wav"),
          code: "E",
        },
        {
          name: "Kick",
          audio: require("../../assets/sounds/kick.wav"),
          code: "A",
        },
        {
          name: "Openhat",
          audio: require("../../assets/sounds/openhat.wav"),
          code: "S",
        },
        {
          name: "Ride",
          audio: require("../../assets/sounds/ride.wav"),
          code: "D",
        },
        {
          name: "Snare",
          audio: require("../../assets/sounds/snare.wav"),
          code: "Z",
        },
        {
          name: "Tink",
          audio: require("../../assets/sounds/tink.wav"),
          code: "X",
        },
        {
          name: "Tom",
          audio: require("../../assets/sounds/tom.wav"),
          code: "C",
        },
      ],
      display: ''
    };
  },
  mounted() {
    document.addEventListener('keypress', (e) => {
      let ref = e.key.toUpperCase();
      try {
        this.$refs[ref].playSound() 
      } catch (error) {
        return;
      }
    })
  },
  methods: {
    updateDisplay(val) {
      this.$emit('updateDisplay', val)
    }
  }
};
</script>

<style scoped>
#keypad-container {
  border: 1px solid;
  height: 250px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.grid-item {
  /* padding: 20px; */
  text-align: center;
}
</style>
