<template>
   <button class="button" id="_button">
    </button>
</template>

<script>
export default {
  name: "_button",
  props: {
    small: Boolean
  }
};
</script>

<style lang="scss">
$contentColor: $accentColor;
.button {
  font-size: 14px;
  text-align: center;
  font-family: $font-hind-madurai;
  font-weight: 700;
  line-height: normal;
  background-color: $contentColor;
  color: $textPrimaryColorLight;
  border-radius: 90px;
  padding: 6px 25px 5px 10px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba($color: $accentColor, $alpha: 0.4);
  transition: 200ms box-shadow ease-out;
  &:hover {
    box-shadow: 0px 5px 12px rgba($color: $accentColor, $alpha: 0.6);
  }
}

.small-button {
  @extend .button;
  height: 28px;
  min-width: 98px;
}
</style>
