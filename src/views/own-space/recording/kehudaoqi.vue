<style lang="less">
.recordingimg {
    .ivu-form-inline .ivu-form-item {
        margin: 8px 0;
    }
    .ivu-card {
        margin: 0 0 15px 0
    }
    .pages {
        float: right;
        margin: 15px 5px 5px 0;
    }
    .selectsNmae {
        .ivu-select-not-found {
            display: none
        }
    }
    .lookimgma {
        position: relative;
        padding: 5px;
        width: 150px;
        margin: 5px auto;
        border: 1px solid #eee;
        img {
            width: 100%;
            height: auto;
        }
    }
    .addloussdas {
        padding:5px;
        img {
            width: 100%;
            height: auto;
        }
        ul {
            list-style-type: none;
            li {
                width: 135px;
                vertical-align: top;
                display: inline-block;
                margin: 5px;
                padding: 5px;
                position: inherit;
                .footer {
                    font-size: 12px; // text-align: center;
                }
            }
        }
    }
}
</style>
<template>
    <div class="recordingimg cf">
        <pre>{{HouseTableData}}</pre>
        <Card class="padd10">
           <p slot="title">
                <Icon type="gear-a"></Icon>
                客户到期查询
            </p>
            <div class="cf">
                <div class="ovhidese">
                    <Table class='tablese' :loading="loadings" width="100%" :columns="HouseTable" :data="HouseTableData" border highlight-row></Table>
                    <div>
                        <Page class="cf pages" :total="totals" :page-size="pageSize" @on-change="changepage" show-total show-elevator></Page>
                    </div>
                </div>
            </div>
            <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'recordingimg',
    data() {
        return {
            totals: 50, //总页数
            totalss: 50, //总页数
            pageSize: 20, //每页显示
            loadings: true,
            spinShow: false,
            cityList: [{
                value: '错误',
                label: '错误'
            }],
            optionsName: [], //房源名称input
            HouseTable: [
                    {
                     title: 'ID',
                     key: 'clid'
                    },
                    {
                     title: '人员',
                     key: 'master'
                    },
                    {
                     title: '到期时间',
                     key: 'atum'
                    },
                    {
                        title: '操作',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                             let query = { deal_id: params.row.clid};
                                                this.$router.push({
                                                 name: 'clientadd_look',
                                                 query: query
                                                });
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.lookyes(params.row.clid)
                                        }
                                    }
                                }, '通过')
                            ]);
                        }
                    }
                ],
            HouseTableData: [],
        }
    },
    mounted() {
        this.showHidese(1);
    },
    methods: {
        showHidese(e) {
            var _this = this;
            //房源有条件
            _this.loadings = true;
             axios({
                    method: 'post',
                    url: '/api/fitnlist?page=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') }
                })
                .then(function(res) {
                    _this.loadings = false;
                    console.log(res)
                    _this.HouseTableData = res.data.message.data; //列表数据
                    _this.pageSize = res.data.message.pageSize; //每页显示
                    _this.totals = res.data.message.totals; //总数
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
        },
        changepage(page) {
            this.loadings = true;
            this.showHidese(page);
        },
        lookyes(e){
          console.log(e)
          let _this = this;
          _this.spinShow = true
             axios({
                    method: 'post',
                    url: '/api/fitnlistact',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya')},
                    data:{
                      clid:e
                    }
                })
                .then(function(res) {
                    _this.spinShow = false
                    _this.showHidese(1);
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
        }

    }
};
</script>