<template>
  <div>
    <TheHeader></TheHeader>
    <main>
      <DrumMachine></DrumMachine>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import DrumMachine from "./components/DrumMachine/DrumMachine.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    DrumMachine,
  },
   mounted() {
    let testLibrary = document.createElement("script");
    testLibrary.setAttribute(
      "src",
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
    );
    document.head.appendChild(testLibrary);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
