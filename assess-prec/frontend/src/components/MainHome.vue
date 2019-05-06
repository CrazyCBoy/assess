<template>
  <el-menu :default-openeds="['1', '3']">
    <div>
      <el-container>
        <el-aside width="200px">

          <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>格点降水检验</span>
                </template>
                <el-submenu index="1-1">
                  <template slot="title">邻域空间检验方法</template>
                  <el-menu-item index="1-1-1" @click="DomainSpace(HourByHour)">逐小时</el-menu-item>
                  <el-menu-item index="1-1-2" @click="DomainSpace(three)">3小时</el-menu-item>
                  <el-menu-item index="1-1-3" @click="DomainSpace(six)">6小时</el-menu-item>
                  <el-menu-item index="1-1-4" @click="DomainSpace(Twenty-four)">24小时</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">常规技巧评分</template>
                  <el-submenu index="1-2-1">
                    <template slot="title"  @click="routine(HourByHour)"collapse>逐小时</template>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                  </el-submenu>
                  <el-submenu index="1-2-2">
                    <template slot="title"  @click="routine(three)">3小时</template>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                  </el-submenu>
                  <el-submenu index="1-2-3">
                    <template slot="title"  @click="routine(six)">6小时</template>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                  </el-submenu>
                  <el-submenu index="1-2-4">
                    <template slot="title"  @click="routine(Twenty-four)">24小时</template>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                  </el-submenu>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-help"></i><span>站点降水检验</span></template>
                <el-submenu index="2-1">
                  <template slot="title">降水技巧评分</template>
                  <el-menu-item index="2-1-1" @click="sixhr()">6hr</el-menu-item>
                  <el-menu-item index="2-2-2" @click="Twenty-four()">24hr</el-menu-item>
                </el-submenu>
                <el-submenu index="2-2">
                  <template slot="title">近地面要素检验</template>
                  <el-menu-item index="2-2-1" @click="RMSE">RMSE</el-menu-item>
                  <el-menu-item index="2-2-2" @click="RelativeError">相对误差</el-menu-item>
                  <el-menu-item index="2-2-3" @click="AbsoluteError">绝对误差</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>

        </el-aside>
        <el-main>
          <div class="block">
            <el-date-picker style="height: 50px;lenght:50px;" v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-main>
      </el-container>
    </div>
  </el-menu>
</template>
<script>
  export default {
    name: "MainHome",
    components: {},
    data () {
      return {
        radio: '1',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        value1: '',
        value2: '',
        value3: '',
        options: [{
          value: '选项1',
          label: 'TS'
        }, {
          value: '选项2',
          label: 'ETS'
        }, {
          value: '选项3',
          label: 'BIAS'
        }, {
          value: '选项4',
          label: 'PSS'
        }, {
          value: '选项5',
          label: 'ACCURACY'
        },{
          value:'选项6',
          label:'POD'
        },{
          value:'选项7',
          label:'POFD'
        },{
          value:'选项8',
          label:'EDI'
        },{
          value:'选项9',
          label:'SEDI'
        }],
        value: ''
      };
    }
  }
</script>
<style lang="less">
  @import url("//unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css");
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .ml{
    float:left;
    width:75%;
    height:1px;
    -webkit-transform:translateY(-8000%);
  }
  .block{
    width: 300px;
    position: absolute;
    left: 1035px;
    height: 10px;
    -webkit-transform:translateY(-800%);
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
