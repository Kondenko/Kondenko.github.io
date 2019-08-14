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
      stories: [[1, 2, 3]]
    };
  }
};
</script>

<style lang="scss">

#container {
  margin: 0 auto;
  height: 100vh;
  width: calc(100vh * 0.5625); // for some reason aspect ratio can't be used as a variable
}

#story {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>