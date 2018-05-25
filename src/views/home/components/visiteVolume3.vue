<style lang="less">
.visiteVolume3{
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
       .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
   .sessf{
    position:absolute;
    top: 7px;
    right: 10px;
   }
   .clickbody{
     a{
        &:hover{
            text-decoration: underline;
        }
     }
     .ivu-card-body{
        position:relative;
     }
   }
   .zhuseHtml{
     width:55%;
     min-width: 700px;
     margin:0 auto;
     .hr{
       height: 1px;
       border-bottom: 1px dashed #495060;
       margin:15px 0;
    }
   }
   .carclick{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        min-height: 718px;
        overflow: auto;
        z-index: 100;
        .esfan{
            font-weight:100;
            font-size:12px;
            cursor: pointer;
            float:left;
            i{
                margin: 0 5px;
                font-size: 20px;
                vertical-align: top;
                 -webkit-transition:all 0.25s ease-out;
                 transition:all 0.25s ease-out;
            }
            &:hover{
                opacity: 0.6;
            }
        }
         .esfans{
            font-weight:100;
            font-size:12px;
            cursor: pointer;
            float:right;
            i{
                margin: 0 5px;
                font-size: 20px;
                vertical-align: top;
                 -webkit-transition:all 0.25s ease-out;
                 transition:all 0.25s ease-out;
            }
            &:hover{
                opacity: 0.6;
            }
        }
  .bg_bu{
      p{
        margin:5px 0;
       span{
        font-weight:600;
      } 
    }
    
  }


     }
     }
</style>

<template>
<div>
   <Row class="visiteVolume3">
   <pre>{{searchFole}}</pre>
   <pre>{{access}}</pre>
   <pre>{{historyData}}</pre>
       <Col :xs="24" :sm="24" :md="24" :lg="24" class="searchFoleb">
        <Card style="margin-bottom:10px">
            <Form :model="searchFole" label-position="right" :label-width="100" inline>
                <FormItem label="部门/人员" style="margin-bottom:0">
                  <Cascader class="caca" :data="followupdata" v-model="searchFole.cacaDer" placeholder="部门/人员" change-on-select></Cascader>
                </FormItem>
                <FormItem label="时间" style="margin-bottom:0">
                  <DatePicker v-model="searchFole.time" :options="options2" class="cacas" type="daterange" placement="bottom-end" placeholder="时间"></DatePicker>
                </FormItem>
             </Form>
             <Button @click="sessf" class='sessf' type="primary" shape="circle" icon="paper-airplane">发送工作总结</Button>
                <Modal v-model="modal" width="600">
                    <p slot="header" style="text-align:center">
                        <span>发送工作总结 {{time}}</span>
                    </p>
                    
                    <summ-Ary></summ-Ary>

                    <div slot="footer">
                         <Button :loading="footerlo"  @click="footerYes" type="primary">
                             <span v-if="!footerlo">发送</span>
                              <span v-else>发送中...</span>
                         </Button>
                         <Button  @click="footerNo" type="text">取消</Button>
                    </div>
                </Modal>

        </Card>
        </Col>
         <Col :xs="24" :sm="24" :md="24" :lg="24">
            <Card>
            	<p slot="title">
		            <Icon type="ios-calendar-outline"></Icon>
		            工作总结
		        </p>
		        <a href="#" slot="extra" @click.prevent="changeLimit(1)">
		            <Icon type="ios-loop-strong"></Icon>
		            刷新
		        </a>
                <div class="demo-tabs-style2">
                  <Tabs type="card" :animated="false" @on-click="TabsQ" v-if="access" style="margin-bottom: -38px;">
                    <TabPane label="发件箱">发件箱</TabPane>
                    <TabPane label="收件箱">收件箱</TabPane>
                  </Tabs>
                <div class="cf clickbody">
                    <Table height="550" 
                    :loading="loading" 
                    ref="currentRowTable" 
                    :columns="columns" 
                    :data="historyData" 
                    stripe></Table>

                    <Page class="cf pages" 
                    :total="totals" 
                    :page-size="pageSize"  
                    @on-change="changepage" 
                    show-total></Page>
               </div>
                </div>
            </Card>
             <Card v-if='clickbody' class="carclick" :bordered="false">
                        <p slot="title" style="text-align: center;"> 
                        <span @click="clickbodys" class="esfan"><Icon type="ios-arrow-left"></Icon>返回</span> 
                        <span @click="clickbodys" class="esfans"><Icon type="ios-close-empty"></Icon></span> 
                         {{zhuse}}
                        </p>
                        <p>
                         <Card class='zhuseHtml'>
                            <div class="bg_bu">
                              <p><span>发信人:</span>{{particular.addresser}}</p>
                              <!-- <p><span>收件人:</span>{{particular.recipients}}</p> -->
                              <p><span>创建日期:</span>{{particular.time}}</p>
                            </div>
                           <div class="hr"></div>
                           <div v-html='particular.content'></div>
                           <Spin v-if="spinShows" fix><span>加载中</span></Spin>
                        </Card>
                        </p>
                    </Card>
         </Col>
    </Row>
