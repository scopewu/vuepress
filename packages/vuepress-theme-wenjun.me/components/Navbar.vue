<template>
  <header class="navbar-container">
    <div class="navbar-header">
      <router-link class="site-img" to="/">
        <img src="https://avatars1.githubusercontent.com/u/15811268" alt="" />
      </router-link>
      <div class="navbar-site">
        <router-link class="name" to="/">WenJun</router-link>
        <div class="name-desc">An JavaScript developer</div>
      </div>
      <div class="navbar-links">
        <router-link to="/me.html" class="link">Me</router-link>
      </div>
    </div>
  </header>
</template>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar-container
  box-shadow 0 0 5px rgba(0, 0, 0, .2)

.navbar-header
  display flex
  flex-wrap wrap
  align-items center
  max-width 880px
  margin 0 auto
  padding $navbar-vertical-padding $navbar-horizontal-padding
  font-size 1.2rem
  box-sizing border-box
  a:hover
    text-decoration underline
  .site-img
    width 60px
    height 60px
    img
      max-width 100%
  .navbar-site
    flex 1 0 190px
    padding-left 1rem
    .name
      font-size 1.5rem
  .navbar-links
    flex 1 1 auto
    display flex
    flex-wrap wrap
    justify-content center
    .link
      margin 0 .5rem
</style>
