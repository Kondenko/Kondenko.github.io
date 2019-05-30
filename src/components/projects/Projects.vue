<template>
  <div :id="id" class="projects_root">
    <vue-tabs>
      <v-tab id="code-projects" title="Code">
        <code-project
          v-for="p in devProjects"
          :key="p.content"
          :name="p.name"
          :desc="p.desc"
          :quote="p.quote"
          :technologies="p.technologies"
          :github-link="p.githubLink"
          :play-store-link="p.playStoreLink"
          :video-link="p.videoLink"
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

const codeProjects = "assets/projects/code/";

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
      const utils = require("src/utils.js");
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
          PocketWaka is a time-tracking app for developers. 
          It shows your coding activity and helps you track the time spent on your projects. 
          It also shows what languages and IDEs you use the most.
          `,
          technologies: ["Wakatime API", "Kotlin", "RxJava 2", "Koin", "Retrofit"],
          githubLink: "https://github.com/Kondenko/pocketwaka",
          playStoreLink:
            "https://play.google.com/store/apps/details?id=com.kondenko.pocketwaka",
          screenshots: [
            require("assets/projects/code/pocketwaka/1.gif"),
            require("assets/projects/code/pocketwaka/2.png")
          ]
        },
        {
          name: "ContentOffice",
          desc: `
          A content-planning app for Instagram.
          <br>
          <br> I worked on releasing a beta version of ContentOffice. 
          I adopted best practices, made the app performant and also added a couple of new features. 
          After a few months of work, the client said the app became much more pleasant to use. 
          `,
          screenshots: [
            require("assets/projects/code/contentoffice/1.png"),
            require("assets/projects/code/contentoffice/2.png"),
            require("assets/projects/code/contentoffice/3.png")
          ],
          technologies: [
            "Kotlin",
            "RxJava",
            "Instagram API",
            "Google Play Billing",
            "Firebase Realtime Database",
            "Firebase Cloud Storage",
            "Firebase Cloud Functions",
            "Firebase Remote Config",
            "Firebase Authentication"
          ]
        },
        {
          name: "Yandex.OK",
          desc: `
          A language learning app for kids.
          <br>
          The app helps kids to learn new English words by playing games. 
          Kids can take a picture of any object, the app will translate it and add it to their vocabulary.
          Each developer on the team worked on his own module. I worked on the core of the app and was responsible for combining all the modules together. 
          I worked closely with our designer to recreate the screens in code exactly as she intended 
          and collaborated with developers to create a well-structured app.
         `,
          technologies: ["Room", "RxJava 2", "Object recognition"],
          videoLink: "https://www.youtube.com/watch?v=mD_UBhl61ys",
          screenshots: [
            require("assets/projects/code/yandex-ok/1.png"),
            require("assets/projects/code/yandex-ok/2.png"),
            require("assets/projects/code/yandex-ok/3.png"),
            require("assets/projects/code/yandex-ok/4.png"),
            require("assets/projects/code/yandex-ok/5.png")
          ]
        },
        {
          name: "VideoCollage",
          desc: `
          I developed an app where users can create collages from videos captured with an in-app camera or selected from the gallery. 
          I had absolutely no experience working with videos on Android but the client was OK with that and I picked things up quickly. 
          `,
          quote: `
          Brilliant, organized, communicative and a wonderful programmer. 
          One of the best Android programmers we have had the pleasure and privilege of working with on Upwork. 
          (FG Inc.)
          `,
          technologies: ["ffmpeg"],
          screenshots: [require("assets/projects/code/video-collage/1.png")]
        },
        {
          name: "Yandex.Translate client",
          desc: `
            A translation app I made as a test task for Yandex mobile development school. 
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
          playStoreLink:
            "https://play.google.com/store/apps/details?id=com.vladimirkondenko.yamblz",
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

.projects_root {
  padding-bottom: 96px !important;
}

h1 {
  align-self: flex-start;
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
