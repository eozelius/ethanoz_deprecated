<template>
  <div class="medium-article__container">
    <h2 class="medium-article__title">{{ article.title }}</h2>

    <img
      :src="require(`@/assets/images/medium/${getIsMobile ? 'small': 'large'}/${article.mainImagePath}`)"
      :alt="`${article.title} image`"
      class="medium-article__banner-image"
    />

    <div
      v-for="(p, i) in article.paragraphs"
      :key="i"
      class="medium-article__paragraph"
    >
      <!-- codeBlock -->
      <vue-embed-gist
        v-if="p.type === 'codeBlock'"
        :gist-id="p.gistId"
        :gist-file="p.gistFile"
      />

      <!-- text -->
      <p v-if="p.type === 'text'">
        {{ p.text }}
      </p>

      <!-- image -->
      <img
        v-if="p.type === 'image'"
        :src="require(`@/assets/images/medium/${getIsMobile ? 'small': 'large'}/${p.url}`)"
        :alt="p.altText"
        class="medium-article__image"
      />

      <span
        v-if="p.dots"
        class="dots">
        ...
      </span>
    </div>

    <p v-if="article.mediumLink">
      {{ $t('medium.readOnMedium') }}
      <a
        class="medium-article-link"
        :href="article.mediumLink"
        target="_blank"
      >
        medium
      </a>
    </p>

    <div v-if="tags.length">
      <span
        v-for="tag in tags"
        :key="tag"
        class="tag"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import isMobile from '@/utils/isMobile'
import VueEmbedGist from 'vue-embed-gist'

export default {
  name: 'MediumArticle',

  components: {
    VueEmbedGist
  },

  data: function () {
    return {
      addMobileClass: isMobile(),
      size: isMobile() ? 'small' : 'large'
    }
  },

  props: {
    article: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    getIsMobile () {
      return isMobile()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@import '../assets/styles/mixins.scss';
@import 'https://github.githubassets.com/assets/gist-embed-52b3348036dbd45f4ab76e44de42ebc4.css';

.medium-article__container {
  @include bluebox;
}

.tag {
  @include tag;
}

.medium-article__title {
  color: $color-dark-blue;
  margin-bottom: 1em;
}

.medium-article__description {
  padding: 0 4% 10%;
}

.medium-article__banner-image {
  width: 90%;
  align-self: center;
  margin-bottom: 13%;
}

.medium-article__paragraph {
  padding: 0 2% 10%;
}

.medium-article__image {
  width: 90%;
  align-self: center;
}

.medium-article-link {
  color: $color-dark-aqua;
}
</style>
