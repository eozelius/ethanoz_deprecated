<template>
  <div
    id="app"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/backgrounds/' + backgroundImageUrl) + ')',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    }"
  >
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/assets/styles/reset.scss'
import '@/assets/styles/ethanoz.scss'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  computed: {
    backgroundImageUrl: function () {
      const options = [
        'colorado',
        'budapest',
        'colombia',
        'nyc',
        'peru',
        'sabaneta',
        'salento'
      ]
      const randomBackground = options[Math.floor(Math.random() * options.length)]
      return `${randomBackground}_bg1.jpg`
    }
  }
}
</script>
