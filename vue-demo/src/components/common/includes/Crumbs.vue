<template>
  <div class="crumbs">
    <a href="">主页</a>
    <a href="">产品列表</a>
    <a href="">添加产品</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .crumbs
    position absolute
    top 46px
    left 220px
    right 0
    height 40px
    line-height 40px
    box-shadow 0 2px 2px #ccc
    z-index 9

    &>a
      position relative
      display inline-block
      padding 0 15px
      font-size 14px
      color #8e8e8e

      &::after
        content '>'
        position absolute
        right 0

      &:nth-last-child(1)::after
        content ''

      &:hover
        text-decoration none
        color #5e5e5e

</style>
