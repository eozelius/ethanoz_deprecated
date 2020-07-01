<template>
  <div class="home-view">
    <main>
      <LegoViewTitle
        :title="$t('home.title')"
        :description="$t('home.description')"
        :subtext="$t('home.subtext')"
        :image-url="profilePictureUrl"
        image-alt-text="ethan Ozelius profile picture"
      />
    </main>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import '@/assets/styles/ethanoz.scss'

export default {
  name: 'Home',
  components: {
    LegoViewTitle
  },

  computed: {
    profilePictureUrl: function () {
      const options = [
        'colombia',
        'flushing',
        'hudson',
        'istanbul',
        'mexico'
      ]
      const randomProfilePic = options[Math.floor(Math.random() * options.length)]
      return `profile_pictures/${randomProfilePic}.jpg`
    }
  }
}
</script>
