<template>
    <div id="experience">
        <h1>Exeperience</h1>
        <exp-item 
        v-for="(item, i) in items" 
        :key="item.content" 
        :year="item.year"
        :header="item.header" 
        :text="item.text"
        :emoji="item.emoji"
        :emoji-on-right="item.emojiOnRight"
        :showYear="i == 0 || items[i-1].year != item.year"
        >
        </exp-item>
    </div>
</template>

<script>
import ExpItem from "./ExpItem.vue";
export default {
  name: "Experience",
  components: {
    ExpItem
  },
  data() {
    return {
      items: [
        {
          year: 2018,
          header: "Working on my startup",
          text: `
          In 2018 I tried to create a startup. 
          I calculated unit economics, recorded a video about my idea, participated in a 4-day training 
          for startup founders and got into the South Park Startup Accelerator. 
          I did customer interviews and discussed the ways to succeed with my mentor. 
          Although I decided to step away from my idea, 
          I improved my soft skills and got to know what does it mean to be a founder.
          `,
          emoji: require('assets/emoji/rocket.png')
        },
        {
          year: 2017,
          header: "Starting a freelance developer carreer",
          text: `
          I'm freelancing since late 2017, when I got my first client. 
          They needed an app where people can create collages from short videos. 
          I completed it successfully and learned a lot about working with media, video processing and what's most important 
          — I learned  to communicate with clients, meet the deadlines and make sure everyone is satisfied. 
          `,
          emoji: require('assets/emoji/handshake.png'),
          emojiOnRight: true
        },
        {
          year: 2017,
          header: "Studying in Yandex Mobile Development School",
          text: `
          In 2017 after successfully completing a test task and an interview, I was invited to spend 3 months in Yandex's Moscow office. The students took lessons from professional Android developers and other specialists, completed a personal project and a project with a team of a designer, a manager and 4 developers. 
          <br> 
          <br> 
          Our team was working on a language learning <a class="link" href="https://www.youtube.com/watch?v=mD_UBhl61ys" target="_blank">app</a> for kids.
          My responsibility was to develop the core module of the app, and when the other developers have finished their modules,
          to combine them into a perfectly working app. I learned to work with a designer to recreate the screens in code 
          exactly as they intended and to collaborate with developers to create a good-structured app under our manager's supervision.
          <br> 
          <br> 
          We also had a hackathon where my team built an app in 8 hours and took the 1st place.
          `,
          emoji: require('assets/emoji/hat.png')
        }
      ]
    };
  }
};
</script>

<style>
h1 {
  align-self: flex-start;
  margin-bottom: 40px;
}

</style>
