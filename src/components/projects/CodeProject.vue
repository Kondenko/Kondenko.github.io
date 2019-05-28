<template>
  <div id="CodeProject">
    <div class="desc-block">
      <h3 class="header">{{ name }}</h3>
      <p class="desc-text body2" v-html="desc"></p>
      <label>
        <span class="title technologies-text">Technologies:</span>
        <span class="body3 technologies-text">{{technologies.join(", ")}}</span>
      </label>
      <div class="buttons-block">
        <play-store-badge v-if="playStoreLink" class="badge" :url="playStoreLink"></play-store-badge>
        <a id="button-github" class="button-link" :href="githubLink" target="_blank">
          <icon-button :icon="icGithub" text="Source code" v-on:click.native="onGithubClicked"></icon-button>
        </a>
      </div>
    </div>
    <div class="device-wrapper screenshots-block">
      <div class="device" data-device="Pixel" data-orientation="portrait" data-color="white">
        <div class="screen" style="pointer-events: all">
          <carousel
            v-if="screenshots"
            class="screenshot-container"
            :data="screenshotsCarousel"
            indicators="hover"
            :autoplay="false"
          ></carousel>
        </div>
        <div
          class="button"
          data-toggle="popover"
          data-placement="bottom"
          data-content="Device buttons are perfectly rendered and can be hooked to links or JavaScript events"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import TechChip from "./TechChip.vue";
import IconButton from "ui/IconButton.vue";
import PlayStoreBadge from "ui/PlayStoreBadge.vue";

export default {
  name: "CodeProject",
  props: {
    name: String,
    desc: String,
    technologies: Array,
    githubLink: String,
    playStoreLink: String,
    screenshots: Array
  },
  components: {
    TechChip,
    PlayStoreBadge,
    IconButton
  },
  methods: {
    onGithubClicked() {
      this.$ga.event("click", "projectSource", this.githubLink);
    }
  },
  data: function() {
    return {
      icGithub: require("assets/icons/ic_github_light.svg"),
      screenshotsCarousel: this.screenshots.map(
        s => `<img style="width: 100%" src="${s}">`
      )
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~flickity/css/flickity.css";
@import "~html5-device-mockups/dist/device-mockups.css";

#CodeProject {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 8% auto;
  max-width: 90vw;
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

  .header {
    align-self: flex-start;
  }

  .desc-text {
    max-width: 500px;
    line-height: 35px;
  }

  .technologies-text {
    line-height: 24px;
  }

  .button-link {
    text-decoration: none;
  }

  .buttons-block {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 8%;
    @include mobile-only {
      flex-direction: column;
      margin-top: 5%;
      align-self: center;
    }

    #button-github {
      margin-bottom: 1%;
    }

    .badge {
      @include tablet-portrait-and-up {
        margin-right: 20px;
      }
      margin-left: 0px;
    }
  }
}

.screenshots-block {
  width: 40%;
  @include mobile-only {
    width: 100%;
    margin: 10% 4%;
  }
}

.device {
  .button {
    all: initial; // reverts the button to the state it's defined in the library
  }
}
</style>
