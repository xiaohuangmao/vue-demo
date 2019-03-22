<template>
  <div class="page page-index">

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

<el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-carousel height="256px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3><img :src="'@/assets/imgs'+item+'jpg'"></h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>


export default {

}
</script>

<style lang="stylus">
  .item
    margin-bottom 18px
  .box-card
    width 100%
  .el-row
    margin-bottom 20px
  .el-col
    border-radius 4px
  .bg-purple-dark
    background #99a9bf
  .bg-purple
    background #d3dce6
  .bg-purple-light
    background #e5e9f2
  .grid-content
    border-radius 4px
  .row-bg
    padding 10px 0
    background-color #f9fafc

</style>
