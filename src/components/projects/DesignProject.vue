<template>
    <div id="DesignProject" v-on:click="openProject">
        <img class="background" :src="background" :alt="title" target="_blank">
        <div class="text">
           <div class="title">{{ title }}</div>
           <div class="subtitle">{{ subtitle }}</div>
        </div> 
        <img v-if="link" class="external-link-icon" :src="externalLinkIcon"/>
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
  data: function() {
    return {
      externalLinkIcon: require("ic/ic_link_external.svg")
    };
  },
  methods: {
    openProject: function(event) {
      if (this.link) {
        this.$ga.event("click", "designProjectLink", this.title);
        window.open(this.link, "_blank");
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
@import '~res/text-styles';

$sizeDesktop: 225px;
$sizeMobile: 268px;
#DesignProject {
  position: relative;
  display: inline-block;
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
  & > .background, .text {
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

  $iconSize: 24px;
  $margin: 14px;
  .external-link-icon {
    width: $iconSize;
    height: $iconSize;
    position: absolute;
    top: $margin;
    right: $margin;
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

    .title {
      @extend h2;
      $titleSize: 36px;
      font-size: $titleSize;
      text-align: center;
      margin: auto;
      padding-top: $titleSize;
    }

    .subtitle {
      @extend h3;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>