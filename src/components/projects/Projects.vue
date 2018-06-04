<template>
<div id="projects">
    <h1>Projects</h1>
    <vue-tabs>
        <v-tab id="design-projects" title="Design">
             <design-project 
             v-for="p in designProjects"
             :key="p.content"
             :title="p.title"
             :subtitle="p.subtitle"
             :background="p.background"
             :link="p.link"
             ></design-project>
        </v-tab>
        <v-tab id="code-projects" title="Code">
            <code-project 
             v-for="p in devProjects"
             :key="p.content"
             :name="p.name"
             :desc="p.desc"
             :technologies="p.technologies"
             :githubLink="p.githubLink"
             :screenshots="p.screenshots"
             ></code-project>
        </v-tab>
    </vue-tabs>
</div>
</template>

<script>
import CodeProject from "./CodeProject.vue";
import DesignProject from "./DesignProject.vue";
import { VueTabs, VTab } from "vue-nav-tabs/dist/vue-tabs.js";

export default {
  name: "Projects",
  components: {
    VueTabs,
    VTab,
    CodeProject,
    DesignProject
  },
  data() {
    return {
      devProjects: [
        {
          name: "PocketWaka",
          desc:
            "PocketWaka is a simple client for wakatime.com. It shows your coding activity and helps you track the time spent on your projects. It also shows what languages and IDEs you use the most.",
          technologies: ["Wakatime API", "(Rx)Kotlin", "Dagger 2", "Retrofit"],
          githubLink: "https://github.com/Kondenko/pocketwaka",
          screenshots: [
            require("assets/projects/dev/pocketwaka/1.png"),
            require("assets/projects/dev/pocketwaka/2.png")
          ]
        },
        {
          name: "Yandex.Translate client",
          desc:
            "This is translator app which uses Yandex.Translate API. It has history and bookmarks. I made this app as a test task for Yandex Mobile Development School in 2017.",
          technologies: [
            "Yandex.Translate API",
            "RxJava 2",
            "Dagger 2",
            "Realm",
            "Retrofit",
            "EventBus",
            "Mockito",
            "Robolectric",
            "MockWebServer",
            "Espresso"
          ],
          githubLink: "https://github.com/Kondenko/yandex-translate-client",
          screenshots: [
            require("assets/projects/dev/yandex-translate/1.png"),
            require("assets/projects/dev/yandex-translate/2.png")
          ]
        }
      ],
      designProjects: [
        {
          title: "Test test test",
          subtitle: "Test test test",
          background: require("assets/projects/design/steaky.png"),
          link: "https://russiandesigncup.ru/solution/1321/"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~res/tabs-theme";

#projects {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

h1 {
  align-self: flex-start;
}

.tabs {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
</style>
