<template>
  <div id="story">
    <Stories :stories="[[1, 2, 3]]" />
  </div>
</template>

<script>
import Stories from "stories/src/Stories.vue";

export default {
  name: "Story",
  components: {
    Stories
  }
};
</script>

<style>
</style>