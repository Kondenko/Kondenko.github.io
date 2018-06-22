<template>
    <div class="exp-item">
        <p v-if="showYear" class="year"> {{ year }} </p>
        <h2 class="header" >{{ header }}</h2>
        <p class="body" v-html="text"></p>
        <img v-if="emoji" class="emoji" :src="emoji" :style="emojiOnRight ? 'grid-column: emoji-right / emoji-right' : 'grid-column: emoji-left / emoji-left'"/>
    </div>
</template>

<script>
export default {
  name: "ExpItem",
  props: {
    year: Number,
    header: String,
    text: String,
    emoji: String,
    showYear: Boolean,
    emojiOnRight: Boolean
  }
};
</script>

<style lang="scss">
.exp-item {
  min-height: 100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: [emoji-left] 300px [text] 700px [emoji-right] 300px;
  grid-template-rows: [year] 80px [header] 60px [body] auto;
}

.year {
  font-family: $font-hind-madurai;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  color: $experienceYearColor;
  text-align: left;
  grid-column: text / text;
  grid-row: year / header;
}

.header {
  grid-column: text / text;
  grid-row: header / header;
  align-self: center;
  justify-self: start;

}

.body {
  grid-column: text / text;
  grid-row: body / body;
}

$emojiSize: 60px;
.emoji {
  width: $emojiSize;
  height: $emojiSize;
  grid-row: body / body;
  justify-self: center;
}
</style>
