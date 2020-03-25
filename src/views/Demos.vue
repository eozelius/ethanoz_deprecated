<template>
  <div class="demos-view">
    <Picture
      url="demos/octocat.png"
      :altText="$t('demos.subTitle')"
      :transparentBG="true"
    />

    <LegoViewTitle
      :title="$t('demos.title')"
      :sub-title="$t('demos.subTitle')"
    />

    <a :href="minesweeperLink">
      <Picture
        url="demos/minesweeper.png"
        :altText="$t('demos.minesweeperLink')"
      />
    </a>

    <a :href="minesweeperLink">
      <Picture
        url="demos/minesweeper.png"
        :altText="$t('demos.minesweeperLink')"
      />
    </a>

    <a :href="minesweeperLink">
      <Picture
        url="demos/minesweeper.png"
        :altText="$t('demos.minesweeperLink')"
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
      minesweeperLink: process.env.VUE_APP_MINESWEEPER_URL
    }
  }
}
</script>
