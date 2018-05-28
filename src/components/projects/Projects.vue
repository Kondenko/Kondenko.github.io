<template>
<div id="projects">
    <h1>Projects</h1>
    <vue-tabs>
        <v-tab title="Code">
            Awesome apps
        </v-tab>
        <v-tab title="Design">
        Stunning design
        </v-tab>
    </vue-tabs>
</div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs/dist/vue-tabs.js";

export default {
  name: "Projects",
  components: {
    VueTabs,
    VTab
  }
};
</script>

<style lang="scss">
@import "~res/tabs-theme";

#projects {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
}

h1 {
    align-self: flex-start;
}

</style>
