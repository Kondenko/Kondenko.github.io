<template>
  <div id="container">
    <Stories id="story" :stories="stories" :slideDuration="4000" />
  </div>
</template>

<script>
import Stories from "stories/src/Stories.vue";

export default {
  name: "Story",
  components: {
    Stories
  },
  data: () => {
    return {
      stories: [
        [
          require("assets/story/1.gif"),
          require("assets/story/2.gif"),
          require("assets/story/3.gif"),
          require("assets/story/4.gif"),
          require("assets/story/5.gif"),
          require("assets/story/6.gif"),
          require("assets/story/7.gif"),
        ]
      ]
    };
  }
};
</script>

<style lang="scss">
#container {
  margin: 0 auto;
  height: 100vh;
  width: calc(
    100vh * 0.5625
  ); // for some reason aspect ratio can't be used as a variable
  @include mobile-only {
    height: 100%;
    width: 100vw;
  }
}

#story {
  position: relative;
  height: 100%;
  width: 100%;
}

.timeline > .slice {
  border-radius: 8px;
}

.timeline > .slice > .progress {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
}
</style>