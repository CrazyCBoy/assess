<template>
  <div id="app">
    <el-header>
      <nav-header/>
    </el-header>
    <el-aside>
      <sidebar></sidebar>
    </el-aside>
    <el-main>

      <router-view></router-view>
    </el-main>
    <el-footer>
      <nav-footer></nav-footer>
    </el-footer>
  </div>
</template>

<script>
  import NavHeader from "./views/layout/components/Header";
  import NavFooter from "./views/layout/components/Footer";
  import Sidebar from './views/layout/components/Sidebar'
  import Navbar from './views/layout/components/Navbar'

  export default {
    name: 'App',
    components: {NavHeader, NavFooter, Sidebar, Navbar},
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  body {
    margin: 0;
    padding: 0;
    #app {
      .el-header {
        z-index: 99;
      }

      .el-footer {
        z-index: 99;
      }

      .el-aside {
        width: 330px !important;
        float: left;

        z-index: 9;
        .scroll-container {
          margin-top: 60px;
          left: -10px;
        }
      }
    }
  }
</style>
