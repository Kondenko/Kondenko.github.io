<template>
  <div id="CodeProject">
    <div class="desc-block" :style="descBlockMargin">

      <h3 class="header">{{ name }}</h3>
      <div class="buttons-block">
        <a
          v-if="playStoreLink"
          :href="playStoreLink + '&utm_source=personal-website'"
          target="_blank"
        >
          <simple-icon-button :icon="icDownload" class="button-link" text="Download"></simple-icon-button>
        </a>
        <a v-if="videoLink" :href="videoLink" target="_blank">
          <simple-icon-button :icon="icVideo" class="button-link" text="Watch video"></simple-icon-button>
        </a>
        <a v-if="githubLink" :href="githubLink" target="_blank">
          <simple-icon-button :icon="icGithub" class="button-link" text="Source code"></simple-icon-button>
        </a>
      </div>

      <p class="desc-text body2" :style="descTextMargin" v-html="desc"></p>
      <div v-if="quote" class="quote-container">
        <img class="img-quote" :src="imgQuote">
        <label class="quote">{{quote}}</label>
      </div>

      <label>
        <span class="title1 technologies-text">Tech stack:</span>
        <span class="body3 technologies-text">{{technologies.join(", ")}}</span>
      </label>
      
    </div>

    <div v-show="screenshots" class="device-wrapper screenshots-block">
      <div class="device" data-device="Pixel" data-orientation="portrait" data-color="white">
        <div class="screen" style="pointer-events: all">
          <carousel
            class="screenshot-container"
            :autoplay="false"
            :data="screenshotsCarousel"
            :indicators="false"
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
import SimpleIconButton from "ui/SimpleIconButton.vue";

export default {
  name: "CodeProject",
  props: {
    name: String,
    desc: String,
    quote: String,
    downloadIcon: String,
    technologies: Array,
    playStoreLink: String,
    videoLink: String,
    githubLink: String,
    screenshots: Array
  },
  components: {
    SimpleIconButton
  },
  computed: {
    descBlockMargin: function() {
      return {
        "margin-top": this.githubLink || this.playStoreLink || this.videoLink ? 18 : 0,
      };
    },
    descBlockMargin: function() {
      const horizontalMargin = this.screenshots ? "54px" : "0"
      return {
        "margin-left": horizontalMargin,
        "margin-right": horizontalMargin
      };
    }
  },
  data: function() {
    return {
      icGithub: require("assets/icons/ic_github_accent.svg"),
      icVideo: require("assets/icons/ic_youtube_accent.svg"),
      icDownload: this.downloadIcon ? this.downloadIcon : require("assets/icons/ic_gplay_accent.svg"),
      imgQuote: require("assets/img_quote.svg"),
      screenshotsCarousel: this.screenshots ? this.screenshots.map(
        s => `<img style="width: 100%" src="${s}">`
      ) : undefined
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~flickity/css/flickity.css";
@import "~html5-device-mockups/dist/device-mockups.css";

#CodeProject {
  overflow: hidden;
  align-self: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 72px auto 0;
  width: 58vw;
  @include tablet-portrait-and-below {
    padding: 0px;
    width: 96vw;
    margin: 16px auto;
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
  @include mobile-only {
    width: 100vw;
    margin: 0 16px;
  }

  .header {
    align-self: flex-start;
    margin-bottom: 0;
    @include mobile-only {
      align-self: center;
    }
  }

  .button-link {
    max-height: 16px;
    padding: 0px;
    padding-right: 18px;
  }

  .buttons-block {
    align-self: flex-start;
    float: left;
    @include mobile-only {
      margin-top: 5%;
      align-self: center;
    }
  }

  .desc-text {
    max-width: 500px;
  }

  .quote-container {
    .img-quote {
      vertical-align: text-top;
      width: 32px;
      margin-right: 16px;
      margin-top: 4px;
    }
    padding: 4px 0 22px 0;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: flex-start;
  }

  .technologies-text {
    line-height: 21px;
  }
}

.device-wrapper {
  width: 296px;
}

.screenshots-block {
  @include mobile-only {
    width: 100%;
    margin: 10% 4%;
  }
  @include tablet-portrait-and-below {
    margin: 32px 8px;
  }
}

.device {
  .button {
    all: initial; // reverts the button to the state it's defined in the library
  }
}

.screenshot-container {
  touch-action: unset!important;
  height: 100%;
  background-color: black;
  margin-right: -2px;
  border-style: solid;
  border-width: 2px;
  border-color: #5c5c5c;
}
</style>
