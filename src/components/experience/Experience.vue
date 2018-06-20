<template>
    <div id="experience">
        <h1>Exeperience</h1>
        <exp-item v-for="item in items" :key="item.content" :header="item.header" :text="item.text"></exp-item>
    </div>
</template>

<script>
import ExpItem from "./ExpItem.vue"
export default {
  name: "Experience",
  components: {
      ExpItem
  },
  data() {
      return {
          items: [
              {
                  header: "Working on my startup",
                  text: "Lorem ipsum"
              }
          ]
      }
  }
};
</script>

<style>
h1 {
  align-self: flex-start;
}
</style>
