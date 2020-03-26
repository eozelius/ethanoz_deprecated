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
      :text="$t('demos.text')"
      :textLink="$t('demos.githubLink')"
    />

    <!-- Minesweeper -->
    <div class="demo-item">
      <h3>{{ $t('demos.minesweeper.title') }}</h3>
      <a :href="minesweeperLink" target="_blank">
        <Picture
          url="demos/minesweeper.png"
          :altText="$t('demos.minesweeper.minesweeperLinkAltText')"
        />
      </a>
    </div>

    <!-- Weather -->
    <div class="demo-item">
      <h3>{{ $t('demos.weather.title') }}</h3>
      <a :href="weatherLink" target="_blank">
        <Picture
          url="demos/weather.png"
          :altText="$t('demos.weather.weatherLinkAltText')"
        />
      </a>
    </div>
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

  computed: {
    minesweeperLink: () => process.env.VUE_APP_MINESWEEPER_URL,
    weatherLink: () => process.env.VUE_APP_WEATHER_URL
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

.demos-view {
  display: flex;
  flex-direction: column;
  justify-content: center;

  // align-self: center;

  .demo-item {
    width: 85%;
    align-self: center;
    margin: 4% 0;
    padding: 3% 0 0;
    text-align: center;
    background-color: $color-lite-blue-gray;
    border-radius: 5px;

    h3 {
      color: $color-dark-blue;
    }
  }
}
</style>
