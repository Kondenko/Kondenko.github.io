<template>
  <div :id="id" class="projects_root">
    <vue-tabs :id="tabsId" ref="tabs">
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
          :download-icon="p.downloadIcon"
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
        <modals-container />
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import CodeProject from "./CodeProject.vue";
import DesignProject from "./DesignProject.vue";
import { VueTabs, VTab } from "vue-nav-tabs/dist/vue-tabs.js";

const codeProjects = "assets/projects/code/";

const projectRoutes = {
  "/projects-code": 0,
  "/projects-design": 1
};

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
      tabsId: "content",
      devProjects: [
        {
          name: "PocketWaka",
          desc: `
          A time-tracking app for developers.
          <br> 
          <br> 
          Instead of tracking time manually, developers can see
          exactly how much time they spend on their projects every day.
          The app also shows their rating of projects, 
          languages, code editors and operating systems.
          <br>
          I designed and developed this app by myself, trying to adhere 
          to best practices and to learn new things as I work.
          `,
          technologies: [
            "Wakatime API",
            "Kotlin",
            "Architecture Components",
            "RxJava 2",
            "Koin",
            "Retrofit"
          ],
          githubLink: "https://github.com/Kondenko/pocketwaka",
          playStoreLink:
            "https://play.google.com/store/apps/details?id=com.kondenko.pocketwaka",
          screenshots: [
            require("assets/projects/code/pocketwaka/1.gif"),
            require("assets/projects/code/pocketwaka/2.png"),
            require("assets/projects/code/pocketwaka/3.png")
          ]
        },
        {
          name: "ContentOffice",
          desc: `
          A content-planning app for Instagram.
          <br>
          <br> 
          I worked on releasing a beta version of ContentOffice. 
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
          <br>
          The app helps kids to learn new English words by playing games. 
          Kids can take a picture of any object, the app will translate it and add it to their vocabulary.
          <br>
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
          A video collage app.
          <br>
          <br>
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
            require("assets/projects/code/yandex-test-task/1.png"),
            require("assets/projects/code/yandex-test-task/2.png")
          ]
        },
        {
          name: "Safely Delete Components",
          desc: `A Figma plugin to prevent your from deleting used components and to keep your project tidy`,
          technologies: ["Figma Plugin API", "Typescript"],
          playStoreLink:
            "https://www.figma.com/c/plugin/746849770992339499/Safely-Delete-Components",
          githubLink: "https://github.com/Kondenko/SafelyDeleteComponents",
          downloadIcon: require("assets/icons/ic_figma.svg")
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
  mounted() {
    const route = projectRoutes[window.location.pathname];
    if (route != undefined) {
      location.href = "#" + this.tabsId;
    }
    const tabIndex = route || 0;
    this.$refs.tabs.navigateToTab(tabIndex);
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
