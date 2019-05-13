<template>


            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple u-footer-logo">中央气象台</div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-purple u-footer-text">Copyright 2005-2018 QiXiang.COM All rights
                        reserved. 京ICP证060517号/京ICP备09080754号 京公网安备11010802020576号
                    </div>
                </el-col>
            </el-row>


</template>

<script>
    export default {
        name: 'NavFooter',
        components: {}
    }
</script>
<style lang="less">
    .el-footer {
      position: fixed;
        text-align: center;
         background-color: #000000;
         color: #9b9b9b;
         width: 100%;
         height: 60px !important;
         line-height: 35px;
         padding-top: 20px !important;
         padding-bottom: 20px !important;
         bottom: 0px;
        .u-footer-logo {
            text-align: right;
        }

        .u-footer-text {
            font-size: 12px;
        }
        .u-logo{
            width: 40px;
            height: 40px;
            display: inline-block;
            background: url('../../../assets/images/gif_404.gif');
            vertical-align: middle;
            margin-right: 20px;
        }
    }
</style>
