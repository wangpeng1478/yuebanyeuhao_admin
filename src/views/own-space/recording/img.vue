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
                照片列表
            </p>
            <Form :model="screens" :label-width="60">
                <Row>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                      <FormItem label="名称">
                          <Select v-model="screens.name" class="selectsNmae" filterable clearable remote :remote-method="remoteMethod" placeholder='请搜索楼盘和共享办公'>
                              <Option v-for="(option, index) in optionsName" :value="option.value" :key="index">{{option.label}}</Option>
                          </Select>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                      <FormItem label="时间">
                          <DatePicker style="width:100%" v-model="screens.time" type="daterange" :options="options2"></DatePicker>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                      <FormItem label="归属人">
                          <Select v-model="screens.luru" filterable clearable>
                              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                          </Select>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                      <FormItem label="ID">
                          <Input v-model="screens.id"></Input>
                      </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="8">
                      <FormItem label="类型">
                          <RadioGroup v-model="screens.type" type="button">
                                <Radio label="楼盘"></Radio>
                                <Radio label="房源"></Radio>
                                <Radio label="工位"></Radio>
                                <Radio label="品牌"></Radio>
                            </RadioGroup>
                      </FormItem>
                    </Col>
                    
                </Row>
                <Row>
                  <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align:center">
                      <FormItem>
                        <Button size="small" @click='screenss' type="primary" icon="ios-search">查询</Button>
                        <Button size="small" @click='reson' type="ghost" icon="reply">重置</Button>
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
                name: '', //
                time: [],
                id: '',
                type: '',
                luru: '' //人
            },
            HouseTable: [{
                    title: '路径',
                    align: 'center',
                    width: 250,
                    key: 'name',
                    render: (h, params) => {
                        return h('div', [
                            h('h2', params.row.name),
                            h('Tag', params.row.img.length + "张")
                        ]);
                    }
                },
                {
                    title: '图片',
                    render: (h, params) => {
                        return h('div', {
                            class: "addloussdas"
                        }, [
                            h('ul', params.row.img.map(item => {
                                return h('li', { class: "ivu-card ivu-card-bordered" }, [
                                    h('Tooltip', {
                                        props: {
                                            content: item.time + ' (' + item.people + ')',
                                            placement: 'top'
                                        },
                                    }, [
                                        h('img', {
                                            attrs: {
                                                src: item.url,
                                                alt: item.url,
                                                title: item.url
                                            }
                                        }, item.url),
                                        h('div', { class: "footer" }, [
                                            h('p', item.time),
                                            h('p', item.people),
                                        ]),
                                    ])


                                ])
                            }))
                        ]);
                    }
                },
            ],
            HouseTableData: [],
        }
    },
    mounted() {
        this.adminname();
        this.ajaxName(); //大楼名字
        this.showHidese(1);
    },
    methods: {
        ajaxName(e) {
            let _this = this;
            _this.loading1 = true;
            axios({
                    method: 'post',
                    url: '/api/louname2?name=',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    _this.loading1 = false;
                    let data = res.data.message;
                    // console.log(data);
                    _this.metrosda = data;
                    let metros = [];
                    for (var i in data) {
                        let nea = {
                            value: data[i],
                            label: data[i]
                        }
                        metros.push(nea)
                    }
                    _this.optionsName = metros;
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '大楼名字错误' });
                })
        },
        remoteMethod(query) {
            let _this = this;
            if (query !== '') {
                _this.loading1 = true;
                // console.log(query)
                axios({
                        method: 'post',
                        url: '/api/louname2?name=' + query,
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    })
                    .then(function(res) {
                        _this.loading1 = false;
                        if (res.data.message.length !== 0) {
                            let data = res.data.message;
                            // console.log(data);
                            _this.metrosda = data;
                            let metros = [];
                            for (var i in data) {
                                let nea = {
                                    value: data[i],
                                    label: data[i]
                                }
                                metros.push(nea)
                            }
                            _this.optionsName = metros;
                        } else {
                            _this.$Message.warning('没有找到' + query + ', 请添加楼盘');
                        }


                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '大楼名字错误' });
                    })
            } else {
                _this.ajaxName(); //大楼名字
            }
        },
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
                    url: '/api/imglist?page=' + e,
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
                    _this.totalss = res.data.message.totals2
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
        },
        changepage(page) {
             this.loadings = true;
             this.showHidese(page);
        },
        screenss() {
            this.loadings = true;
            //搜索
            this.showHidese(1);
        },
        reson() {
            this.screens = {
                name: '', //
                time: [],
                id: '',
                type: '',
                luru: '' //人
            }
            this.showHidese(1);
        },

    }
};
</script>