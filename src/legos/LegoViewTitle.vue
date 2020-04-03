<template>
  <div class="lego-view-title">
    <h1 class="view-title-h1">{{ title }}</h1>
    <h3 class="view-sub-title-h3">{{ subTitle }}</h3>

    <div
      v-if="text"
      class="optional-text-block-container"
    >
      <a
        v-if="textLink"
        :href="textLink"
        target="_blank"
      >
        <p>{{ text }}</p>
      </a>
      <p v-else>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegoViewTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    textLink: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@keyframes slideInFromRight {
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0);
  }
}

.lego-view-title {
  display: flex;
  flex-direction: column;
  opacity: .95;
  width: 80%;
  border-radius: 7px;
  box-shadow: 5px 5px 5px $color-dark-gray;
  margin: 5% auto;
  padding: 3% 4%;
  background: $color-lite-gray;
  opacity: .85;
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.view-title-h1 {
  color: $color-dark-blue;
}

.view-sub-title-h3 {
  margin: 6% 0 4%;
  color: $color-dark-gray;
  text-align: left;
}

.optional-text-block-container {
  margin: 7% 0 1%;
  text-align: right;
}

</style>
