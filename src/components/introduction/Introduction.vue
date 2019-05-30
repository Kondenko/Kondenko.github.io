<template>
  <div :id="id">
    <div id="text">
      <h1 id="greeting">{{ greeting }}</h1>
      <p class="body" id="bio">
        I prototype, design and develop awesome mobile apps.
        <br>I studied at Yandex Mobile Development School and started
        <br>my career as a freelance Android developer after graduation.
        <br>My Telegram channel in Russian:
        <a
          class="link"
          :href="channelLink"
          target="_blank"
          v-on:click="onChannelClicked"
        >Mobile: Design and Development</a>
      </p>
      <div id="buttons">
        <icon-button
          id="resume-button"
          :icon="icDownload"
          text="Resume"
          v-on:click.native="downloadResume"
        ></icon-button>
        <div id="social-buttons">
          <icon
            class="social-icon"
            v-for="{icon, link} of socialButtons"
            :key="link"
            :ic="icon"
            :url="link"
            :openInNewTab="true"
          ></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "ui/IconButton.vue";
import Icon from "ui/Icon.vue";
const utils = require("src/utils.js");

export default {
  name: "Introduction",
  components: {
    IconButton,
    Icon
  },
  methods: {
    onScroll() {
      utils.emitIfIsVisible(this, this.id);
    },
    downloadResume: function(event) {
      this.$ga.event("click", "resume");
      window.location.href = require("assets/cv.pdf");
    },
    onChannelClicked() {
      this.$ga.event("click", "link", this.channelLink);
    }
  },
  mounted: function() {
    utils.emitIfIsVisible(this, this.id);
  },
  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      id: "introduction",
      greeting: "Hi. I'm Vladimir Kondenko.",
      channelLink: "https://tele.click/aboutmobile",
      icDownload: require("ic/ic_download.svg"),
      socialButtons: [
        {
          icon: require("ic/ic_mail.svg"),
          link: "mailto:kondenko2011@gmail.com"
        },
        {
          icon: require("ic/ic_github.svg"),
          link: "https://www.github.com/Kondenko"
        },
        {
          icon: require("ic/ic_facebook.svg"),
          link: "https://www.facebook.com/v.kondenko"
        },
        {
          icon: require("ic/ic_twitter.svg"),
          link: "https://twitter.com/v_kondenko"
        },
        {
          icon: require("ic/ic_telegram.svg"),
          link: "https://www.t.me/kondenko"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#introduction {
  @include desktop-and-up {
    height: 74vh;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  justify-content: center;
}

h1 {
  margin-bottom: 10px;
}

#bio {
  align-self: flex-start;
  margin: 0 0 6%;
}

#buttons {
  max-width: 100%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @include mobile-only {
    justify-content: center;
  }
}

#resume-button {
  margin: 0 4% 0 0;
}

#social-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  min-height: 38px;
  background-color: $backgroundColor;
  border-radius: 90px;
  margin: 6% 0;
  padding: 0px 2%;
  opacity: 0.6;
}

.social-icon {
  padding: 5px;
}
</style>
