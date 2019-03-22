<template>
  <div class="header">
      <div class="header-search">
        <input type="search" placeholder="请输入搜索条件...">
      </div>

    <div class="header-user">
      <span class="welcome">
        欢迎你，<span class="userId">xiaohuangmao</span>
      </span>
      <a href="javascript:;" class="signOut ml-md-2" @click="open">退出</a>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    open(){
      this.$confirm('确定退出登录吗？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        this.$message({
          type: 'success',
          message: 'ok!'
        })
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
    }
  }
}
</script>

<style lang='stylus' scoped>
  .header
    position absolute
    top 0
    left 220px
    right 0
    z-index 8
    display flex
    justify-content space-between
    align-items center
    height 45px
    border-bottom 1px solid #eee
    box-sizing border-box
    padding 0 15px

  .header-search
    width 200px
    height 100%

    &>input
      width 100%
      height 100%
      border none
      font-size 14px

  .header-user
    font-size 14px

    &>a
      color #4b4b4b

</style>
