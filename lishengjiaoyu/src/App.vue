<template>
  <div id="app">
    <common-header></common-header>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader.vue';

export default {
  components: {
    CommonHeader,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
