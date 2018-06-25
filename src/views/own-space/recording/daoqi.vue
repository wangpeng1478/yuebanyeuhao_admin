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
                房源到期查询
            </p>
            <div class="cf">
                <div class="ovhidese">
                    <Table class='tablese' :loading="loadings" width="100%" :columns="HouseTable" :data="HouseTableData" border highlight-row></Table>
                    <div>
                        <Page class="cf pages" :total="totals" :page-size="pageSize" @on-change="changepage" show-total show-elevator></Page>
                    </div>
                </div>
            </div>
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
            cityList: [{
                value: '错误',
                label: '错误'
            }],
            optionsName: [], //房源名称input
            HouseTable: [
                    {
                     title: '名字',
                     key: 'name'
                    },
                    {
                     title: '人员',
                     key: 'master'
                    },
                    {
                     title: '时间',
                     key: 'time'
                    },
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
                    url: '/api/jour2list?page=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') }
                })
                .then(function(res) {
                    _this.loadings = false;
                    // console.log(res)
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

    }
};
</script>