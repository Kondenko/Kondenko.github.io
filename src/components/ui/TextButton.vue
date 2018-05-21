<template>
    <button id="text-button">
        {{ text }}
    </button>
</template>

<script>
export default {
  name: "text-button",
  props: ["text"]
};
</script>

<style lang="scss" scoped>
button {
  font-size: 14px;
  text-align: center;
  font-family: $font-hind-madurai;
  font-weight: 700;
  line-height: normal;
  color: $textPrimaryColorLight;
  background-color: $accentColor;
  border-radius: 10px;
  min-width: 150px;
  min-height: 40px;
  border: none;
  outline: none;
}
</style>
