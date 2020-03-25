<template>
  <div class="lego-view-title">
    <h1 class="view-title-h1">{{ title }}</h1>
    <h3 class="view-sub-title-h3">{{ subTitle }}</h3>
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

.lego-view-title {
  display: flex;
  flex-direction: column;
  opacity: .95;
  width: 80%;
  border-radius: 7px;
  box-shadow: 5px 5px 5px $color-dark-gray;
  margin: 5%;
  padding: 3% 4%;
  background: $color-lite-gray;
  opacity: .85;
}

.view-title-h1 {
  color: $color-dark-blue;
}

.view-sub-title-h3 {
  margin: 6% 0 4%;
  color: $color-dark-gray;
  text-align: right;
}

</style>
