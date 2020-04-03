<template>
  <div class="home-view">
    <main>
      <div class="profile-picture-container">
        <Picture
          :url="profilePictureUrl"
          altText="Ethan Ozelius profile picture"
          :circle="true"
        />
      </div>

      <LegoViewTitle
        :title="$t('home.title')"
        :sub-title="$t('home.subTitle')"
        :text="$t('home.description')"
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
      return `profile_pictures/${randomProfilePic}_profile_pic1.jpg`
    }
  }
}
</script>
