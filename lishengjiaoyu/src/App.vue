<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
     <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader.vue';
import CommonFooter from './components/CommonFooter';

export default {
  components: {
    CommonHeader,
    CommonFooter
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
