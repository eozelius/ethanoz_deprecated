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
      :text="linkedInGithub"
      :textLink="`${$t('portfolio.githubLink')}`"
    />

    <!-- Minesweeper -->
    <div class="portfolio-item">
      <h3>{{ $t('portfolio.minesweeper.title') }}</h3>
      <p>{{ $t('portfolio.minesweeper.description') }}</p>
      <a :href="minesweeperLink" target="_blank">
        <div class="portfolio-picture">
          <Picture
            url="demos/minesweeper.png"
            :altText="$t('portfolio.minesweeper.minesweeperLinkAltText')"
          />
        </div>
      </a>
      <p>
        - {{ $t('portfolio.minesweeper.githubLink') }}
        <a href="https://github.com/eozelius/vue-minesweeper" target="_blank">github.</a>
      </p>
    </div>

    <!-- Weather -->
    <div class="portfolio-item">
      <h3>{{ $t('portfolio.weather.title') }}</h3>
      <p>{{ $t('portfolio.weather.description') }}</p>
      <a :href="weatherLink" target="_blank">
        <div class="portfolio-picture">
          <Picture
            url="demos/weather.png"
            :altText="$t('portfolio.weather.weatherLinkAltText')"
          />
        </div>
      </a>
      <p>
        - {{ $t('portfolio.weather.githubLink') }}
        <a href="https://github.com/eozelius/cra-five-day-forecast" target="_blank">github.</a>
      </p>
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
    weatherLink: () => process.env.VUE_APP_WEATHER_URL,
    linkedInGithub: function () {
      return [{
        text: this.$t('portfolio.github'),
        link: this.$t('portfolio.githubLink')
      },
      {
        text: this.$t('portfolio.linkedIn'),
        link: this.$t('portfolio.linkedInLink')
      }]
    }
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

    .portfolio-picture {
      margin-bottom: 1em;
    }

    h3 {
      color: $color-dark-blue;
      margin-bottom: 1em;
    }

    p {
      padding: 0 4% 10%;

      a {
        color: $color-dark-aqua;
      }
    }
  }
}
</style>
