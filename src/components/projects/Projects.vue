<template>
<div id="projects">
    <h1>Projects</h1>
    <vue-tabs>
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
        <v-tab id="design-projects" title="Design">
             <design-project 
             v-for="p in designProjects"
             :key="p.content"
             :title="p.title"
             :subtitle="p.subtitle"
             :background="p.background"
             :link="p.link"
             ></design-project>
            <modals-container/>
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
          desc: `
          PocketWaka is a client for <a class="link" href="http://www.wakatime.com" target="_blank">Wakatime</a>. 
          It shows your coding activity and helps you track the time spent on your projects. 
          It also shows what languages and IDEs you use the most.
          `,
          technologies: ["Wakatime API", "(Rx)Kotlin", "Dagger 2", "Retrofit"],
          githubLink: "https://github.com/Kondenko/pocketwaka",
          screenshots: [
            require("assets/projects/dev/pocketwaka/1.png"),
            require("assets/projects/dev/pocketwaka/2.png")
          ]
        },
        {
          name: "Yandex.Translate client",
          desc: `
            This is a translation app which uses Yandex.Translate API. 
            It uses the Room database to store translations history and bookmarks.
            I made this app as a test task for Yandex Mobile Development School in 2017.
          `,
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
          title: "Steaky",
          subtitle: "Russian Design Cup 2016",
          background: require("assets/projects/design/steaky.png"),
          link: "https://russiandesigncup.ru/solution/1321/"
        },
        {
          title: "Google Play Music redesign",
          subtitle: "DailyUI",
          background: require("assets/projects/design/gpm.png"),
          link:
            "https://www.uplabs.com/posts/google-play-music-redesign-interface"
        },
        {
          title: "E-commerce store",
          subtitle: "DailyUI",
          background: require("assets/projects/design/e-commerce-store.png"),
          link: "https://www.uplabs.com/posts/e-commerce-tech-shop-dailyui-012"
        },
        {
          title: "Dribbble profile",
          subtitle: "DailyUI",
          background: require("assets/projects/design/dribbble-profile.png"),
          link: "https://www.uplabs.com/posts/dark-dribbble-profile"
        },
        {
          title: "Email receipt",
          subtitle: "DailyUI",
          background: require("assets/projects/design/email-receipt.png"),
          link: ""
        },
        {
          title: "Leaderboard",
          subtitle: "DailyUI",
          background: require("assets/projects/design/leaderboard.png"),
          link: ""
        },
        {
          title: "Settings",
          subtitle: "DailyUI",
          background: require("assets/projects/design/settings.png"),
          link: ""
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

#p-design-projects {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  margin: 0 auto;
}
</style>
