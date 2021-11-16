<template>
  <button class="drum-pad" type="button" :id="name" @click="playSound">
    {{ letter
    }}<audio :id="letter" class="clip" :src="sound" preload="none"></audio>
  </button>
</template>

<script>
export default {
  props: ["name", "sound", "letter"],
  methods: {
    playSound() {
      let sound = document.getElementById(this.letter);
      sound.currentTime = 0;
      let playing = sound.play();
      if (playing !== undefined) {
        playing
          .then(() => {
            console.log("sound playing");
            this.$emit('updateDisplay', this.name);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    document.addEventListener("keypress", (e) => {
      if (e.key.toUpperCase() === this.letter.toUpperCase()) {
        this.playSound();
      }
    });
  },
};
</script>

<style scoped>
button {
  padding: 20px 25px;
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
  filter: drop-shadow(4px 4px rgba(0, 0, 0, 0.76));
}
</style>
