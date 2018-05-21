<template>
    <img :src="icon" :href="url">
</template>

<script>
export default {
    name: "icon-button",
    props: [ 'icon', 'url' ]
};
</script>

<style lang="scss" scoped>

</style>
