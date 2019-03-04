<template>
<div :id="id">
    <vue-tabs>
        <v-tab id="code-projects" title="Code">
            <code-project 
             v-for="p in devProjects"
             :key="p.content"
             :name="p.name"
             :desc="p.desc"
             :technologies="p.technologies"
             :github-link="p.githubLink"
             :play-store-link="p.playStoreLink"
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
  methods: {
    onScroll() {
      const utils = require("src/utils.js").default;
      utils.emitIfIsVisible(this, this.id);
    },
    visibilityChanged(isVisible, entry) {
      if (isVisible) this.$emit("isVisible", this.id);
    }
  },
  data() {
    return {
      id: "projects",
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
          playStoreLink: "https://play.google.com/store/apps/details?id=com.kondenko.pocketwaka",
          screenshots: [
            "https://lh3.googleusercontent.com/0Qpo05Z3RHDu8CzieVPrTLMfyBhRs_W_m-c1OQgrfO5l3iEbpbv9gvwptFhQVOPiGKY=w1311-h644-rw",
            "https://lh3.googleusercontent.com/1iDVxxPa6Jf4112bvTjDuSRR7dFp9UbCugTyfS5UyBPT5bUxz-WzekJqkpBEEO-O9A=w1311-h644-rw"
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
          playStoreLink: "https://play.google.com/store/apps/details?id=com.vladimirkondenko.yamblz",
          githubLink: "https://github.com/Kondenko/yandex-translate-client",
          screenshots: [
            "https://lh3.googleusercontent.com/8jdhOL_PxwZa_8ZnJARvsTGiQKPtkUytGL1woWn2w6juqCnJKx8NrBmBZZN2C89FAgN8=w1311-h644-rw",
            "https://lh3.googleusercontent.com/UG460z_yFe0OV3gO6D0Gv-6UYICeuW4FWSEROYSETGC1_MMkzoMZ2OHl6wIWMusmVpAX=w1311-h644-rw"
          ]
        }
      ],
      designProjects: [
        {
          title: "Steaky",
          subtitle: "Russian Design Cup 2016",
          background: require("assets/projects/design/steaky.png").default,
          link: "https://russiandesigncup.ru/solution/1321/"
        },
        {
          title: "Google Play Music redesign",
          subtitle: "DailyUI",
          background: require("assets/projects/design/gpm.png").default,
          link:
            "https://www.uplabs.com/posts/google-play-music-redesign-interface"
        },
        {
          title: "E-commerce store",
          subtitle: "DailyUI",
          background: require("assets/projects/design/e-commerce-store.png").default,
          link: "https://www.uplabs.com/posts/e-commerce-tech-shop-dailyui-012"
        },
        {
          title: "Dribbble profile",
          subtitle: "DailyUI",
          background: require("assets/projects/design/dribbble-profile.png").default,
          link: "https://www.uplabs.com/posts/dark-dribbble-profile"
        },
        {
          title: "Email receipt",
          subtitle: "DailyUI",
          background: require("assets/projects/design/email-receipt.png").default,
          link: ""
        },
        {
          title: "Leaderboard",
          subtitle: "DailyUI",
          background: require("assets/projects/design/leaderboard.png").default,
          link: ""
        },
        {
          title: "Settings",
          subtitle: "DailyUI",
          background: require("assets/projects/design/settings.png").default,
          link: ""
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
