<template>
  <div id="app">
    <k-menu ref="mainMenu" :items="menuItems"></k-menu>
    <introduction class="page" @isVisible="onVisibilityChange"></introduction>
    <projects class="page" @isVisible="onVisibilityChange"></projects>
    <experience class="page" @isVisible="onVisibilityChange"></experience>
    <p class="caption footer" v-html="copyright"></p>
  </div>
</template>

<script>
import KMenu from "./menu/KMenu.vue";
import Introduction from "./introduction/Introduction.vue";
import Projects from "./projects/Projects.vue";
import Experience from "./experience/Experience.vue";

export default {
  name: "app",
  components: {
    KMenu,
    Introduction,
    Projects,
    Experience
  },
  data: function() {
    const itemsMap = {
      introduction: "About me",
      projects: "Projects",
      experience: "Experience"
    };
    return {
      menuItems: itemsMap,
      copyright: `
      Copyright © ${new Date().getFullYear()} Vladimir Kondenko
      <br> Made with ❤ and Vue.js
      `
    };
  },
  methods: {
    onVisibilityChange: function(id) {
      this.$refs.mainMenu.onItemSelected(id);
    }
  }
};
</script>

<style lang="scss">
@import '~res/text-styles';

#app {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-content: flex-start;
  background: $mainBackgroundColor;
  .page {
    min-height: 100vh;
    padding: 25px 16px 25px;
    border-bottom: 2px solid $pageDividerColor;
    @include desktop-and-up {
      padding: 25px 50px 25px;
    }
  }
}

#avatar {
  width: 150px;
  height: 150px;
}
</style>