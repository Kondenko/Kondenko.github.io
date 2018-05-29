<template>
  <div id="introduction">
    <img id="avatar" v-bind:src="avatar">
    <div id="text">
    <h1 id="greeting">{{ greeting }}</h1>
    <p class="body" id="bio">
      I prototype, design and create awesome mobile apps. <br> 
      I studied at Yandex Mobile Development School and started <br> my career as a freelance Android developer after graduation. <br>
      I also have a Telegram <a class="link" :href="channelLink" target="_blank">channel</a> about design and development.
    </p>
    <div id="buttons">
      <icon-button id="resume-button" :icon="icDownload" text="Resume" v-on:click.native="downloadResume"></icon-button>
      <div id="social-buttons">
        <icon class="social-icon" v-for="{icon, link} of socialButtons" :key="link" :ic="icon" :url="link" :openInNewTab="true"></icon>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import IconButton from "ui/IconButton.vue";
import Icon from "ui/Icon.vue";

export default {
  name: "introduction",
  components: {
    IconButton,
    Icon
  },
  methods: {
    downloadResume: function(event) {
      window.location.href = require("assets/cv.pdf");
    }
  },
  data() {
    return {
      greeting: "Hi. I'm Vladimir Kondenko.",
      channelLink: "http://t.me/aboutmobile",
      avatar: require("assets/img_avatar.png"),
      icDownload: require("ic/ic_download.svg"),
      socialButtons: [
        {
          icon: require("ic/ic_mail.svg"),
          link: "mailto:kondenko2011@gmail.com"
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
        },
        {
          icon: require("ic/ic_github.svg"),
          link: "https://www.github.com/Kondenko"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $accentColor;
}

#introduction {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  justify-content: flex-start;
  max-width: 85%;
  margin: 0 auto;
}

$avatarSize: 125px;
#avatar {
  align-self: center;
  flex-shrink: 1;
  height: $avatarSize;
  width: $avatarSize;
  margin: 0px 0px 50px 0px;
}

#text {
}

#greeting {
}

#bio {
  align-self: flex-start;
  margin: 28px 0px;
}

#buttons {
  max-width: 100%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

#resume-button {
  margin: 0 2% 0 0;
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
