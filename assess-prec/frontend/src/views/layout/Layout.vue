<template>
  <div class="app-wrapper" >

    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,//控制右侧页面上方导航组件
   //Sidebar,//控制左侧页面组件，Sidebar文件夹
    AppMain,//控制右侧组件内容
  },
  computed: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    left: -200px;
  }
</style>
