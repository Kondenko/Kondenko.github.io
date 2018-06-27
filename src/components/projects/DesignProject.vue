<template>
    <div id="DesignProject" v-on:click="openProject">
        <img class="background" :src="background" :alt="title" target="_blank">
        <div class="text">
           <div class="title">{{ title }}</div>
           <div class="subtitle">{{ subtitle }}</div>
        </div> 
    </div>
</template>

<script>
export default {
  name: "DesignProject",
  props: {
    title: String,
    subtitle: String,
    background: String,
    link: String
  },
  methods: {
    openProject: function(event) {
      if (this.link) {
        this.$ga.event("click", "designProjectLink", this.title);
        window.location.href = this.link;
      } else {
        this.$ga.event("click", "designProjectPreview", this.title);
        this.$modal.show(
          {
            template: `<img style="width: 100%; height=100%; object-fit: cover; object-position: 50% 50%; user-select: none;" :src="image">`,
            props: ["image"]
          },
          {
            image: this.background
          },
          {
            name: "image-modal",
            classes: ["image-modal"],
            height: "auto",
            minWidth: "50%",
            adaptive: true,
            transition: "scale"
          }
        );
      }
    }
  }
};
</script>

<style lang="scss">
$sizeDesktop: 225px;
$sizeMobile: 268px;
#DesignProject {
  position: relative;
  width: $sizeDesktop;
  height: $sizeDesktop;
  @include mobile-only {
    width: $sizeMobile;
    height: $sizeMobile;
  }
  max-width: 100%;
  margin: 10px;
  padding: 16px;
  cursor: pointer;
  box-shadow: none;
  transition: box-shadow 0.2s ease-out;
  &:hover {
    box-shadow: 0 12px 30px rgba($color: $blackColor, $alpha: 0.4);
  }
  & > * {
    position: absolute;
    left: 0;
    top: 0;
    user-select: none;
  }

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover; // crop to fit
    object-position: 50% 0%;
    user-select: none;
  }

  .image-modal {
    user-select: none;
    @include mobile-only {
      width: 100vw;
    }
  }

  .text {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba($color: $blackColor, $alpha: 0.25) 31%,
      rgba($color: $blackColor, $alpha: 0.75) 100%
    );
    color: $textPrimaryColorLight;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    // h2 from App.vue
    .title {
      $titleSize: 36px;
      font-family: $font-hind-madurai;
      font-style: bold;
      font-weight: 700;
      line-height: 50px;
      font-size: $titleSize;
      text-align: center;
      margin: auto;
      padding-top: $titleSize;
    }

    // h3 from App.vue
    .subtitle {
      font-family: $font-hind-madurai;
      font-style: normal;
      font-weight: bold;
      line-height: 50px;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>