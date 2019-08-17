<template>
  <div id="container">
    <Stories v-if="isFullscreen" id="story" :stories="stories" :slideDuration="4000" />
    <img :src="avatar" @click="showStory" v-if="!isFullscreen" id="image_story" />
  </div>
</template>

<script>
import Stories from "stories/src/Stories.vue";
import TextButton from "ui/TextButton.vue";
const utils = require("src/utils.js");

export default {
  name: "Story",
  components: {
    Stories,
    TextButton
  },
  data: () => {
    return {
      isFullscreen: false,
      avatar: require("assets/img_avatar.png"),
      stories: [
        [
          require("assets/story/1.gif"),
          require("assets/story/2.gif"),
          require("assets/story/3.gif"),
          require("assets/story/4.gif"),
          require("assets/story/5.gif"),
          require("assets/story/6.gif"),
          require("assets/story/7.gif")
        ]
      ]
    };
  },
  mounted: function() {},
  methods: {
    showStory: function() {
      utils.toggleFullscreen();
      this.isFullscreen = true;
    }
  }
};
</script>

<style lang="scss">
@import "~res/colors";

#container {
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: calc(
    100vh * 0.5625
  ); // for some reason aspect ratio can't be used as a variable
  @include mobile-only {
    height: 100%;
    width: 100vw;
  }
}

#story {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
}

$size: 72px;
#image_story {
  /* Position */
  width: $size;
  height: $size;
  position: absolute;
  left: 50%;
  margin-left: -($size / 2);
  top: 50%;
  margin-top: -($size / 2);
  border-radius: 3px;
  /* Border */
  border-style: solid;
  border-radius: 100%;
  border-width: 3px;
  padding: 2px;
  border-color: $accentColor;
}

.timeline > .slice {
  border-radius: 8px;
}

.timeline > .slice > .progress {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
}
</style>