<template>
    <div id="kmenu">
        <a class="item" href="#" v-for="(name, id) in items" :key="id.content" v-scroll-to="`#${id}`">{{ name }}</a>
    </div>
</template>

<script>
export default {
  name: "kmenu",
  props: {
    items: Map // id to item name
  },
  mounted() {
    console.log(this.items);
  }
};
</script>

<style lang="scss" scoped>
#kmenu {
  height: 50px;
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.item {
  width: 96px;
  height: 48px;
  color: $textPrimaryColor;
  text-decoration: none;
  text-transform: uppercase;
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: bold;
  line-height: 50px;
  font-size: 14px;
}


</style>
