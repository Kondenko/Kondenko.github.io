<template>
  <div :id="id">
    <exp-item
      v-for="(item, i) in items"
      :key="item.content"
      :year="item.year"
      :header="item.header"
      :text="item.text"
      :emoji="item.emoji"
      :emoji-on-right="i % 2 == 1"
      :showYear="i == 0 || items[i-1].year != item.year"
    ></exp-item>
  </div>
</template>

<script>
import ExpItem from "./ExpItem.vue";
export default {
  name: "Experience",
  components: {
    ExpItem
  },
  methods: {
    onScroll() {
      const utils = require("src/utils.js");
      utils.emitIfIsVisible(this, this.id);
    },
    visibilityChanged(isVisible, entry) {
      if (isVisible) this.$emit("isVisible", this.id);
    }
  },
  data() {
    return {
      id: "experience",
      items: [
        {
          year: 2018,
          header: "Working on my startup",
          text: `
          In 2018 I tried to create a startup. 
          I calculated unit economics, recorded a video about my idea, participated in a 4-day training 
          for startup founders and got into the South IT-Park startup accelerator. 
          I did customer interviews and discussed the ways to succeed with my mentor. 
          Although I decided to step away from my idea, 
          I improved my soft skills and got to know what does it mean to be a founder.
          `,
          emoji: require("assets/emoji/rocket.png")
        },
        {
          year: 2017,
          header: "Starting a freelance developer carreer",
          text: `
          I'm freelancing since late 2017. While working on my first project
          I learned how to communicate with clients, meet deadlines and make sure everyone is satisfied.
          `,
          emoji: require("assets/emoji/handshake.png")
        },
        {
          year: 2017,
          header: "Studying in Yandex Mobile Development School",
          text: `
          After having successfully completed a test task and an interview, I was invited to spend 3 months in Yandex's Moscow office. 
          The students took lessons from professional Android developers and other specialists,
          completed a personal project and a project with a team of a designer, a manager, and 4 developers. 
          We also had a hackathon where my team built an app in 8 hours and took the 1st place.
          `,
          emoji: require("assets/emoji/hat.png")
        }
      ]
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style>
h1 {
  align-self: flex-start;
  margin-bottom: 40px;
}
</style>
