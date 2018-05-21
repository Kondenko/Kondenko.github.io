<template>
  <div id="introduction">
    <img id="avatar" v-bind:src="avatar">
    <h1 id="greeting">{{ greeting }}</h1>
    <p id="bio">{{ bio }}</p>
    <text-button text="Download resume"></text-button>
  </div>
</template>

<script>
import TextButton from "./ui/TextButton.vue";

export default {
  name: "introduction",
  components: {
    TextButton
  },
  data() {
    return {
      greeting: "Hi. I'm Vladimir Kondenko.",
      bio:
        "I prototype, design and create awesome mobile apps. I studied at Yandex Mobile Development School and started my career as a freelance Android developer after graduating. I also have a blog about design and development called Mobile.",
      avatar: require("../assets/img_avatar.png")
    };
  }
};
</script>

<style lang="scss">

#introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  max-width: 620px;
  margin: 0 auto;
  padding: 25px 0px;
}


$avatarSize: 125px;
#avatar {
  align-self: center;
  height: $avatarSize;
  width: $avatarSize;
}

#greeting {
  align-self: flex-start;
  max-height: 43px;
}

#bio {
  align-self: flex-start;
}
</style>
