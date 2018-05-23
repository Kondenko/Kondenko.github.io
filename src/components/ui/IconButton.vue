<template>
    <button id="icon-button">
        <img :src="icon">
        {{ text }}
    </button>
</template>

<script>
import _Button from "ui/abstract/_Button.vue";

export default {
  extends: _Button,
  name: "icon-button",
  props: ["color", "icon", "text"]
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

$iconSize: 20px;
img {
  width: $iconSize;
  height: $iconSize;
  margin-right: 10px;
}
</style>
