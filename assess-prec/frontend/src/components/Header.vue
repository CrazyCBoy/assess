<template>

        <el-header>
            <el-row>
                <el-col :span="12" :xs="5" :sm="8">
                    <div class="grid-content bg-purple"><span class='u-logo'></span>中央气象台</div>
                </el-col>
                <el-col :span="12" :xs="19" :sm="16">
                    <div class="grid-content bg-purple-light">
                        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
                                 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

                            <el-menu-item index="5" v-if="!isAuthenticated" >
                                <el-button type="info" @click="entry">登录</el-button>
                            </el-menu-item>
                            <el-menu-item v-if="isAuthenticated" index="4" @click='myMessage'>我的账号</el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
            </el-row>
        </el-header>
</template>

<script>
    export default {
        inject: ['reload'],
        name: 'NavHeader',

        components: {},
        computed: {
            isAuthenticated() {
                return this.$store.state.user.authenticated;
            }
        },
        data() {

            return {
                activeIndex: '1',
                activeIndex2: '1',

            }
        },

        methods: {

            toIndex() {
                this.$router.push('/');
            },
            addData() {
                this.$router.push('/dataTab');
            },
            toPrice() {
                this.$router.push('/price');
            },
            register() {
                this.$router.push({path: '/api/register'})
            },
            entry() {
                this.$router.push({path: '/api/login'})
            },
            myMessage() {
                this.$router.push({path: '/myMessage'})
            },
            quit(){
                this.$store
                    .dispatch("FedLogOut").then(() => {
                    /*this.$router.push(NewPage);
                    this.$router.go(-1);*/
                    this.$router.go(0)
                    //this.reload();
                    this.$router.push({ path: "/api/login" });
                    })
            }


        },
    }


</script>
<style lang="less">
    .el-header {
        text-align: center;
        line-height: 60px;
        background-color: #545c64;
        color: #fff;

        li {
            width: 15%;
        }

        .el-menu.el-menu--horizontal {
            border-bottom: none;
        }

        .u-logo {
            width: 40px;
            height: 40px;
            display: inline-block;
            background: url('../../../assets/images/gif_404.gif');
            vertical-align: middle;
            margin-right: 20px;
        }
    }
</style>
