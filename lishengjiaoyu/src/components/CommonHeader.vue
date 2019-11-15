<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <!-- <img class='logo' src="../image/logo-2.png" alt=""> -->
    <!-- <img class='logo2' src="../image/lsjy1.png" alt="" href="/"> -->
    <b-navbar-brand href="/">
    <img class='logo2' src="../image/lsjy1.png" alt="" href="/">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/" >首页</b-nav-item>
        <b-nav-item href="#" >联系我们</b-nav-item> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style lang="scss">
    .logo2{
    height: 70px;
    }
    .fr{
      float: right;
    }
</style>