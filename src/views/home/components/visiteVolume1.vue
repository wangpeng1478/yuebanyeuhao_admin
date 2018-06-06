<style lang="less">
// scoped
.visiteVolume1{
   .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
   .searchFolebs{
   	.shuax{
        float: right;
        cursor: pointer;
        line-height: 20px;
         -webkit-transition:all 0.25s ease-out; 
        transition:all 0.25s ease-out;
        &:hover{
          opacity: 0.5;
        }
     }

   }
   .timese{
   	 margin-bottom: 10px;
   }
 }
</style>

<template>
 <div class="visiteVolume1">
 	  <Col :xs="24" :sm="24" :md="24" :lg="24" class="searchFolebs">
     <pre>{{id}}</pre>
    <pre>{{screens}}</pre>
        <Card style="margin-bottom:15px;">
            <Form :model="screens" label-position="right" :label-width="100" inline>
                <FormItem label="申请人" style="margin:3px 0">
                     <Select v-model="screens.luru" filterable clearable>
                              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                          </Select>
                </FormItem>
                 <FormItem label="状态" style="margin:3px 0">
                    <RadioGroup v-model="screens.type" type="button">
                      <Radio label="全部"></Radio>
                      <Radio label="待审核"></Radio>
                      <Radio label="已拒绝"></Radio>
                      <Radio label="已通过"></Radio>
                  </RadioGroup>
                </FormItem>
             </Form>
        </Card>

          <Card>
            <p slot="title">
                <Icon type="ios-eye-outline" size="20" style="vertical-align: top;"></Icon>
               隐藏联系人
            </p>
            <a href="#" slot="extra" @click.prevent="fangyuaData(1)">
                <Icon type="ios-loop-strong"></Icon>
                刷新
            </a>
             <div class="cf">
    			    <Table height="550" :loading="loading" highlight-row ref="currentRowTable" :columns="columns" :data="historyData" stripe></Table>
    			    <Page class="cf pages" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total></Page>
    			 </div>

            <Modal
              v-model="modal1"
              title="拒绝理由">
              <Input v-model="showt" type="textarea" :rows="4" placeholder="拒绝理由..."></Input>
               <div slot="footer">
                  <Button type="primary" @click="oks" :loading="loading2">确定</Button>
                  <Button type="dashed" @click="modal1 = false">取消</Button>
              </div>
          </Modal>

          </Card>
        </Col>
 </div>
</template>

<script>

