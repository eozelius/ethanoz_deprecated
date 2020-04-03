<template>
  <div class="portfolio-view">
    <div class="github-logo-container">
      <Picture
        url="demos/octocat.png"
        :altText="$t('portfolio.subTitle')"
        :circle="true"
        :noShadow="true"
      />
    </div>

    <LegoViewTitle
      :title="$t('portfolio.title')"
      :sub-title="$t('portfolio.subTitle')"
      :text="$t('portfolio.text')"
      :textLink="$t('portfolio.githubLink')"
    />

    <!-- Minesweeper -->
    <div class="portfolio-item">
      <h3>{{ $t('portfolio.minesweeper.title') }}</h3>
      <a :href="minesweeperLink" target="_blank">
        <Picture
          url="demos/minesweeper.png"
          :altText="$t('portfolio.minesweeper.minesweeperLinkAltText')"
        />
      </a>
    </div>

    <!-- Weather -->
    <div class="portfolio-item">
      <h3>{{ $t('portfolio.weather.title') }}</h3>
      <a :href="weatherLink" target="_blank">
        <Picture
          url="demos/weather.png"
          :altText="$t('portfolio.weather.weatherLinkAltText')"
        />
      </a>
    </div>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import Picture from '@/components/Picture.vue'

export default {
  name: 'Portfolio',
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

.portfolio-view {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .portfolio-item {
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
