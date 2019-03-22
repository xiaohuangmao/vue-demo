<template>
  <div id="app" class="page page-index">
    <Header />
    <Sidebar />
    <Crumbs />

    <div class="page-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/includes/Header'
import Sidebar from '@/components/common/includes/Sidebar'
import Crumbs from '@/components/common/includes/Crumbs'

export default {
  name: 'App',

  components:{
    Header,
    Sidebar,
    Crumbs
  }
}
</script>

<style lang="stylus">
  body
    font-size 14px
    color #5e5e5e

  .clearfix:before,
  .clearfix:after
    display table;
    content "";

  .clearfix:after
    clear both

  .page-wrapper
    position absolute
    top 86px
    left 220px
    bottom 0
    right 0
    z-index 8
    box-sizing border-box
    background-color #f5f5f5
    overflow hidden

  .page
    width 100%
    height 100%
    padding 10px
    overflow-x hidden
    overflow-y auto
</style>
