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
        <div class="screenshots-block">
            <img class="screenshot" v-for="s in screenshots" :key="s" :src="s"/>
        </div>
    </div>
</template>

<script>
import TechChip from "./TechChip.vue";
import IconButton from "ui/IconButton.vue";

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
      icGithub: require("assets/icons/ic_github_light.svg")
    };
  },
  methods: {
    goToGithub: function(event) {
      window.location.href = githubLink;
    }
  }
};
</script>

<style lang="scss">
#CodeProject {
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  height: 70vh;
  width: 90vw;
  padding: 10px;
  @include tablet-portrait-and-below {
    flex-wrap: wrap;
  }
}

.desc-block {
  min-width: 50%;
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
  margin-left: -2%;
}

.button-link {
  text-decoration: none;
}

#button-github {
  margin-top: 10%;
}

.screenshots-block {
  min-width: 50%;
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  align-items: center;
  justify-content: flex-end;
  @include tablet-portrait-and-below {
    justify-content: center;
    flex-wrap: wrap;
  }
}

.screenshot {
  margin: 0 2%;
  width: 36%;
  height: auto;
   @include tablet-portrait-and-below {
    width: 100%;
    margin: 10%;
  }
}
</style>
