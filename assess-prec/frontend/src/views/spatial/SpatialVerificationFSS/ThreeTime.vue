<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>选择数据</span>
        <el-button style="float:right" type="primary" @click="handleSearchList()" size="small">查询搜索</el-button>
        <el-button style="float:right;margin-right: 15px" @click="handleResetSearch()" size="small">重置</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="提交时间：">
            <el-date-picker
              class="input-width"
              v-model="listQuery.createTime"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="SCALE：">
            <el-select v-model="listQuery.status" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in statusOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择小时：">
            <el-select v-model="listQuery.orderType" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in orderTypeOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>图表展示</span>
      <div class="statistics-layout">
        <el-row>
          <el-col :span="4">
            <div style="padding: 20px">
              <h1>图表</h1>
            </div>
          </el-col>
          <el-col :span="20">
            <div style="padding: 10px;border-left:1px solid #DCDFE6">

              <div>
                <div class="seven_echarts"  id="seven"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

    </el-card>

    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :total="total">
      </el-pagination>
    </div>

    <logistics-dialog v-model="logisticsDialogVisible"></logistics-dialog>
  </div>
</template>
<script>
  import {str2Date} from '@/utils/date';

  const defaultListQuery = {
    pageNum: 1,
    pageSize: 10,
    orderSn: null,
    receiverKeyword: null,
    status: null,
    orderType: null,
    sourceType: null,
    createTime: null,
  };
  export default {
    name: "ThreeProduct",

    data() {
      return {
        orderCountDate: '',

        seven_option: {
          title: {
            text: 'GRAPES降水检测',//感觉头部有点乱，没使用自带的标题
            x: 'left',
            align: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [{name: 'T639'},
              {name: 'GRAPES'},
              {name: 'GRAPESPAR'}],
            bottom: 350,
            left: 100,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              magicType: {
                type: ['line']//这里添加图表样式，如['line','bar']折现加柱状
              }
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1DEC", "6DEC", "11DEC", "16DEC", "21DEC", "26DEC", "31DEC"]
          },
          yAxis: {
            nameLocation: 'end',
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
            {
              name: 'GRAPES',
              data: [0.8, 0.79, 0.72, 0.86, 0.81, 0.77, 0.82],
              type: 'line',
              symbol: 'triangle',//三角形
              symbolSize: 10,//三角大小
              lineStyle: {
                normal: {//虚线
                  color: 'red',
                  type: 'dashed'
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  borderColor: 'red',
                  color: 'red'
                }
              }
            },
            /* {
                  name:'最低气温',
                  type:'line',
                  data:[0,-1,-3,-4,0,-2,-4],
                  lineStyle:{//设置折线色颜色
                    color:'#3f89ec'
                  },
                  itemStyle:{//设置折线折点的颜色
                    normal : {
                      color:'#3f89ec'
                    }
                  }
                },*/
            {
              name: 'T639',
              type: 'line',
              data: [0.85, 0.7, 0.82, 0.79, 0.88, 0.77, 0.89],
              lineStyle: {//设置折线色颜色,不设置默认为红
                color: 'black'
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'black'
                }
              }
            },
            /* {
                  name:'GRAPES',
                  type:'line',
                  data:[0.68,0.75,0.68,0.84,0.98,0.77,0.89],
                  lineStyle:{//设置折线色颜色,不设置默认为红
                    color:'red'
                  },
                  itemStyle:{//设置折线折点的颜色
                    normal : {
                      color:'red'
                    }
                  }
                },*/
            {
              name: 'GRAPESPAR',
              type: 'line',
              data: [0.8, 0.85, 0.78, 0.84, 0.88, 0.87, 0.89],
              symbol: 'image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557829283004&di=dc38a9a4e512949084b45a9260e9a963&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D2675801298%2C2422093698%26fm%3D191%26app%3D48%26wm%3D1%2C17%2C90%2C45%2C20%2C7%26wmo%3D0%2C0%26n%3D0%26g%3D0n%26f%3DJPEG%3Fsec%3D1853310920%26t%3D6cb8c84bc4e3e8e0443f3972bfc09717',//三角形  小圆点pin 菱形diamond  朝上箭头arrow  圆边正方形roundRect rect 圆circle
              symbolSize: 10,
              lineStyle: {//设置折线色颜色,不设置默认为红
                normal: {//虚线属性
                  color: 'green',
                  type: 'dashed'//虚线dashed
                }
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'green'
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  borderColor: 'green',
                  color: 'green'
                }
              }
            },
            /* {
                  name:'平行于y轴的趋势线',
                  type:'line',
                  markLine: {
                    name:'aa',
                    data: [
                      {
                        name: '0℃标准线',
                        yAxis: 0,
                        lineStyle:{//设置折线色颜色
                          color:'red'
                        },
                      },
                    ],
                    symbol: ['arrow', 'none'],//将箭头向左  默认值是向右的
                    label:{
                      show:true,
                      position:'middle',//markline描述位于中间   right，left，middle
                      formatter: '{b}: {c}',//显示name中的描述
                    }
                  }
                }*/
          ],
        },

        listQuery: Object.assign({}, defaultListQuery),
        listLoading: true,
        list: null,
        total: null,
        operateType: null,
        multipleSelection: [],
        closeOrder:{
          dialogVisible:false,
          content:null,
          orderIds:[]
        },
        statusOptions: [
          {
            value: 0,
            label: 'mean'
          },{
            value: 1,
            label: 'SCALE(3X)'
          }, {
            value: 5,
            label: 'SCALE(5X)'
          },{
            value: 3,
            label: 'SCALE(9X)'
          },{
            value: 4,
            label: 'SCALE(13X)'
          },{
            value: 5,
            label: 'SCALE(17X)'
          },{
            value: 6,
            label: 'SCALE(33X)'
          },{
            value: 7,
            label: 'SCALE(65X)'
          }
        ],
        orderTypeOptions: [
          {
            value: 0,
            label: '3hrs'
          }, {
            value: 1,
            label: '6hrs'
          }, {
            value: 2,
            label: '9hrs'
          }, {
            value: 3,
            label: '12hrs'
          }, {
            value: 4,
            label: '15hrs'
          }, {
            value: 5,
            label: '18hrs'
          }, {
            value: 6,
            label: '21hrs'
          }, {
            value: 7,
            label: '24hrs'
          }, {
            value: 8,
            label: '27hrs'
          }, {
            value: 9,
            label: '30hrs'
          }, {
            value: 10,
            label: '33hrs'
          }, {
            value: 11,
            label: '36hrs'
          }
        ],
        logisticsDialogVisible:false
      }
    },
    created() {
      this.getData();
      this.initOrderCountDate();
    },
    mounted:function (){
      this.get_echarts();

    },
    methods: {
      get_echarts:function(){
        this.seven_chart = this.echarts.init(document.getElementById("seven"));
        // 把配置和数据放这里
        this.seven_chart.setOption(this.seven_option)

      },
      handleDateChange(){
        this.getData();
      },
      getData(){
        setTimeout(() => {
          this.chartData = {
            columns: ['date', 'orderCount','orderAmount'],
            rows: []
          };
          for(let i=0;i<DATA_FROM_BACKEND.rows.length;i++){
            let item=DATA_FROM_BACKEND.rows[i];
            let currDate=str2Date(item.date);
            let start=this.orderCountDate[0];
            let end=this.orderCountDate[1];
            if(currDate.getTime()>=start.getTime()&&currDate.getTime()<=end.getTime()){
              this.chartData.rows.push(item);
            }
          }
          this.dataEmpty = false;
          this.loading = false
        }, 1000)
      },
      initOrderCountDate(){
        let start = new Date();
        start.setFullYear(2018);
        start.setMonth(10);
        start.setDate(1);
        const end = new Date();
        end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7);
        this.orderCountDate=[start,end];
      },
      handleResetSearch() {
        this.listQuery = Object.assign({}, defaultListQuery);
      },
      handleSearchList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
      handleSizeChange(val){
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val){
        this.listQuery.pageNum = val;
        this.getList();
      },


    }
  }
</script>
<style scoped>
  .input-width {
    width: 203px;
  }
  .seven_echarts{ height: 600px; width:700px; }
</style>


