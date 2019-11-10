<template>
  <div id="app">
    <common-header></common-header>
    <rotation-chart></rotation-chart>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader.vue';
import RotationChart from './components/RotationChart'

export default {
  components: {
    CommonHeader,
    RotationChart
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
