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
        <pre>{{screens}}</pre>
        <Card class='sere'>
            <p slot="title">
                <Icon type="gear-a"></Icon>
                操作日志
            </p>
            <Form :model="screens" :label-width="60">
                <Row>
                    <Col :xs="24" :sm="12" :md="12" :lg="8">
                      <FormItem label="时间">
                          <DatePicker style="width:100%" v-model="screens.time" type="daterange" :options="options2"></DatePicker>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="8">
                      <FormItem label="归属人">
                          <Select v-model="screens.luru" filterable clearable>
                              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                          </Select>
                      </FormItem>
                    </Col>
                     <Col :xs="24" :sm="12" :md="12" :lg="8">
                      <FormItem label="类型">
                          <Select v-model="screens.type" filterable clearable>
                              <Option v-for="item in cityListt" :value="item.value" :key="item.value">{{ item.label }}</Option>
                          </Select>
                      </FormItem>
                    </Col>
                    
                </Row>
            <!--     <Row>
                  <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align:center">
                      <FormItem>
                        <Button size="small" @click='screenss' type="primary" icon="ios-search">查询</Button>
                        <Button size="small" @click='reson' type="ghost" icon="reply">重置</Button>
                      </FormItem>
                  </Col>
                </Row> -->
               
            </Form>
        </Card>
        <Card class="padd10">
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
            cityListt: [
            {
                value: '跟进房源',
                label: '跟进房源'
            },{
                value: '编辑房源',
                label: '编辑房源'
            },{
                value: '新增房源',
                label: '新增房源'
            },
            ],
            optionsName: [], //房源名称input
            options2: {
                shortcuts: [{
                        text: '一周',
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            return [start, end];
                        }
                    },
                    {
                        text: '一个月',
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            return [start, end];
                        }
                    },
                    {
                        text: '三个月',
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            return [start, end];
                        }
                    }
                ]
            },
            screens: {
                time: [],
                luru: '' //人
            },
            HouseTable: [
                    {
                     title: '姓名',
                     key: 'master'
                    },
                    {
                     title: '时间',
                     key: 'updated_at'
                    },
                    {
                     title: '操作',
                     key: 'rema'
                    },
                ],
            HouseTableData: [],
        }
    },
    mounted() {
        this.adminname();
        // this.ajaxName(); //大楼名字
        this.showHidese(1);
    },
    methods: {
        adminname() {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/adminname',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    let data = res.data.message;
                    _this.metrosda = data;
                    let metros = [];
                    for (var i in data) {
                        let nea = {
                            value: data[i],
                            label: data[i]
                        }
                        metros.push(nea)
                    }
                    _this.cityList = metros;
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '人员错误' });
                })
        },
        showHidese(e) {
            var _this = this;
            //房源有条件
            _this.loadings = true;
            axios({
                    method: 'post',
                    url: '/api/jourlist?page=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data: {
                        jo: _this.screens
                    }
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

    },
    watch: {
        screens: {
            handler: function(val, oldVal) {
               this.showHidese(1)
            },
            deep: true
        },
    }
};
</script>