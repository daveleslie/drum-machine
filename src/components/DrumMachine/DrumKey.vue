<template>
  <button class="drum-pad" type="button" :id="name" @click="playSound">
    {{ letter
    }}<audio :id="letter" class="clip" :src="sound" preload="auto"></audio>
  </button>
</template>

<script>
export default {
  props: ["name", "sound", "letter", "power", "volume"],
  methods: {
    playSound() {
      if (!this.power) { return }
      let sound = document.getElementById(this.letter);
      document.getElementById('display').innerText = this.name;
      sound.volume = this.volume;
      sound.currentTime = 0;
      let playing = sound.play();
      if (playing !== undefined) {
        playing
          .then(() => {
            // this.$emit('updateDisplay', this.name);
            
  
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

button {
  font-family: 'Audiowide';
  padding: 18px 23px;
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
  filter: drop-shadow(4px 4px rgba(0, 0, 0, 0.76));
}
</style>
