<template>
  <div class="sidebar bg-dark">
    <div class="logo">xhm</div>
    <div class="sidebar-scroll">
      <ul class="sidebar-menu">
        <li class="menu-item">
          <router-link to="/"> <span class="iconfont icon-icon_homepage "></span> 主页</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/product"><span class="iconfont icon-icon_attestation "></span> 产品列表</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/news"><span class="iconfont icon-icon_circle_line"></span> 新闻列表</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/personal"><span class="iconfont icon-icon_signal"></span> 个人中心</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/setting"><span class="iconfont icon-icon_setting"></span> 系统设置</router-link>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .sidebar
    position absolute
    left 0
    top 0
    bottom 0
    z-index 10
    width 219px
    color #f5f5f5
    overflow hidden

  .sidebar-scroll
    width 236px
    height 100%
    padding 0
    overflow-x hidden
    overflow-y auto

  .logo
    position fixed
    top 0
    left 0
    z-index 10
    width 219px
    height 45px
    line-height 45px
    text-align center
    font-size 22px
    border-bottom 1px solid #333
    background-color #343a40

  .sidebar-menu
    width 220px
    padding 0
    list-style none
    margin 0
    margin-top 46px

  .menu-item
    line-height 45px
    font-size 15px

    &>a
      display block
      position relative
      padding 0 15px
      color #f5f5f5
      transition-duration .25s

      &:hover,
      &.router-link-exact-active
        text-decoration none
        transition-duration .25s
        background-color #333

      &:hover::before,
      &.router-link-exact-active::before
        content ''
        position absolute
        left 0
        top 0
        bottom 0
        width 5px
        background-color #009688

  .iconfont
    margin-right 5px

</style>
