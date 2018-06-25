<template>
    <div id="kmenu" >
        <a 
        v-for="(name, id) in items" 
        href="#"
        :class="[id == selectedItem ? selectedClass : '', defaultClass]" 
        :id="menuId(id)"
        :key="id.content" 
        v-scroll-to="`#${id}`"
        >{{ name }}</a>
    </div>
</template>

<script>
export default {
  name: "kmenu",
  props: {
    items: Map // id to item name
  },
  data: function() {
    return {
      selectedItem: undefined,
      defaultClass: "item",
      selectedClass: "selected"
    };
  },
  methods: {
    onItemSelected: function(id) {
      this.selectedItem = id;
    },
    menuId: function(id) {
      return `menu-item-${id}'                                                                                                                                                                                                                                                                                                                                                                                                                                                     -item-${id}`;
    },
  }
};
</script>

<style lang="scss" scoped>
#kmenu {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  height: 60px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: $menuBackgroundColor;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.03);

  .item {
    width: 96px;
    height: 48px;
    color: $textPrimaryColor;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-family: $font-hind-madurai;
    font-style: normal;
    font-weight: bold;
    line-height: 50px;
    font-size: 14px;
  }

  .selected {
    color: $accentColor;
  }
}
</style>
