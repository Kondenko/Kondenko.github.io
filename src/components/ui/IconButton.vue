<template>
    <button class="button" id="icon-button">
        <img class="icon" :src="icon">{{ text }}
    </button>
</template>

<script>
import _Button from "ui/abstract/_Button.vue";

export default {
  extends: _Button,
  name: "icon-button",
  props: {
    icon: String,
    text: String,
    small: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

$iconSize: 26px;
.icon {
  align-self: flex-start;
  width: $iconSize;
  height: $iconSize;
  display: block;
  margin-left: auto;
  margin-right: 10px;
  margin-bottom: 3%;
}

$iconSize: 16px;
.small-icon {
  @extend .icon;
  width: $iconSize;
  height: $iconSize;
  margin-right: 5px;
}
</style>
