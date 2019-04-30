<template>
  <el-menu :default-openeds="['1', '3']">
  <div class="position">
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title" class="LatticePoint"><i class="el-icon-help"></i><span>格点降水检验</span></template>
          <el-submenu index="1-1">
            <template slot="title">邻域空间检验方法</template>
            <el-menu-item index="1-1-1">逐小时</el-menu-item>
            <el-menu-item index="1-1-2">3小时</el-menu-item>
            <el-menu-item index="1-1-3">6小时</el-menu-item>
            <el-menu-item index="1-1-4">24小时</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
          <template slot="title">常规技巧评分</template>
            <el-menu-item index="1-2-1">逐小时</el-menu-item>
            <el-menu-item index="1-2-2">3小时</el-menu-item>
            <el-menu-item index="1-2-3">6小时</el-menu-item>
            <el-menu-item index="1-2-4">24小时</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-help"></i><span>站点降水检验</span></template>
          <el-submenu index="2-1">
            <template slot="title">降水技巧评分</template>
            <el-menu-item index="2-1-1">6hr</el-menu-item>
            <el-menu-item index="2-2-2">24hr</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">近地面要素检验</template>
            <el-menu-item index="2-2-1">RMSE</el-menu-item>
            <el-menu-item index="2-2-2">相对误差</el-menu-item>
            <el-menu-item index="2-2-3">绝对误差</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
  </div>
  </el-menu>
</template>

<script>

  export default {
    name: "MainHome",
    components: {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
  </script>
<style scoped>
  .position{
    width:600px;
    margin:0%;
    font-size: 20px;
    height: 100px;
    text-align: left;
    line-height: 200px;
  }
</style>
