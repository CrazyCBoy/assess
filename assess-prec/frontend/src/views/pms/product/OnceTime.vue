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
  import {formatDate} from '@/utils/date';
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
  const DATA_FROM_BACKEND = {
    columns: ['date', 'orderCount','orderAmount'],
    rows: [
      {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
      {date: '2018-11-02', orderCount: 20, orderAmount: 9999},
      {date: '2018-11-03', orderCount: 33, orderAmount: 0},
      {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
    ]
  };
  export default {
    name: "productList",

    data() {
      return {
        orderCountDate: '',
        chartSettings: {
          xAxisType: 'time',
          area:true,
          axisSite: { right: ['orderAmount']},
          labelMap: {'orderCount': '订单数量', 'orderAmount': '订单金额'}},
        chartData: {
          columns: [],
          rows: []
        },
        loading: false,
        dataEmpty: false,
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
          }
        ],
        logisticsDialogVisible:false
      }
    },
    created() {
      this.getData();
      this.initOrderCountDate();
    },
    methods: {
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
</style>


