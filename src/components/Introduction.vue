<template>
  <div id="introduction">
    <img id="avatar" v-bind:src="avatar">
    <h1 id="greeting">{{ greeting }}</h1>
    <p id="bio">
      I prototype, design and create awesome mobile apps. <br> 
      I studied at Yandex Mobile Development School and started my career as a freelance Android developer after graduation. <br>
      I also have a Telegram <a :href="channelLink" target="_blank">channel</a> about design and development.
    </p>
    <text-button id="resume-button" text="Download resume"></text-button>
    <div id="social-buttons">
      <icon-button v-for="{icon, link} of socialButtons" :key="link" :ic="icon" :url="link" :openInNewTab="false"></icon-button>
    </div>
  </div>
</template>

<script>
import TextButton from "ui/TextButton.vue";
import IconButton from "ui/IconButton.vue";

export default {
  name: "introduction",
  components: {
    TextButton,
    IconButton
  },
  data() {
    return {
      greeting: "Hi. I'm Vladimir Kondenko.",
      channelLink: "http://t.me/aboutmobile",
      avatar: require("assets/img_avatar.png"),
      socialButtons: [
        {
          icon: require("ic/ic_facebook.svg"),
          link: "https://www.facebook.com/v.kondenko"
        },
        {
          icon: require("ic/ic_telegram.svg"),
          link: "https://www.t.me/kondenko"
        },
        {
          icon: require("ic/ic_github.svg"),
          link: "https://www.github.com/Kondenko"
        },
      ]
    };
  }
};
</script>

<style lang="scss">
#introduction {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  justify-content: space-evenly;
  max-width: 620px;
  margin: 0 auto;
}

$avatarSize: 125px;
#avatar {
  align-self: center;
  height: $avatarSize;
  width: $avatarSize;
  margin: 20px;
}

#greeting {
  align-self: flex-start;
}

#bio {
  align-self: flex-start;
  margin: 0;
}

#resume-button {
  margin: 25px;
}

#social-buttons {
  min-width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  opacity: 0.6;
}
</style>
