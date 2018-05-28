<template>
  <div id="app">
    <introduction></introduction>
    <projects></projects>
  </div>
</template>

<script>
import Introduction from "./introduction/Introduction.vue";
import Projects from "./projects/Projects.vue";

export default {
  name: "app",
  components: {
    Introduction,
    Projects
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-content: flex-start;
  padding: 0px 16px;
}

h1 {
  font-family: $font-hind-mysuru;
  font-style: normal;
  font-weight: bold;
  line-height: 125%;
  font-size: 48px;
  margin: 0;
}

.body {
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  text-align: start;
}

.link {
  @extend .body;
  font-family: $font-hind-madurai;
  text-decoration: underline;
  text-decoration-style: unset;
  text-decoration-line: underline;
  text-transform: lowercase;
  color: $accentColor;
  &:hover {
    opacity: $hoverOpacity;
  }
}

#avatar {
  width: 150px;
  height: 150px;
}
</style>