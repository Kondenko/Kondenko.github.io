<template>
    <div class="exp-item" :style="rows">
        <p v-if="showYear" class="year"> {{ year }} </p>
        <h2 class="header" >{{ header }}</h2>
        <p class="body" v-html="text"></p>
        <img v-if="emoji" class="emoji" :src="emoji" :style="emojiPlacement"/>
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
  },
  computed: {
    emojiPlacement() {
      return this.emojiOnRight ? 'grid-column: emoji-right / emoji-right' : 'grid-column: emoji-left / emoji-left'
    },
    rows() {
      return `grid-template-rows: [year] ${this.showYear ? '100px' : '0px'} [header] auto [body] auto;`
    }
  }
};
</script>

<style lang="scss">
$emojiSize: 60px;
$emojiColumnWidth: $emojiSize + 90px * 2;


.exp-item {
  min-height: 100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: [emoji-left] $emojiColumnWidth [text] 700px [emoji-right] $emojiColumnWidth;
  margin-bottom: 40px;
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
  grid-column: text;
  grid-row: year;
  align-self: center;
  justify-self: start;
  margin: 0 0 25px 0;
}

.header {
  margin-bottom: 20px;
  grid-column: text;
  grid-row: header;
  align-self: center;
  justify-self: start;
}

.body {
  grid-column: text;
  grid-row: body;
  align-self: start;
  margin: 0;
}

.emoji {
  width: $emojiSize;
  height: $emojiSize;
  grid-row: body;
  justify-self: center;
  align-self: start;
}
</style>
