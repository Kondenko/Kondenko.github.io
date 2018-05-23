<template>
  <div id="app">
    <introduction></introduction>
  </div>
</template>

<script>
import Introduction from "./Introduction.vue";

export default {
  name: "app",
  components: {
    Introduction
  }
};
</script>

<style lang="scss" >
#app {
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0px 16px;
}

h1 {
  font-family: $font-hind-mysuru;
  font-style: normal;
  font-weight: bold;
  line-height: 125%;
  font-size: 48px;
  color: $accentColor;
  margin: 0;
}

p {
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  text-align: start;
}

a {
  @extend p;
  font-family: $font-hind-madurai;
  text-decoration: underline;
  text-decoration-style: unset;
  text-decoration-line: underline;
  text-transform: lowercase;
  color: $accentColor;
}

#avatar {
  width: 150px;
  height: 150px;
}
</style>