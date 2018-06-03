<template>
    <div id="CodeProject">
        <div class="desc-block">
            <h2>{{ name }}</h2>
            <p class="desc-text body">{{ desc }} </p>
            <h3 class="tech-title" >Technologies</h3>
            <div class="tech-chips">
              <tech-chip v-for="t in technologies" :key="t" :text="t"></tech-chip>
            </div>
            <a class="button-link" :href="githubLink" target="_blank">
              <icon-button id="button-github" :icon="icGithub" text="Source code"></icon-button>
            </a>  
        </div>
        <div class="screenshots-block flickity" ref="flickity-imagesloaded" data-flickity='{ "imagesLoaded": true, "pageDots": false, "wrapAround": true }' >
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
var flickity = new Flickity(".flickity");

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
  height: 70vh;
  width: 90vw;
  padding: 10px;
  @include tablet-portrait-and-below {
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
  margin-left: -16px;
}

.button-link {
  text-decoration: none;
}

#button-github {
  margin-top: 20%;
  @include tablet-portrait-and-below {
    align-self: center;
  }
}

.screenshots-block {
  width: 40%;
  @include tablet-portrait-and-below {
    min-width: 100%;
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
