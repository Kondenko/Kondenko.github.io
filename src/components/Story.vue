<template>
  <div id="container" oncontextmenu="return false;">
    <Stories v-if="!requireFullscreen" id="story" :stories="stories" :slideDuration="duration" />
    <div class="content" v-if="requireFullscreen" @click="showStory">
      <img :src="avatar" id="image_story" />
      <p class="title1">Watch my story</p>
    </div>
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
      requireFullscreen: utils.isMobileDevice(),
      avatar: require("assets/img_avatar.png"),
      duration: 5000,
      stories: [
        [
          require("assets/story/1.jpg"),
          require("assets/story/2.jpg"),
          require("assets/story/3.jpg"),
          require("assets/story/4.jpg"),
          require("assets/story/5.jpg"),
          require("assets/story/6.jpg"),
          require("assets/story/7.jpg")
        ]
      ]
    };
  },
  mounted() {
    this.$ga.page({
      page: "/story",
      title: "Story",
      location: window.location.href
    });
  },
  methods: {
    showStory: function() {
      this.requireFullscreen = false;
      utils.toggleFullscreen();
    }
  }
};
</script>

<style lang="scss">
@import "~res/colors";
@import "~res/text-styles";

#container {
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: calc(
    100vh * 0.5625
  ); // for some reason aspect ratio can't be used as a variable
  @include mobile-only {
    height: 100%;
    width: 100%;
  }
}

#story {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  .content {
    object-fit: contain;
  }
}

.content {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

$size: 72px;
#image_story {
  /* Position */
  width: $size;
  height: $size;
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
  background: white;
}
</style>