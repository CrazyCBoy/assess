<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>选择数据
        </span>

        <el-button
          style="float: right"
          @click="handleSearchList()"
          type="primary"
          size="small">
          查询结果
        </el-button>
        <el-button
          style="float: right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="日期：">
            <el-cascader
              clearable
              v-model="selectProductCateValue"
              :options="productCateOptions">
            </el-cascader>
          </el-form-item>
          <el-form-item label="小时：">
            <el-select v-model="listQuery.verifyStatus" placeholder="全部" clearable>
              <el-option
                v-for="item in verifyStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SCALE：">
            <el-select v-model="listQuery.publishStatus" placeholder="全部" clearable>
              <el-option
                v-for="item in publishStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>
      </div>
    </el-card>

    <div class="table-container">
      <el-card class="operate-container" shadow="never">
        <i class="el-icon-tickets"></i>
        <span>数据列表Three</span>
        <el-button
          class="btn-add"
          size="mini">
          添加
        </el-button>
      </el-card>
    </div>
  </div>
</template>
<script>

  const defaultListQuery = {
    keyword: null,
    pageNum: 1,
    pageSize: 5,
    publishStatus: null,
    verifyStatus: null,
    productSn: null,
    productCategoryId: null,
    brandId: null
  };
  export default {
    name: "productTF",
    data() {
      return {
        editSkuInfo:{
          dialogVisible:false,
          productId:null,
          productSn:'',
          productAttributeCategoryId:null,
          stockList:[],
          productAttr:[],
          keyword:null
        },
        operateType: null,
        listQuery: Object.assign({}, defaultListQuery),
        list: null,
        total: null,
        listLoading: true,
        selectProductCateValue: null,
        multipleSelection: [],
        productCateOptions: [],
        brandOptions: [],
        publishStatusOptions: [{
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
          label: 'SCALE(17X)'
        },{
          value: 5,
          label: 'SCALE(33X)'
        },{
          value: 6,
          label: 'SCALE(65X)'
        }],
        verifyStatusOptions: [{
          value: 0,
          label: '1hour'
        }, {
          value: 1,
          label: '2hour'
        }, {
          value: 2,
          label: '3hour'
        }, {
          value: 3,
          label: '4hour'
        }, {
          value: 4,
          label: '5hour'
        }, {
          value: 5,
          label: '6hour'
        }]
      }
    },
  }
</script>
<style></style>