import axios from 'axios'
import Cookies from 'js-cookie';

 export default {
    	name: 'visiteVolume1',
        data () {
            return {
              id:'0',
              loading: true,
            	loading2: false,
            	totals: 50, //共多少条数据
            	pageSize: 10, //显示多少
              modal1:false,
              showt:'',
              screens:{
                type: "全部",
                luru: ""
              },
              cityList:[],
                columns: [
                    {
                        title: '联系人',
                        key: 'xin'
                    },
                    {
                        title: '类型',
                        align: 'center',
                        key: 'lei',
                        render: (h, params) => {
                         	const text = params.row.lei ? '申请隐藏' : '取消隐藏';
                         	const color = params.row.lei ? 'blue' : 'red';
                         	return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                         }
                    },
                    {
                        title: '申请人',
                        align: 'center',
                        key: 'shen'
                    },
                    {
                        title: '申请时间',
                        align: 'center',
                        key: 'time'
                    },
                     {
                        title: '原因',
                        align: 'center',
                        key: 'yuan'
                    },
                     {
                        title: '备注',
                        align: 'center',
                        key: 'bei'
                    },
                     {
                        title: '状态',
                        align: 'center',
                        render: (h, params) => {
                            // console.log(params)
                          const text = !params.row.tongguo ? !params.row.jujue  ? '待审核' : '已拒绝' : params.row.tongguo? '已通过' : '';
                         	const color = !params.row.tongguo ? params.row.jujue  ? 'red' : '' : params.row.tongguo? 'blue' : '';
                         	return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                         }
                    },
                    {
                        title: '操作',
                        align: 'center',
                        key: 'action',
                        width: 180,
                        render: (h, params) => {
                        
                        const disa = !params.row.tongguo ? params.row.jujue  ? true : false : params.row.tongguo? true : false;
                        	let to = () =>{
                        	 if (!params.row.tongguo) {
                               return '通过'
                        	  }else{
                        	   return '已通过'
                        	  }
                        	}
                        	let ju = () =>{
                        	 if (!params.row.jujue) {
                             return '拒绝'
                        	  }else{
                        	   return '已拒绝'
                        	  }
                        	}
                          // display: block;
                          let cu = JSON.parse(Cookies.set('auth')).ente07
                          const bo1  = cu ? 'inline-block':'none'
                          const bo2  = !cu ? 'inline-block':'none'
                          // console.log(bo1)
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        disabled: disa
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display:bo1,
                                    },
                                    on: {
                                        click: () => {
                                            //通过
                                            // params.row.tongguo = true;
                                            this.id = params.row.id;
                                            this.yesok();
                                        }
                                    }
                                }, to()),
                                 h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        disabled: disa
                                    },
                                     style: {
                                        display:bo1,
                                    },
                                    on: {
                                        click: () => {
                                           // params.row.jujue = true;
                                          this.id = params.row.id;
                                          this.modal1 = true
                                        }
                                    }
                                }, ju()),
                                 h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                    },
                                     style: {
                                        display:bo2,
                                    },
                                    on: {
                                        click: () => {
                                           // params.row.jujue = true;
                                          this.id = params.row.id;
                                          this.noook()
                                        }
                                    }
                                }, '取消申请')
                            ]);
                        }
                    }
                ],
                historyData: []
            }
        },
        mounted(){
           this.adminname();
           this.fangyuaData(1);
        },
        methods:{
              adminname() {
                let _this = this;
                axios({
                        method: 'post',
                        url: '/api/adminname3',
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
            fangyuaData(e){
                  this.loading = true;
                  let _this = this;
                   axios({
                        method: 'post',
                        url: '/api/suzulist?page=' + e,
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                        data:{
                          jo:_this.screens
                        }
                    })
                    .then(function(res) {
                       // console.log(res.data.message.data)
                       _this.historyData = res.data.message.data;
                       _this.totals = res.data.message.totals
                       _this.pageSize =res.data.message.pageSize
                       _this.loading = false;
                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '错误' });
                    })
            },
            changepage(page) {
              this.fangyuaData(page)
            },
            yesok(){
                  let _this = this;
                   axios({
                        method: 'post',
                        url: '/api/suzuadopt1?id=' + _this.id,
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    })
                    .then(function(res) {
                         // console.log(res)
                        _this.$Message.success('已通过');
                       _this.fangyuaData(1);
                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '错误' });
                    })
            },
            noook(){
                  let _this = this;
                   axios({
                        method: 'post',
                        url: '/api/suzuadopt3?id=' + _this.id,
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    })
                    .then(function(res) {
                         // console.log(res)
                        _this.$Message.success('已取消');
                       _this.fangyuaData(1);
                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '错误' });
                    })
            },
            oks(){
              if (this.showt !=='') {
                  this.loading2 = true;
                   let _this = this;
                   axios({
                        method: 'post',
                        url: '/api/suzuadopt2',
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                        data:{
                          'jo':{
                            id:_this.id,
                            rema2:_this.showt
                          }
                        }
                    })
                    .then(function(res) {
                       _this.$Message.success('已拒绝');
                       _this.fangyuaData(1);
                       _this.showt = ''
                       _this.modal1 = false
                       _this.loading2 = false
                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '错误' });
                    })
              }
            }
        },
        watch: {
          screens: {
              handler: function(val, oldVal) {
                 this.fangyuaData(1);
              },
              deep: true
          },
      }
    }

</script>
