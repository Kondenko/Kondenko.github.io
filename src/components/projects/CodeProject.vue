<template>
    <div id="CodeProject">
        <div>
            <h2>{{ name }}</h2>
            <p class="body">{{ desc }} </p>
            <h3>Technologies</h3>
            <tech-chip v-for="t in technologies" :key="t" :text="t"></tech-chip>
            <a style="text-decoration: none;" :href="githubLink" target="_blank">
            <icon-button :icon="icGithub" text="Source code"></icon-button>
        </a>
        </div>
        <div>
            <img v-for="s in screenshots" :key="s" :src="s"/>
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

<style>
CodeProject {
}
</style>
