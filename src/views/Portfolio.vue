<template>
  <div class="portfolio-view">
    <!-- Porfolio Banner: octocat, page title and description -->
    <LegoViewTitle
      :title="$t('portfolio.title')"
      :description="$t('portfolio.description')"
      :imageAltText="$t('portfolio.github')"
      imageUrl="demos/octocat.png"
    >
      <!-- Github and Linkedin Links -->
      <template v-slot:subtext>
        <div v-for="(profile, i) in portfolioProfiles" :key="i">
          <a :href="profile.link" target="_blank">
            <p>{{ profile.text }}</p>
          </a>
        </div>
      </template>
    </LegoViewTitle>

    <!-- Minesweeper -->
    <LegoBox
      :title="$t('portfolio.minesweeper.title')"
      :description="$t('portfolio.minesweeper.description')"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <a :href="minesweeperLink" target="_blank">
          <Picture
            url="demos/minesweeper.png"
            :altText="$t('portfolio.minesweeper.minesweeperLinkAltText')"
          />
        </a>
      </template>

      <!-- subtext slot -->
      <template v-slot:subtext>
        <p>
          - {{ $t('portfolio.minesweeper.githubLink') }}
          <a href="https://github.com/eozelius/vue-minesweeper" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>

    <!-- Weather -->
    <LegoBox
      :title="$t('portfolio.weather.title')"
      :description="$t('portfolio.weather.description')"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <a :href="weatherLink" target="_blank">
          <div class="portfolio-picture">
            <Picture
              url="demos/weather.png"
              :altText="$t('portfolio.weather.weatherLinkAltText')"
            />
          </div>
        </a>
      </template>

      <!-- subtext slot -->
      <template v-slot:subtext>
        <p>
          - {{ $t('portfolio.weather.githubLink') }}
          <a href="https://github.com/eozelius/cra-five-day-forecast" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import Picture from '@/components/Picture.vue'
import LegoBox from '@/legos/LegoBox.vue'

export default {
  name: 'Portfolio',
  components: {
    LegoViewTitle,
    Picture,
    LegoBox
  },

  computed: {
    minesweeperLink: () => process.env.VUE_APP_MINESWEEPER_URL,
    weatherLink: () => process.env.VUE_APP_WEATHER_URL,
    portfolioProfiles: function () {
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
}
</style>
