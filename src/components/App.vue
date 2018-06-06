<template>
  <div id="app">
    <introduction></introduction>
    <projects id="projects"></projects>
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
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-content: flex-start;
  background: $mainBackgroundColor;
  & > div {
    padding: 25px 24px 25px;
    @include desktop-and-up {
      padding: 25px 50px 25px;
    }
  }
}

h1 {
  font-family: $font-hind-mysuru;
  font-style: normal;
  font-weight: bold;
  line-height: 125%;
  font-size: 48px;
  margin: 0;
}

h2 {
  font-family: $font-hind-madurai;
  font-style: bold;
  font-weight: 700;
  line-height: 50px;
  font-size: 36px;
  margin: 0;
}

h3 {
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: bold;
  line-height: 50px;
  font-size: 14px;
  margin: 0;
}

.body {
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  text-align: start;
}

.link {
  @extend .body;
  font-family: $font-hind-madurai;
  text-decoration: underline;
  text-decoration-style: unset;
  text-decoration-line: underline;
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