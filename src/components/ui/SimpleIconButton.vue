<template>
  <button class="button" id="simple-icon-button">
    <img class="icon" :src="icon" />
    {{text}}
  </button>
</template>

<script>
import _Button from "ui/abstract/_Button.vue";
import IconButton from "ui/IconButton.vue";

export default {
  extends: IconButton,
  name: "simple-icon-button",
  props: {
    icon: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: none;
  min-width: none;
  box-shadow: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: $accentColor;
  margin: auto;
  &:hover {
    text-decoration: underline;
  }
}

.icon {
  overflow: visible;
  margin-bottom: -4%;
  margin-right: 8px;
}
</style>
