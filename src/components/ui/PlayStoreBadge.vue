<template>
    <a :href='url + "&utm_source=personal-website&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"'>
        <img class="badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png'/>
    </a>
</template>

<script>
export default {
  name: "PlayStoreBadge",
  props: {
    url: String
  }
};
</script>

<style lang="scss">
.badge {
    width: 190px;
    height: -1;
}
</style>
