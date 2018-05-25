<style lang="less">
  .visiteVolume2{


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
   .RadioGroups{
    position: absolute;
    top: 9px;
    left: 107px;
   }
 }
</style>

<template>
   <div class="visiteVolume2">
 	  <Col :xs="24" :sm="24" :md="24" :lg="24" class="searchFolebs">
          <Card style="margin-bottom:15px;">
              <p slot="title"> 
              <Icon style="vertical-align: top;" size="18" type="ios-bell-outline"></Icon>
              工作提醒
               <RadioGroup v-model="RadioGroups" type="button" class="RadioGroups">
                    <Radio label="全部"></Radio>
                    <Radio label="未读"></Radio>
                    <Radio label="已阅"></Radio>
                    <Radio label="已发送"></Radio>
                </RadioGroup>
              </p>

               <a href="#" slot="extra" @click.prevent="fangyuaData">
                <Icon type="ios-loop-strong"></Icon>
                刷新
              </a>

             <div class="cf">
			    <Table height="350" :loading="loading" highlight-row ref="currentRowTable" :columns="columns" :data="historyData" stripe></Table>
			    <Page class="cf pages" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total></Page>
			 </div>
          </Card>
        </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="24">
            <Card style="margin-bottom:15px;">
            <p slot="title">  <Icon style="vertical-align: top;" size="19" type="ios-bell-outline"></Icon> 添加提醒</p>
             <Forms></Forms>
            </Card>
        </Col>
 </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';
import Forms from './Forms/Forms.vue';
export default {
    	name: 'visiteVolume2',
         components: {
           Forms
         },
        data () {
            return {
            	loading: true,
            	totals: 50, //共多少条数据
              pageSize: 8, //显示多少
            	RadioGroups: '全部', //显示多少
                columns: [
                    {
                        title: '收信日期',
                        key: 'time',
                        width: 200,
                    },
                    {
                        title: '发信人',
                        key: 'fa',
                        width: 100,
                    },
                    {
                        title: '内容',
                        key: 'con'
                    },
                    {
                        title: '类型',
                        align: 'center',
                        key: 'type',
                        width: 150,
                        render: (h, params) => {
                         	const color = params.row.type == '未读' ? 'red' : params.row.type == '已阅' ? '#d8d8d8' : params.row.type == '已发送' ? '#2d8cf0' : '';
                         	return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, params.row.type);
                         }
	                   },
                    {
                        title: '操作',
                        key: 'cao',
                        width: 100,
                        render: (h, params) =>{
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
                                            //通过
                                            // params.row.tongguo = true;
                                        }
                                    }
                                }, '查看')
                            ]);
                        }
                    },
                ],
                historyData: [
                    {
                     id:'22',
                     time:'1',
                     fa:'1', //发信人
                     con:'1', //内容
                     type:'未读', //已阅 已发送
                    },
                ]
            }
        },
        mounted(){
           this.loading = false
        },
        methods:{
          fangyuaData(){
                 this.loading = true;
                  let _this = this;
                   axios({
                        method: 'post',
                        url: '/api/suzulist?page=' + e,
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                        data:{
                          jo:_this.RadioGroups
                        }
                    })
                    .then(function(res) {
                       _this.loading = false;
                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '错误' });
                    })
          },
          changepage(page) {
          	// this.fangyuaData(page)
          },
        },
        watch:{
           RadioGroups:{
              handler: function (val, oldVal){
               // this.fangyuaData(1)
              },
              deep: true
           } 
        }
    }

</script>
