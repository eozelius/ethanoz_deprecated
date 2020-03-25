<template>
  <div class="demos-view">
    <Picture
      url="demos/octocat.png"
      altText="Demo Projects and hello world apps"
      :transparentBG="true"
    />

    <LegoViewTitle
      :title="$t('demos.title')"
      :sub-title="$t('demos.subTitle')"
    />

    <a :href="minesweeperLink">
      <Picture
        url="demos/minesweeper.png"
        altText="Minesweeper demo"
      />
    </a>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import Picture from '@/components/Picture.vue'

export default {
  name: 'Home',
  components: {
    LegoViewTitle,
    Picture
  },

  data: function () {
    return {
      minesweeperLink: process.env.MINESWEEPER_URL
    }
  }
}
</script>

<style lang="scss" scoped>
.demos-view {
  height: 100%;
}
</style>
