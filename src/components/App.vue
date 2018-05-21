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

<style lang="scss">
h1 {
  font-family: $font-hind-mysuru;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 48px;
  color: $accentColor;
}

p {
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 50px;
  text-align: start;
}

#avatar {
  width: 150px;
  height: 150px;
}
</style>