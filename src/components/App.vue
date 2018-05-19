<template>
  <div id="app">
    <!-- TODO Move to a separate component -->
    <img id="avatar" v-bind:src="avatar">
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      hello: "Hi. I'm Vladimir Kondenko.",
      avatar: require("../assets/img_avatar.png")
    };
  }
};
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Hind+Madurai");

$accentColor: #ff4848;
$textPrimaryColor: #0d0d0d;
$textSecondaryColor: #404040;

$font-family: "Hind Madurai", sans-serif;

h1 {
  font-family: $font-family;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 48px;
  color: $accentColor;
}

#avatar {
  width: 150px;
  height: 150px;
}

</style>