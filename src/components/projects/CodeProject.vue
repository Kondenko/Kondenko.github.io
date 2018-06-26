<template>
    <div id="CodeProject">
        <div class="desc-block">
            <h2 class="header">{{ name }}</h2>
            <p class="desc-text body" v-html="desc"></p>
            <h3 class="tech-title" >Technologies</h3>
            <div class="tech-chips">
              <tech-chip v-for="t in technologies" :key="t" :text="t"></tech-chip>
            </div>
            <a id="button-github" class="button-link" :href="githubLink" target="_blank">
              <icon-button :icon="icGithub" text="Source code" v-on:click.native="onGithubClicked"></icon-button>
            </a>  
        </div>
        <div
          v-if="screenshots"
          ref="flickity"
          class="flickity screenshots-block" 
          data-flickity='{ "imagesLoaded": true, "pageDots": false, "wrapAround": true }' 
          >
             <div class="screenshot-container" v-for="s in screenshots" :key="s">
              <img class="screenshot" :src="s"/>
            </div>
        </div>
    </div>
</template>

<script>
import TechChip from "./TechChip.vue";
import IconButton from "ui/IconButton.vue";
import Flickity from "flickity-imagesloaded";

export default {
  name: "CodeProject",
  props: {
    name: String,
    desc: String,
    technologies: Array,
    githubLink: String,
    screenshots: Array
  },
  components: {
    TechChip,
    IconButton
  },
  methods: {
    onGithubClicked() {
      this.$ga.event('click', 'projectSource', this.githubLink)
    }
  },
  data: function() {
    return {
      icGithub: require("assets/icons/ic_github_light.svg"),
    };
  }
};
</script>

<style lang="scss">
@import "~flickity/css/flickity.css";

#CodeProject {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 8% auto;
  width: 90vw;
  padding: 10px;
  @include desktop-and-up {
    max-height: 70vh;
  }
  @include mobile-only {
    padding: 0px;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.desc-block {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 5%;
  @include mobile-only {
    width: 100%;
  }
}

.header {
  @include mobile-only { 
    order: 0;
  }
}

.desc-text {
  max-width: 500px;
  line-height: 35px;
}

.tech-title {
  height: 44px;
}

.tech-chips {
  margin-bottom: auto;
  margin-left: -8px;
}

.button-link {
  text-decoration: none;
}

#button-github {
  margin-top: 8%;
  @include mobile-only {
    margin-top: 5%;
    align-self: center;
  }
}

$heightScreenshot: 450px;

.screenshots-block {
  width: 40%;
  height: $heightScreenshot;
  @include mobile-only {
    order: 1;
    width: 100%;
    margin: 10% 4%;
  }
}

.screenshot-container {
  width: 100%;
  height: 100%;
}

.screenshot {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}
</style>
