<template>
  <main>
    <LegoViewTitle
      :title="$t('medium.title')"
      :description="$t('medium.description')"
      image-url="medium/logo.png"
      image-alt-text="medium.com logo"
    >
      <!-- Link to Medium profile -->
      <template v-slot:subtext>
        <a :href="$t('medium.mediumLink')" target="_blank">
          <p>{{ $t('medium.subtext') }}</p>
        </a>
      </template>
    </LegoViewTitle>

    <div class="articles-container">
      <MediumArticle
        v-for="(article, i) in articles"
        :key="i"
        :article="article"
      />
    </div>
  </main>
</template>

<script>
import MediumArticle from '@/components/MediumArticle'
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import articles from '@/data/articles'

export default {
  name: 'Medium',

  components: {
    LegoViewTitle,
    MediumArticle
  },

  computed: {
    articles: function () {
      return articles.en
    }
  }
}

</script>

<style lang="scss" scoped>
.articles-container {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
}
</style>
