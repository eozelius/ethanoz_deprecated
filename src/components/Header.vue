<template>
  <header class="header">
    <nav class="nav">
      <h4>
        <router-link to="/">{{ $t('header.home') }}</router-link> |
      </h4>
      <h4>
        <router-link to="/portfolio">{{ $t('header.portfolio') }}</router-link>
      </h4>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";

.header {
  width: 100%;
  text-align: center;
  line-height: 1em;
  padding: 30px 0;
  background-color: $color-dark-blue;
  align-items: flex-start;

  h4 {
    display: inline;
  }
}
</style>
