<template>
  <div id="app">
    <div id='container'>
      <common-header></common-header>
    </div>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader';
export default {
  name: 'app',
  components: {
    CommonHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
#container{
margin: 0 100px
}
</style>
