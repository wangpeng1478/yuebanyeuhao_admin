<style lang="less">
.Tabss {
    .ivu-card-body {
        padding: 5px;
        padding-bottom: 0;
        padding-top: 0;
    }
    .ivu-tabs-bar {
        margin: 0;
        border-bottom: 1px solid #ffffff;
    }
    .ivu-tabs-nav {
        padding: 5px 0;
    }
    .righeS {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        height: 100%;
        line-height: 46px;
        .funnel {
            cursor: pointer;
            &:hover {
                opacity: 0.7;
            }
        }
        .sessf {
            margin: 0 20px;
        }
        .ons {
            color: #2d8cf0;
        }
    }
}

.Cardfun {
    -webkit-animation: showhide .3s linear;
    animation: showhide .3s linear;
    .ivu-card-body {
        padding: 0;
        .ivu-form-item {
            margin-bottom: 0;
            margin: 8px 0;
        }
    }
}

@-webkit-keyframes showhide {
    from {
        display: none;
        opacity: .3;
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px)
    }

    to {
        display: block;
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes showhide {
    from {
        display: none;
        opacity: .3;
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px)
    }

    to {
        display: block;
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

.Deal {
    .ivu-card {
        margin-bottom: 10px;
    }
    .pages {
        text-align: right;
        margin: 15px 0;
        padding-bottom: 100px;
    }
    .list {
        list-style-type: none;
        .li {
            border: 1px solid #e6e6e6;
            border-bottom: none;
            transition: all 0.3s ease-out;
            padding: 10px;
            &:hover {
                background-color: #f2fafe;
            }
            &:last-child {
                border-bottom: 1px solid #e6e6e6;
            }
            .li1 {
                padding: 5px;
                h3 {
                    margin: 5px 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    a {
                        color: #495060;
                    }
                }
                span {
                    margin: 3px 0;
                    padding-left: 10px;
                }
            }
            .li2 {
                span {
                    padding: 5px;
                    line-height: 70px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding-left: 15px;
                }
            }
            .li3 {
                padding: 5px;
                padding-right: 20px;
                height: 100%;
                text-align: right;
                padding-top: 10px;
                .buttose {
                    color: #dd514c;
                    background-color: transparent;
                    background-image: none;
                    border-color: #dd514c;
                    padding: 5px 10px;
                    font-size: 14px;
                    cursor: pointer;
                    border: 1px solid #dd514c;
                    border-radius: 6px;
                }
                .buttoseyes {
                    color: #c4c4c4;
                    border-color: #c4c4c4;
                }
                .buttoseyese {
                    color: #FF9800;
                    border-color: #FF9800;
                }
                .time {
                    display: block;
                    margin-top: 10px;
                }
                .ivu-timeline-item-content {
                    padding: 1px 1px 0 24px
                }
            }
            .reooveButton{
        	display:none;
        }
        &:hover .reooveButton{
        	display:block;
        }
        }
        
    }

}
</style>
<template>
    <div class="Deal">
        <pre>{{auth.user01}}</pre>
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
            <Card class='Tabss'>
                <Tabs value="1" :animated="false" @on-click="TabsVis">
                    <TabPane name="0" label="全部报告"></TabPane>
                    <TabPane name="1" label="待确认"></TabPane>
                    <TabPane name="2" label="已完成"></TabPane>
                </Tabs>
                <div class="righeS">
                    <span @click="funnels" :class="{ ons: !funnelss }" class="funnel"><Icon type="funnel"></Icon> 筛选</span>
                    <Button @click='addDeal' class='sessf' type="primary" shape="circle" icon="plus">新增成交报告</Button>
                </div>
            </Card>
            <Card v-if='!funnelss' class="Cardfun">
                <Form :model="searchFole" label-position="right" :label-width="100" inline>
                    <FormItem label="部门/人员">
                        <Cascader class="caca" :data="cacaDer" v-model="searchFole.cacaDer" placeholder="部门/人员" change-on-select></Cascader>
                    </FormItem>
                    <FormItem label="时间">
                        <DatePicker v-model="searchFole.time" class="cacas" :options="options2" type="daterange" placement="bottom-end" placeholder="时间"></DatePicker>
                    </FormItem>
                </Form>
            </Card>
            </Col>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
            <Card class='cf'>
                <p slot="title">
                    <Icon type="ios-list-outline"></Icon>
                    成交报告列表
                </p>
                <a href="#" slot="extra" @click.prevent="changeLimit(1)">
                    <Icon type="ios-loop-strong"></Icon>
                    刷新
                </a>
                <ul class="list cf">
                    <li class="li cf" v-for="item in Sdatd" :key="item.length">
                        <Col class='li1 cf' :xs="24" :sm="12" :md="12" :lg="12">
                        <h3>
                     <a :title='item.name' href="#" @click.prevent="Dealkan(item.id)" >{{item.name}}</a>
                     </h3>
                        <span :title='item.id'>ID:{{item.id}}</span>
                        </Col>
                        <Col class='cf' :xs="12" :sm="6" :md="6" :lg="6">
                          <Poptip
					        confirm
					        :title="'确定删除'+item.name"
					        @on-ok="reoove(item.id)">
					        <Button class="reooveButton" type="error" size="small" v-if="auth.user01">删除</Button>
					    </Poptip>
                        </Col>
                        <Col class='li3 cf' :xs="12" :sm="6" :md="6" :lg="6">
                        <Poptip trigger="hover" placement="left-start">
                            <!-- <span :class="{ buttoseyes: !item.ok }" class='buttose'>{{item.ok ?'待确认':'已完成'}}</span> -->
                            <span :class="{ buttoseyes: item.ok =='已完成',buttoseyese: item.ok =='请修改' }" class='buttose'>{{item.ok}}</span>
                            <div style="text-align:center" slot="content">
                                <Timeline>
                                    <TimelineItem :color="item.Timeline[0] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[0] ?'color:#dd514c':'color:#c4c4c4'">业务合作人确认</span>
                                    </TimelineItem>
                                    <TimelineItem :color="item.Timeline[1] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[1] ?'color:#dd514c':'color:#c4c4c4'">房源归属人确认</span>
                                    </TimelineItem>
                                    <TimelineItem :color="item.Timeline[2] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[2] ?'color:#dd514c':'color:#c4c4c4'">照片归属人确认</span>
                                    </TimelineItem>
                                    <TimelineItem :color="item.Timeline[3] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[3] ?'color:#dd514c':'color:#c4c4c4'">经理确认</span>
                                    </TimelineItem>
                                    <TimelineItem :color="item.Timeline[4] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[4] ?'color:#dd514c':'color:#c4c4c4'">行政确认</span>
                                    </TimelineItem>
                                    <TimelineItem :color="item.Timeline[5] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[5] ?'color:#dd514c':'color:#c4c4c4'">财务确认</span>
                                    </TimelineItem>
                                    <TimelineItem :color="item.Timeline[6] ?'#dd514c':'#c4c4c4'">
                                        <span :style="item.Timeline[6] ?'color:#dd514c':'color:#c4c4c4'">总经理确认</span>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </Poptip>
                        <p class='time' :title="item.time">{{item.time}}</p>
                        </Col>
                    </li>
                    <li v-if="Sdatd.length ==0" style="text-align:center"><h2>没有找到</h2></li>
                </ul>
                <Page class="cf pages" :total="totals" :page-size="pageSize" @on-change="changepage" show-total show-elevator></Page>
                <Spin size="large" fix v-if="loading"></Spin>
            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'Deal',
    data() {
        return {
            time: new Date().toLocaleString(),
            auth:Cookies.getJSON('auth'),
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
            TabsData: 0,
            totals: 0,
            pageSize: 0,
            searchFole: {
                TabPane: '1',
                cacaDer: [],
                time: ["", ""]
            },
            cacaDer: [],
            funnelss: true,
            loading: true,
            Sdatd: []
        };
    },
    mounted() {
        this.adminname();
        this.adminname();
        this.changeLimit(1);
    },
    methods: {
        adminname() {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/adminname2',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    if (res.data.statusx == 200) {
                        _this.cacaDer = res.data.message
                    } else {
                        _this.$Notice.error({ title: '人员错误' });
                    }
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '人员错误' });
                })
        },
        TabsVis(e) {
            this.searchFole.TabPane = e
        },
        funnels() {
            this.funnelss = !this.funnelss
        },
        changeLimit(e) {
             var _this = this;
              _this.loading = true
               axios({
                    method: 'post',
                    url: '/api/deallist?page='+e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data:{
                        jo:_this.searchFole
                    }
                })
                .then(function(res) {
                    // console.log(res.data.message.data)
                     _this.Sdatd = res.data.message.data
                     _this.totals = res.data.message.totals
                     _this.pageSize = res.data.message.pageSize
                     _this.loading = false
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '类表错误' });
                })


        },
        changepage(page) {
            var ele = document.getElementById('singlepagecon');
            ele.scrollTop = 0;
            this.changeLimit(page);
        },
        addDeal(){
            this.$router.push({
                name: 'Deal_add'
            });
        },
        Dealkan(e) {
        let query = { deal_id: e };
        this.$router.push({
            name: 'Deal_Looke',
            query: query
        });
        },
        reoove(e){
          console.log(e)
          var _this = this;
              _this.loading = true
               axios({
                    method: 'post',
                    url: '/api/deid1del?id='+e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') }
                })
                .then(function(res) {
                     _this.loading = false
                     _this.changeLimit(1);
                     _this.$Message.success('删除成功');
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '类表错误' });
                })
        }
    },
    watch: {
        searchFole: {
            handler: function(val, oldVal) {
                this.changeLimit(1);
            },
            deep: true
        },
    }
};
</script>