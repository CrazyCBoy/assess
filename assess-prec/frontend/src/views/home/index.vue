<template>
  <div class="app-container">
    <div class="address-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="out-border">
            <h1>内容填充1</h1>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="out-border">
            <h1>内容填充2</h1>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="statistics-layout">
      <div class="layout-title">置信区间图</div>
      <el-row>

        <el-col :span="20">
          <div style="padding: 10px;border-left:1px solid #DCDFE6">
            <div>
              <highcharts-container :defOptions="options" :styles="sty"></highcharts-container>

            </div>
            <div><h3>通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，<br>
              里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。<br>
              该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。<br>
              也可以返回一个键名为rowspan和colspan的对象。</h3>


              <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100% ; margin-top: 20px;font-size: 10px">
                <el-table-column
                  prop="id"
                  label="Dmoain"
                  width="70">
                </el-table-column>
                <el-table-column
                  prop="name"
                  width="50"
                  label="Paramater">
                </el-table-column>
                <el-table-column
                  prop="amount1"
                  width="50"
                  label="Level">
                </el-table-column>
                <el-table-column
                  width="30"
                  prop="amount2"
                  label="A">
                </el-table-column>

              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {str2Date} from '@/utils/date';
  var jStat = require('jStat').jStat;
  import HighchartsContainer from '../../components/HighchartsComponent.vue'
  import arrdata from '../../assets/js/data'

  var mm1=arrdata.newarr();//240个点
  var mm2=arrdata.newarr();//240个点
  var   stam=arrdata.newarr()//240个点，标准线
  var   arrm1=arrdata.subarr(mm1,stam)//240个点，差值
  var  arrm2=arrdata.subarr(mm2,stam)//240个点，差值
  var   averagesarr=arrdata.avgarr(arrm1)//10个点，
  var  averagesarr2=arrdata.avgarr(arrm2)//10个点

//方法1
  var arrj=jStat.tci( 0.1, 0.05,arrm1.slice(0,24).map(Number));
  arrj[0]=Math.abs(jStat.tci( 0.1, 0.05,arrm1.slice(0,24).map(Number))[0]).toFixed(3),
    arrj[1]=Math.abs(jStat.tci( 0.1, 0.05,arrm1.slice(0,24).map(Number))[1]).toFixed(3);
  const arrayAverage = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
  console.log(arrayAverage(arrj.map(Number)))

  //方法2
  function avgarr(arr) {
    var abs=0;
    arr=arr.map(Number)
    for(var i=0;i<arr.length;i++){
      if(arr[i]<0){
        arr[i]=Math.abs(arr[i]);
      }
      abs+=arr[i];
    }
    return abs/arr.length;
  }
  console.log(avgarr(arrj))



  export default {
    components: {
      HighchartsContainer
    },
    name: 'home',
    data() {
      return {
        tableData: [{
          id: 'RASI',
          name: 'UMN',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          name: 'VND',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          name: 'TEMP',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          name: 'HGT',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          name: 'HGT',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          name: 'HGT',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }],
        orderCountDate: '',
        sty: {
          width: 1200,
          height: 400
        },
        options: {
          chart: {
            type: 'columnrange',
            inverted: false
          },

          title: {
            text: 'Temperature variation by month'
          },

          subtitle: {
            text: 'Observed in Vik i Sogn, Norway, 2017'
          },

          xAxis: {
            categories: ['24', '48', '72', '96', '120', '144', '168', '192', '216', '240']
          },

          yAxis: {
            title: {
              text: 'Temperature ( °C )'
            }
          },

          tooltip: {
            valueSuffix: '°C'
          },

          plotOptions: {
            columnrange: {
              groupPadding :0.5,
              dataLabels: {
                enabled: false,//是否显示数据
                format: '{y}'//显示哪个轴的数据
              }
            }
          },

          legend: {
            enabled: false
          },

          series: [{

            type: 'spline',

            //data: averagesarr,
            data: [0,-0.15,-0.5,-0.25,-0.165,-0.22,-0.5,-0.31,-0.29,-0.19,-0.22,-0.24],
            tooltip: {
              valueSuffix: '°C'
            }
          },{
            //name: '温度',
            type: 'spline',
            //data: averagesarr2,
            data: [0,0.15,0.5,0.25,0.165,0.22,0.5,0.31,0.29,0.19,0.22,0.24],
            tooltip: {
              valueSuffix: '°C'
            }
          },
            {
              name: 'Temperatures',
              borderWidth: 2,
              borderColor:'green',
              color: 'rgba(255, 255, 255, 0)',
              pointWidth:40,
              data: [
                jStat.tci( 0.1, 0.05,arrm1.slice(0,24).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(24,48).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(48,72).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(72,96).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(96,120).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(120,144).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(144,168).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(168,192).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(192,216).map(Number)),
                jStat.tci( 0.1, 0.05,arrm1.slice(216,240).map(Number)),
              ]
            },
            {
              name: 'Temperatures',
              borderWidth: 2,
              borderColor:'red',
              pointWidth:30,
              color: 'rgba(255, 255, 255, 0)',

              data: [
                jStat.tci( 0.1, 0.05,arrm2.slice(0,24).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(24,48).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(48,72).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(72,96).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(96,120).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(120,144).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(144,168).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(168,192).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(192,216).map(Number)),
                jStat.tci( 0.1, 0.05,arrm2.slice(216,240).map(Number)),


              ]
            }]
        }

      }
    },
    created(){
      this.initOrderCountDate();
      this.getData();
    },
    methods:{
/*通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，<br>
              里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。<br>
              该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。<br>
              也可以返回一个键名为rowspan和colspan的对象。*/
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 12=== 0) {
            return {
              rowspan: 12,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
        if(columnIndex===1){
          if(rowIndex%3===0){
            return {
              rowspan: 3,
              colspan: 1
            };
          }else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
        /*if(columnIndex===2){
          if(rowIndex%3===0){
            return {
              rowspan: 1,
              colspan: 1
            };
          }else {
            return {
              rowspan: 0,
              colspan: 4
            };
          }
        }*/
        },
      handleDateChange(){
        this.getData();
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
      }
    }
  }
</script>

<style scoped>
  .app-container {
    margin-top: 40px;
    margin-right: 120px;
  }

  .address-layout {
  }

  .total-layout {
    margin-top: 20px;
  }

  .total-frame {
    border: 1px solid #DCDFE6;
    padding: 20px;
    height: 100px;
  }

  .total-icon {
    color: #409EFF;
    width: 60px;
    height: 60px;
  }

  .total-title {
    position: relative;
    font-size: 16px;
    color: #909399;
    left: 70px;
    top: -50px;
  }

  .total-value {
    position: relative;
    font-size: 18px;
    color: #606266;
    left: 70px;
    top: -40px;
  }

  .un-handle-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }

  .layout-title {
    color: #606266;
    padding: 15px 20px;
    background: #F2F6FC;
    font-weight: bold;
  }

  .un-handle-content {
    padding: 20px 40px;
  }

  .un-handle-item {
    border-bottom: 1px solid #EBEEF5;
    padding: 10px;
  }

  .overview-layout {
    margin-top: 20px;
  }

  .overview-item-value {
    font-size: 24px;
    text-align: center;
  }

  .overview-item-title {
    margin-top: 10px;
    text-align: center;
  }

  .out-border {
    border: 1px solid #DCDFE6;
  }

  .statistics-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }
</style>
