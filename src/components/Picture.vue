<template>
  <div class="picture">
    <img
      :class="{ circle: this.circle, 'transparent-bg': this.transparentBG }"
      :src="require(`@/assets/images/${this.url}`)"
      :alt="altText"
    />
  </div>
</template>

<script>
export default {
  name: 'Picture',

  props: {
    url: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    circle: {
      type: Boolean,
      required: false,
      default: false
    },

    transparentBG: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
.picture {
  display: flex;
  justify-content: center;

  img {
    width: 55vw;
    height: 25vh;
    margin: 5%;
    border-radius: 5%;
    box-shadow: 5px 5px 5px $color-dark-gray;
  }

  img.circle {
    border-radius: 50%;
  }

  img.transparent-bg {
    box-shadow: none;
  }
}
</style>