</div>
</template>

<script>
import tinymce from 'tinymce';
import dataTime from '../../../localStorage/format';
import summAry from './summary/summary.vue';

import axios from 'axios'
import Cookies from 'js-cookie';
export default {
    name: 'visiteVolume3',
    components:{
        summAry
    },
    data() {
    	return {
    		 time: new Date().toLocaleString(),
             searchFole:{
                cacaDer:[],
                time:[ "",""],
                Tabs:0
             },
              options2: {
                    shortcuts: [
                        {
                            text: '一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
             followupdata: [{
                    value: '错误',
                    label: '错误'
                }],
            loading: true,
            totals: 50,
            pageSize: 20,
            columns: [
                {
                    title: '主题',
                    key: 'zhu',
                    render: (h, params) => {
                       return h('a', {
                         on: {
                            click: () => {
                               this.zhuse = params.row.title;
                               params.row.action = '已读';
                               this.clickbody = true;
                               this.lookc(params.row.id)
                            }
                          }
                    }, params.row.title);
                    }
                },
                {
                    title: '发信人',
                    width: 150,
                    key: 'addressee'
                },
                {
                    title: '发送时间',
                    key: 'time',
                },
                {
                    title: '状态',
                    align: 'center',
                    width: 250,
                    render: (h, params) => {
                       const text = params.row.action ? '未读':'已读';
                       const color = params.row.action =='已读' ? '#e1dedd':'#2d8cf0';
                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            },
                             style: {
                                    marginRight: '-20px'
                                },
                        }, params.row.action);
                    }
                }
            ],
            historyData: [],
            modal1: false,
            clickbody:false,
            spinShows:true,
            modal:false,
            footerlo:false,
            zhuse:'',
            access:false,
            particular:{
              addresser:'', //发
              recipients:'', //收
              time:'',
              content:''
            }
    	}
    },
    mounted (){
         this.adminname();
         this.accesse();
    },
    methods:{
         accesse(){
         let _this = this;
         axios({
            method: 'post',
            url: '/api/power',
            headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
          })
          .then(function(res) {
              Cookies.set('auth', res.data.power); //权限
              _this.access = res.data.power.summ02;
              // console.log(res)
              if (_this.access) {
                 _this.searchFole.Tabs = 1
                 _this.changeLimit(1)
              }else{
                 _this.changeLimit(1)
              }
          })
          .catch(function(err) {
              _this.$Notice.error({ title: '权限获取错误' });
          })
      },
        adminname(){
           let _this = this;
            axios({
                method:'post',
                url:'/api/adminname2',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              if (res.data.statusx == 200) {
               _this.followupdata = res.data.message
              }else{
                _this.$Notice.error({title: '人员错误'});
              }
            })
            .catch(function (err) {
                _this.$Notice.error({title: '人员错误'});
            })
         },
         changeLimit(e) {
            var _this = this;
              _this.loading = true
               axios({
                    method: 'post',
                    url: '/api/summlist?page='+e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data:{
                        jo:_this.searchFole
                    }
                })
                .then(function(res) {
                    // console.log(res.data.message.data)
                     _this.historyData = res.data.message.data
                     _this.totals = res.data.message.totals
                     _this.pageSize = res.data.message.pageSize
                     _this.loading = false
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
        },
        TabsQ (e){
         this.searchFole.Tabs =e
        },
         changepage(page) {
            this.changeLimit(page)   
         },
            sessf(){
              this.modal = true;
            },
            clickbodys(){
                 this.clickbody = false;
                 this.spinShows = true;
            },
            lookc(e){
               this.spinShows = true;           
                let _this = this;
                 axios({
                    method:'post',
                    url:'/api/summup1?id='+e,
                    headers:{Authorization:'Bearer '+Cookies.set('keya')},
                 })
                .then(function (res) {
                  // console.log(res.data.message)
                  _this.particular =res.data.message
                  _this.spinShows = false;
                })
                .catch(function (err) {
                    _this.$Notice.error({title: '查看失败'});
                })

            },
            footerYes(){
              if(tinyMCE.activeEditor.getContent() == ''){
                 this.$Message.warning('不能为空');
              }else{
              this.footerlo = true; 
               // console.log(tinymce.get('tinymceEditer').getContent())
                let _this = this;
                axios({
                    method:'post',
                    url:'/api/summadd',
                    headers:{Authorization:'Bearer '+Cookies.set('keya')},
                    data:{
                        jo:tinymce.get('tinymceEditer').getContent()
                    }
                 })
                .then(function (res) {
                   _this.$Message.success('工作总结发送成功');
                   tinymce.get('tinymceEditer').setContent('')
                   _this.footerlo = false; 
                   _this.modal = false;
                })
                .catch(function (err) {
                    _this.$Notice.error({title: '工作总结发送失败'});
                })

              }
            },
            footerNo(){
              tinymce.get('tinymceEditer').setContent('')
              this.modal = false
              this.footerlo = false; 
            }
    },
     watch: {
        searchFole: {
            handler: function(val, oldVal) {
               this.changeLimit(1)
            },
            deep: true
        },
    }
};
</script>
