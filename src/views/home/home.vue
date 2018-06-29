<style lang="less" scoped>
 .home-main{
    .body_s{
      min-height: 500px;  
    }
    .Tabs{
        .ivu-tabs-tabpane{
            background: #f0f0f0;
            padding: 10px;
        }
    }
 }
</style>
<template>

    <div class="home-main">
        <Row :gutter="10" class="body_s">
          <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                <Card>
                    <Row>
                      <Col :xs="24" :sm="24" :md="24" :lg="24">
                       <Tabs value="0" :animated="false" class="Tabs" @on-click="TabsVis">
                          <TabPane label="房源跟进" name="0">
                              <visite-volume0 class="cf" v-if="indexs ==0"></visite-volume0>
                          </TabPane>
                          <TabPane label="企业名录" name="1">
                              <visite-volume1 class="cf" v-if="indexs ==1"></visite-volume1>
                          </TabPane>
                          <TabPane label="工作提醒" name="2">
                              <visite-volume2 class="cf" v-if="indexs ==2"></visite-volume2>
                          </TabPane>
                          <TabPane label="工作总结" name="3">
                              <visite-volume3 class="cf" v-if="indexs ==3"></visite-volume3>
                          </TabPane>
                       </Tabs>
                      </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        <!-- tis -->
         <Modal v-model="remind" width="600" :closable="false" :mask-closable="false">
            <p slot="header">
                <Icon type="person-stalker"></Icon>
                <span>客户跟进提醒 - {{time}}</span>
            </p>
            <div style="conse">
               <Table height="400" :columns="columns" :data="data"></Table>
            </div>
            <div slot="footer">
                <Button type="dashed" @click="remind = false">暂不跟进</Button>
            </div>
        </Modal>
        <!-- tis -->
          <!-- tis -->
         <Modal v-model="remind2" width="800" :closable="false" :mask-closable="false">
            <p slot="header">
                <Icon type="person-stalker"></Icon>
                <span>提醒 - {{time}}</span>
            </p>
            <div style="conse">
               <Table size="small" height="400" :columns="columns2" :data="data2"></Table>
            </div>
            <div slot="footer">
                <Button type="dashed" @click="remind2 = false">关闭</Button>
            </div>
        </Modal>
        <!-- tis -->
    </div>
</template>
<script>
import visiteVolume0 from './components/visiteVolume0.vue';
import visiteVolume1 from './components/visiteVolume1.vue';
import visiteVolume2 from './components/visiteVolume2.vue';
import visiteVolume3 from './components/visiteVolume3.vue';
import times from './time/time.vue';
import Cookies from 'js-cookie';
import axios from 'axios'
export default {
    name: 'home',
    components: {
        visiteVolume0,
        visiteVolume1,
        visiteVolume2,
        visiteVolume3,
        times
    },
    data () {
        return {
            time: new Date().toLocaleString(),
            remind:false,
            remind2:false,
            columns:[
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '客户',
                    key: 'rema'
                },
                {
                    title: '操作',
                    width: 80,
                    fixed: 'right',
                    align: 'center',
                    render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            // this.lookke(params.row.clid)
                                            this.remind = false;
                                            let query = { deal_id: params.row.clid};
                                            this.$router.push({
                                             name: 'clientadd_look',
                                             query: query
                                            });
                                        }
                                    }
                                }, '跟进')
                            ]);
                        }
                }
            ],
            data:[],
            columns2:[
               {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '发信人',
                    width: 80,
                    key: 'addressor'
                },
                {
                    title: '时间',
                    sortable: true,
                    key: 'time'
                },
                {
                    title: '内容',
                    key: 'con'
                },
                {
                    title: '操作',
                    width: 90,
                    fixed: 'right',
                    align: 'center',
                    render: (h, params) => {
                        let ju = () =>{
                           if (params.row.look) {
                             return '已读'
                            }else{
                             return '标为已读'
                            }
                          }
                          let ds = params.row.look ? true : false
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        disabled:ds
                                    },
                                    on: {
                                        click: () => {
                                           // console.log(params.row.id)
                                           this.remind2 = false;
                                           params.row.look = true
                                           this.lookese(params.row.id)
                                        }
                                    }
                                }, ju())
                            ]);
                        }
                }
            ],
            data2:[],
            indexs:0,
            count: {
                createUser: 0,
                visit: 0,
                collection: 0,
                transfer: 0
            }
        };
    },
    mounted: function(){
       this.$Message.destroy()//关闭
       this.$Message.success({content: `欢迎登录悦办越好`,duration: 5});
       this.times();
       this.times2();
    },
    methods: {
        times (){
            let _this = this;
               axios({
                    method: 'post',
                    url: '/api/warnpopup',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') }
                })
                .then(function(res) {
                   console.log(res)
                   if (res.data.message.power) {
                       _this.$Notice.info({
                            title: '客户提醒',
                            desc: '有'+res.data.message.data.length+"条客户 需要跟进"
                        });
                   }else{
                      _this.$Notice.info({
                            title: '客户提醒',
                            desc: "没有客户需要跟进"
                        });
                   }
                   // if (res.data.message.power) {
                   //   if(Cookies.set('remind') == undefined){
                   //      Cookies.set('remind', 0,{ expires: 0.25 }); //6个小时
                   //     _this.remind = res.data.message.power
                   //  }
                   // }
                   _this.remind = res.data.message.power
                   _this.data = res.data.message.data
                   _this.$store.commit('setMessageCount', res.data.message.totals); 
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '客户提醒错误' });
                })
        },
        times2(){
           let _this = this;
           axios({
                method: 'post',
                url: '/api/warncapt',
                headers: { Authorization: 'Bearer ' + Cookies.set('keya') }
            })
            .then(function(res) {
              // console.log(res.data.message.power)
              // console.log(res.data.message.data)
              _this.remind2 = res.data.message.power
              _this.data2 = res.data.message.data
            })
            .catch(function(err) {
                _this.$Notice.error({ title: '提醒错误' });
            })
        },
        lookese(e){
           let _this = this;
           axios({
                method: 'post',
                url: '/api/warndel?id='+e,
                headers: { Authorization: 'Bearer ' + Cookies.set('keya') }
            })
            .then(function(res) {
              // console.log(res)
            })
            .catch(function(err) {
                _this.$Notice.error({ title: '提醒错误' });
            })
        },
        TabsVis(e){
          this.indexs= e;
        },
    }
};
</script>
