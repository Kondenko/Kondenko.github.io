<template>
    <div class="exp-item">
        <h2>{{ header }}</h2>
         <div>
            <img v-if="emoji" :src="emoji"/>
            <p class="body" v-html="text"></p>
        </div>
    </div>
</template>

<script>
export default {
  name: "ExpItem",
  props: {
    header: String,
    text: String,
    emoji: Object
  }
};
</script>

<style lang="scss"> 
#exp-item {
  width: 50vw;
  min-height: 100px;
  background-color: red;
}
</style>
