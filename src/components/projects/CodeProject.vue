<template>
  <div id="CodeProject">
    <div class="desc-block">
      <h3 class="header">{{ name }}</h3>
      <div class="buttons-block">
        <a v-if="playStoreLink" :href="githubLink" target="_blank">
          <simple-icon-button
            :icon="icGooglePlay"
            class="button-link"
            text="Download"
            v-on:click.native="onPlayStoreClicked"
          ></simple-icon-button>
        </a>
        <a v-if="githubLink" :href="githubLink" target="_blank">
          <simple-icon-button
            :icon="icGithub"
            class="button-link"
            text="Source code"
            v-on:click.native="onGithubClicked"
          ></simple-icon-button>
        </a>
      </div>
      <p class="desc-text body2" v-html="desc"></p>
      <label>
        <span class="title technologies-text">Technologies:</span>
        <span class="body3 technologies-text">{{technologies.join(", ")}}</span>
      </label>
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
import SimpleIconButton from "ui/SimpleIconButton.vue";
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
    SimpleIconButton
  },
  methods: {
    onGithubClicked() {
      this.$ga.event("click", "projectSource", this.githubLink);
    },
    onPlayStoreClicked() {
      this.$ga.event("click", "projectGooglePlay", this.playStoreLink);
    }
  },
  data: function() {
    return {
      icGithub: require("assets/icons/ic_github_accent.svg"),
      icGooglePlay: require("assets/icons/ic_gplay_accent.svg"),
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
  justify-items: self-start;
  justify-content: flex-start;
  margin: 0 5%;
  @include mobile-only {
    width: 100%;
  }

  .header {
    align-self: flex-start;
    margin-bottom: 0;
  }

  .button-link {
    max-height: 16px;
    padding: 0px;
    padding-right: 18px;
  }

  .buttons-block {
    align-self: flex-start;
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-items: flex-start;
    justify-content: flex-start;
    @include mobile-only {
      margin-top: 5%;
      align-self: center;
    }
  }

  .desc-text {
    margin-top: 28px;
    max-width: 500px;
    line-height: 35px;
  }

  .technologies-text {
    line-height: 24px;
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
