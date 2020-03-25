<template>
  <footer class="footer">
    <h6>
      {{ $t('footer.copyright') }}
    </h6>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";

.footer {
  width: 100%;
  text-align: center;
  line-height: 1em;
  padding: 30px 0;
  background-color: $color-dark-blue;
  align-items: flex-start;

  h5 {
    display: inline;
  }
}
</style>
