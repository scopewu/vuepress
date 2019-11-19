<template>
  <footer class="footer-container">
    <div class="footer">
      <div class="footer-item">
        <div>
          &copy; {{ new Date().getFullYear() }} WenJun
        </div>
        <div class="links">
          <router-link class="link" to="/">首页</router-link>
          <router-link class="link" to="/me.html">Me</router-link>
        </div>
      </div>
      <div class="footer-item">
        <div>
          <ClientOnly>scopewu@gmail.com</ClientOnly>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="stylus">
  $navbar-vertical-padding = 0.7rem
  $navbar-horizontal-padding = 1.5rem

.footer-container
  padding 1.5rem 0
  background-color rgba(248, 248, 248, .8)

.footer
    max-width 880px
    margin 0 auto
    padding 0 1rem
    box-sizing border-box

.footer-item
  display flex
  align-items center
  justify-content space-between
  &:not(:first-of-type)
    margin-top .5rem
  .copyright
    /*flex 1 auto*/
  .links > .link
      margin 0 0.5rem
</style>
