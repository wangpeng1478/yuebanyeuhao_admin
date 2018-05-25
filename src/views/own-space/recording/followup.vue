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
                <Icon type="image"></Icon>
                跟进记录列表
            </p>
            <Form :model="screens" :label-width="80">
                <Row>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                      <FormItem label="时间" style="margin:5px 0;">
                          <DatePicker style="width:100%" v-model="screens.time" type="daterange" :options="options2"></DatePicker>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                      <FormItem label="归属人" style="margin:5px 0;">
                          <Cascader class="caca" :data="cityList" v-model="screens.cacaDer" placeholder="部门/人员" change-on-select></Cascader>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="15">
                      <FormItem label="类型" style="margin:5px 0;">
                            <RadioGroup v-model="screens.type" type="button">
                                <Radio label="全部"></Radio>
                                <Radio label="房源跟进"></Radio>
                                <Radio label="客户跟进"></Radio>
                            </RadioGroup>
                      </FormItem>
                    </Col>
                    
                </Row>
            </Form>
        </Card>
        <Card class='titims'>
            <div class="cf">
                <div class="rigths">共:<b>{{totalss}} </b>张</div>
            </div>
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
                
            },
            HouseTable: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '门牌号',
                        key: 'men'
                    },
                    {
                        title: '跟进人',
                        key: 'ren'
                    },
                    {
                        title: '跟进时间',
                        key: 'time'
                    },
                    {
                        title: '内容',
                        key: 'con'
                    },
            ],
            HouseTableData: [],
        }
    },
    mounted() {
        this.adminname();
        this.showHidese(1);
    },
    methods: {
         adminname(){
           let _this = this;
            axios({
                method:'post',
                url:'/api/adminname2',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              if (res.data.statusx == 200) {
               _this.cityList = res.data.message
              }else{
                _this.$Notice.error({title: '人员错误'});
              }
            })
            .catch(function (err) {
                _this.$Notice.error({title: '人员错误'});
            })
      },
        showHidese(e) {
            var _this = this;
            //房源有条件
            _this.loadings = true;
            axios({
                    method: 'post',
                    url: '/api/imglist?page=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data: {
                        jo: _this.screens
                    }
                })
                .then(function(res) {
                    _this.loadings = false;
                    // console.log(res)
                    // _this.HouseTableData = res.data.message.data; //列表数据
                    // _this.pageSize = res.data.message.pageSize; //每页显示
                    // _this.totals = res.data.message.totals; //总数
                    // _this.totalss = res.data.message.totals2
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