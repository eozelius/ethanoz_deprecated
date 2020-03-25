<template>
  <div class="home-view">
    <main>
      <Picture
        url="profile_pictures/istanbul_profile_pic1.jpg"
        altText="Ethan Ozelius Istanbul skull and crossbones profile picture"
        :circle="true"
      />

      <LegoViewTitle
        :title="$t('home.title')"
        :sub-title="$t('home.subTitle')"
      />
    </main>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import Picture from '@/components/Picture.vue'

import '@/assets/styles/ethanoz.scss'

export default {
  name: 'Home',
  components: {
    LegoViewTitle,
    Picture
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  height: 100%;
}
</style>
