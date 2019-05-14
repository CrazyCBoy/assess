<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>选择数据</span>
        <el-button style="float:right" type="primary" @click="confirm()" size="small">查询数据</el-button>
        <el-button style="float:right;margin-right: 15px" @click="handleResetSearch()" size="small">重置</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listData" size="small" label-width="140px" ref="listData">
          <el-form-item label="选择日期：">
            <el-date-picker
              class="input-width"
              v-model="listData.chooseDay"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="SCALE：">
            <el-select v-model="listData.chooseScale" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in scaleOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择小时：">
            <el-select v-model="listData.chooseHours" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in hoursOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>

            <el-button @click="test('listData')" >查询aaaaaaaaa</el-button>

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
                <ve-line
                  :data="chartData"
                  :legend-visible="false"
                  :loading="loading"
                  :data-empty="dataEmpty"
                  :settings="chartSettings"></ve-line>
              </div>
            </div>
          </el-col>
        </el-row>
        <div >

        </div>
      </div>

    </el-card>

    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listData.pageNum"
        :page-size="listData.pageSize"
        :page-sizes="[5,10,15]"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import {mapState, mapActions} from "vuex";

  /*const defaultListQuery = {
    pageNum: 1,
    pageSize: 10,
    chooseScale: null,
    chooseDate: null,
    chooseHours: null,
    chooseDay: null,
  };*/

  export default {
    name: "spatialhourly",

    data() {
      return {
        orderCountDate: '',
        chartSettings: {
          xAxisType: 'time',
          area:true,
          axisSite: { right: ['orderAmount']},
          labelMap: {'orderCount': '订单数量', 'orderAmount': '订单金额'}},
        chartData: {
          columns: ['date', 'orderCount','orderAmount'],
          rows: [
            {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
            {date: '2018-11-02', orderCount: 20, orderAmount: 9999},
            {date: '2018-11-03', orderCount: 33, orderAmount: 0},
            {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
          ]
        },
        loading: false,
        dataEmpty: false,
        listData: {
          chooseDay: "",
          chooseScale: "",
          chooseHours: "",
        },
        total: null,

        scaleOptions: [
          {
            value: 0,
            label: 'mean'
          },{
            value: 1,
            label: 'SCALE(3X)'
          }, {
            value: 2,
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
        hoursOptions: [
          {
            value: 0,
            label: '1hrs'
          }, {
            value: 1,
            label: '2hrs'
          }, {
            value: 2,
            label: '3hrs'
          }, {
            value: 3,
            label: '4hrs'
          }, {
            value: 4,
            label: '5hrs'
          }, {
            value: 5,
            label: '6hrs'
          }, {
            value: 6,
            label: '7hrs'
          }, {
            value: 7,
            label: '8hrs'
          }, {
            value: 8,
            label: '9hrs'
          }, {
            value: 9,
            label: '10hrs'
          }, {
            value: 10,
            label: '11hrs'
          }, {
            value: 11,
            label: '12hrs'
          }, {
            value: 12,
            label: '13hrs'
          }, {
            value: 13,
            label: '14hrs'
          }, {
            value: 14,
            label: '15hrs'
          }, {
            value: 15,
            label: '16hrs'
          }, {
            value: 16,
            label: '17hrs'
          }, {
            value: 17,
            label: '18hrs'
          }, {
            value: 18,
            label: '19hrs'
          }, {
            value: 19,
            label: '20hrs'
          }, {
            value: 20,
            label: '21hrs'
          }, {
            value: 21,
            label: '22hrs'
          }, {
            value: 22,
            label: '23hrs'
          }, {
            value: 23,
            label: '24hrs'
          }, {
            value: 24,
            label: '25hrs'
          }, {
            value: 25,
            label: '26hrs'
          }, {
            value: 26,
            label: '27hrs'
          }, {
            value: 27,
            label: '28hrs'
          }, {
            value: 28,
            label: '29hrs'
          }, {
            value: 29,
            label: '30hrs'
          }, {
            value: 30,
            label: '31hrs'
          }, {
            value: 31,
            label: '32hrs'
          }, {
            value: 32,
            label: '33hrs'
          }, {
            value: 33,
            label: '34hrs'
          }, {
            value: 34,
            label: '35hrs'
          }, {
            value: 35,
            label: '36hrs'
          }
        ],
      }
    },
    created() {

      Object.assign(this.listData, this.OptionValue);
    },
    computed: {
      ...mapState({
        OptionValue: state => state.chooseData
      })
    },
    methods: {
      test(listData){
          this.$refs[listData].validate(valid => {

          if (valid) {
            console.log("123")

            this.$store.dispatch("defaultmeanData", this.listData)
              .then(() => {
                // this.loading = false;
                this.$router.push({path: "/"});
              })
              .catch(() => {
                this.loading = false;
              });
            // console.log("success")
          } else {
            // console.log("error submit!!");
            return false;
          }
        });
      },

     /* ...mapActions({
        defaultmeanData:"defaultmeanData",
      }),*/
      confirm(){
        this.$axios.get(
          '/home',{
            params:{
              chooseDate:"",
              chooseScale:"",
              chooseHours:""
            }
          }
        ).then(successResponse => {
            if(successResponse.data.code ===200){
              this.$route.replace({path:'/index'})
            }else {
              this.$route.replace({path:'/home'})
            }
          }).catch(failResponse => {
        })
    },

       /* this.$refs[listData].validate(valid => {
            this.$store
              .dispatch("defaultmeanData","abcdefghijklmn")
              .then(() => {
              })
              .catch(() => {
                this.loading = false;
              })
        });/*
      getData(listData){
        //拿到初始数据并展示
        SpatiaData(this.listData).then(response => {
          this.chooseDate= response.data.chooseDate;
          this.chooseScale= response.data.chooseScale;
          this.chooseHours= response.data.chooseHours;
          this.chooseData= response.data.chooseData;

        });
      },*/

      handleDateChange(){
        this.getData();
      },

      handleResetSearch() {
        this.listData = Object.assign({}, OptionValue);
      },
      handleSearchList() {
        this.listData.pageNum = 1;
      },
      handleSizeChange(val){
        this.listData.pageNum = 1;
        this.listData.pageSize = val;
      },
      handleCurrentChange(val){
        this.listData.pageNum = val;
      },
    }
  }
</script>
<style scoped>
  .input-width {
    width: 203px;
  }
</style>


