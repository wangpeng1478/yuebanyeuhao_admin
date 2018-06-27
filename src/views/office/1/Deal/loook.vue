// <style lang="less" scoped>
   .look{
    .spanLeft{
      	float:left;
      	font-weight: 100;
      	cursor: pointer;
      	&:hover{
      		opacity: 0.7;
      	}
      }
      .ivu-steps{
      	    margin: 30px 0;
      }
      .table-bordered{
        width: 80%;
	    min-width: 900px;
	    margin:0 auto;
        table, th , td {
		  border: 1px solid #d6d6d6;
		  border-collapse: collapse;
		  padding: 8px;
		  vertical-align: middle;
	     }
	     table{width:100%;margin-bottom:15px;}
	    .b{
	      font-weight: 600;
	      text-align: center;
	    }
	    .ren{
	      color: #dd514c;
          font-weight: 600;
	    }
	    .tables{
	    	text-align:center;
	    	margin:15px auto; 
	    }
	    .wenjain{
	    	margin: 15px auto;
        max-height: 300px;
        overflow: auto;
	    	a{
	    		display:block;
	    		.ivu-alert-info{
	    		   border: 1px solid #e7e7e7;
             background-color: #f1f1f1;
	    		}
	    	}
	    }
      }

    .Colspan{
    border: 1px solid #d5e8fc;
    background-color: #eaf4fe;
    width:100%;
    padding: 8px 48px 8px 16px;
    border-radius: 6px;
    color: #495060;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 10px;
    }
   }
</style>

<template>
 <div class="look">
 <pre>{{Timeline}}</pre>
 <pre>{{sedd}}</pre>
 <pre>{{data}}</pre>
   <Card class='cf' style="min-width:1295px;">
     <p slot="title" style="text-align:center">
       <span @click='historys' class='spanLeft'> 
       <Icon type="ios-arrow-left"></Icon> 返回</span>
          成交报告{{id}}
    </p>
     <div v-if="loading1">
     <div class="table-bordered">
      <Row>
        <Col :xs="24" :sm="24" :md="24" :lg="24">
        	<table>
          <tbody>
            <tr>
              <td class="b" width="105px">签单日期</td>
              <td>{{data.SignTime}}</td>
              <td class="b" width="105px">签约人</td>
              <td>{{data.SignRen}}</td>
              <td class="b" width="105px">报单日期</td>
              <td>{{data.SignTimes}}</td>
            </tr>
            <tr>
              <td class="b">成交物业地址</td>
              <td class="tl" colspan="3">
                {{data.address}}
              </td>
              <td class="b">面积</td>
              <td class="tl">{{data.acreage}}m²</td>
            </tr>
            <tr>
              <td class="b">月租金</td>
              <td><span class="ren">{{data.Monthly}}元</span></td>
              <td class="b">租期</td>
              <td>{{data.startTime}} - {{data.EndTime}}</td>
              <td class="b">免租期</td>
              <td>{{data.freePeriod}}({{data.Company}})</td>
            </tr>
            <tr>
              <td class="b">介绍人</td>
              <td>{{data.introduce.vlu_1}}</td>
              <td class="b">介绍人电话</td>
              <td>{{data.introduce.vlu_2}}{{data.introduce.vlu_3}}</td>
              <td class="b">回扣情况</td>
              <td><span class="ren">{{data.introduce.vlu_4}}</span> ({{data.introduce.vlu_5}}%)</td>
            </tr>
            <tr>
              <td class="b">产权人</td>
              <td>{{data.Property.vlu_1}}</td>
              <td class="b">产权人电话</td>
              <td>
                <p>{{data.Property.vlu_2}}{{data.Property.vlu_3}}</p>
                <p v-for="item in data.Property.add" :key="item.length">
                   {{item.vlu_2}} {{item.vlu_3}}
                </p>

              </td>
              <td class="b">回扣情况</td>
              <td><span class="ren">{{data.Property.vlu_4}}</span> ({{data.Property.vlu_5}}%)</td>
            </tr>
            <tr>
              <td class="b">承租方</td>
              <td>{{data.Rental.vlu_1}}</td>
              <td class="b">承租方电话</td>
              <td>
                 <p>{{data.Rental.vlu_2}}{{data.Rental.vlu_3}}</p>
                  <p v-for="item in data.Rental.add" :key="item.length">
                     {{item.vlu_2}} {{item.vlu_3}}
                  </p>
              </td>
              <td class="b">回扣情况</td>
              <td><span class="ren">{{data.Rental.vlu_4}}</span> ({{data.Rental.vlu_5}}%)</td>
            </tr>
            <tr>
              <td class="b">应收佣金</td>
              <td colspan="2"><span class="ren">{{data.Commission}}元</span></td>
              <td class="b">实收佣金</td>
              <td colspan="2"><span class="ren">{{data.SCommission}}元</span></td>
            </tr>
            <tr>
              <td class="b">发票</td>
              <td colspan="2">
                {{data.invoice}} 
                <span v-if="data.invoice = '开票'">(税率{{data.taxRate}}%)</span>
              </td>
              <td class="b">是否进账</td>
              <td colspan="2">{{data.Houston}}</td>
            </tr>
            <tr>
              <td class="b">备注</td>
              <td class="tl" colspan="6">{{data.Remarks}}</td>
            </tr>
            <tr>
              <td class="b">业务主成交人</td>
              <td>{{data.Major}}</td>
              <td class="b">业绩</td>
              <td><span class="ren">{{data.MajorY}}%</span></td>
              <td class="b">金额</td>
              <td><span class="ren">{{data.MajorJ}}元</span></td>
            </tr>
            <tr>
              <td class="b">业务合作人员</td>
              <td>{{data.cooperation.cooperationn}}</td>
              <td class="b">业绩</td>
              <td><span class="ren">{{data.cooperation.cooperationY}}%</span></td>
              <td class="b">金额</td>
              <td><span class="ren">{{data.cooperation.cooperationJ}}元</span></td>
            </tr>

             <tr v-for="item in data.cooperation.add" :key="item.length">
              <td class="b">业务合作人员</td>
              <td>{{item.cooperationn}}</td>
              <td class="b">业绩</td>
              <td><span class="ren">{{item.cooperationY}}%</span></td>
              <td class="b">金额</td>
              <td><span class="ren">{{item.cooperationJ}}元</span></td>
            </tr>

            <tr>
              <td class="b">房源归属人</td>
              <td>{{data.ascription}}</td>
              <td class="b">业绩</td>
              <td><span class="ren">{{data.ascriptionY}}%</span></td>
              <td class="b">金额</td>
              <td><span class="ren">{{data.ascriptionJ}}元</span></td>
            </tr>
            <tr>
              <td class="b">照片归属人</td>
              <td>{{data.imgs}}</td>
              <td class="b">业绩</td>
              <td><span class="ren">{{data.imgsY}}%</span></td>
              <td class="b">金额</td>
              <td><span class="ren">{{data.imgsJ}}元</span></td>
            </tr>
          </tbody>
        </table>

          <Steps :current="Timeline">
  	        <Step title="合作人" content="业务合作人确认"></Step>
  	        <Step title="房源" content="房源归属人确认"></Step>
  	        <Step title="照片" content="照片归属人确认"></Step>
  	        <Step title="经理" content="经理确认"></Step>
            <Step title="行政" content="行政确认"></Step>
  	        <Step title="财务" content="财务确认"></Step>
  	        <Step title="总经理" content="总经理确认"></Step>
  	     </Steps>

         <div class="wenjain">
         	  <a v-for="item in wen" :key="item.length" :href="item.url" target="_blank">
         	    <Alert><Icon type="document-text"></Icon> {{item.url}}</Alert>
         	  </a>
         </div>


	       <table class="tables" style="table-layout: fixed;"> 
            <thead>
              <tr>
                <th>业务主成交人</th>
                <th>业绩</th>
                <th>金额</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ren">{{data.Major}}</span></td>
                <td><span class="ren">{{data.MajorY}}%</span></td>
                <td><span class="ren">{{data.MajorJ}}元</span></td>
                <td>
                  <span class="ren">已确认</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="tables" style="table-layout: fixed;"> 
            <thead>
              <tr>
                <th>业务合作人员</th>
                <th>业绩</th>
                <th>金额</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ren">{{data.cooperation.cooperationn}}</span></td>
                <td><span class="ren">{{data.cooperation.cooperationY}}%</span></td>
                <td><span class="ren">{{data.cooperation.cooperationJ}}元</span></td>
                <td>
                  <span :class="{ren:data.cooperation.act == '已确认'}">{{data.cooperation.act}}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="tables" style="table-layout: fixed;" v-for="item in data.cooperation.add" :key="item.length">
            <thead>
              <tr>
                <th>业务合作人员</th>
                <th>业绩</th>
                <th>金额</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ren">{{item.cooperationn}}</span></td>
                <td><span class="ren">{{item.cooperationY}}%</span></td>
                <td><span class="ren">{{item.cooperationJ}}元</span></td>
                <td>
                   <span :class="{ren:item.act == '已确认'}">{{item.act}}</span>
                </td>
              </tr>
            </tbody>
          </table>

           <table class="tables" style="table-layout: fixed;"> 
            <thead>
              <tr>
                <th>房源归属人</th>
                <th>业绩</th>
                <th>金额</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ren">{{data.ascription}}</span></td>
                <td><span class="ren">{{data.ascriptionY}}%</span></td>
                <td><span class="ren">{{data.ascriptionJ}}元</span></td>
                <td>
                 <span :class="{ren:sedd[1]}">{{sedd[1] ? '已确认':'未确认'}}</span>
                </td>
              </tr>
            </tbody>
          </table>
           <table class="tables" style="table-layout: fixed;"> 
            <thead>
              <tr>
                <th>照片归属人</th>
                <th>业绩</th>
                <th>金额</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ren">{{data.imgs}}</span></td>
                <td><span class="ren">{{data.imgsY}}%</span></td>
                <td><span class="ren">{{data.imgsJ}}元</span></td>
                <td>
                  <span :class="{ren:sedd[2]}">{{sedd[2] ? '已确认':'未确认'}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="24">
         <p style="text-align: right;
    padding: 10px 0;"><Icon type="ios-information"></Icon>
    <a href="#" @click.prevent="shiwde = !shiwde">点击</a> 联系签单人修改资料</p>
           <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" inline v-if="shiwde">
              <FormItem label="修改理由" prop="amendx" style="width: 500px;">
                  <Input v-model="formInline.amendx" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
              </FormItem>
              <Button @click="handleSubmit('formInline')" :loading="loading3">确认</Button>
           </Form>
         <Alert v-if="amendx !== null" show-icon>修改理由:{{amendx}}</Alert>
        </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align: center;padding: 15px 0 100px 0;">
           <Button v-if="amendx == null" type="success" @click="clickok" :loading="loading2">
             {{Timelines}}
           </Button>
           <Button v-if="removal" @click="Dealkans">修改</Button>
        </Col>
      </Row>
      </div>
     </div>
       <Card v-else>加载中...</Card>
     </Card>
 </div>

</template>

<script>

import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'look',
     data () {
        return {
            time: new Date().toLocaleString(),
            formInline: {
                    amendx: '',
            },
            ruleInline: {
                amendx: [
                    { required: true, message: '请填写修改理由', trigger: 'blur' }
                ]
            },
            loading1:false,
            loading2:false,
            loading3:false,
            shiwde:false,
            removal:false,
            Timeline:0,
            Timelines:'',
            sedd:[],
            wen:[],
            id: '',
            amendx:'',
            data:{
                SignTime: '',//签单日期
                SignRen: '',//签单人
                SignTimes: '', //报单日期
                acreage: '', //面积
                Properties: '', //成交楼盘
                housing: '', //成交房源
                type: '传统办公', //类型
                Radios: true, //传统 、共享
                address:'',//成交物业地址
                brand:'', //品牌
                Dot:'', //网点
                Station:'', //工位
                Monthly :'', //月租金
                startTime :'', //开始租期
                EndTime :'', //结束租期
                freePeriod :'', //免租期
                Company :'月', //免租期单位
                Commission :'', //应收佣金
                invoice :'开票', //发票
                taxRate :'10', //税率
                introduce :{
                   vlu_1 :'',
                   vlu_2 :'', //姓名
                   vlu_3 :'', //电话
                   vlu_4 :'', //回款
                   vlu_5 :'', //%
                   vlu_6 :true,
                }, //介绍人
                Property:{
                   vlu_1 :'',
                   vlu_2 :'',
                   vlu_3 :'',
                   vlu_4 :'',
                   vlu_5 :'',
                   vlu_6 :true,
                   add:[]
                 },//产权人
                Rental:{
                   vlu_1 :'',
                   vlu_2 :'',
                   vlu_3 :'',
                   vlu_4 :'',
                   vlu_5 :'',
                   vlu_6 :true,
                   add:[]
                 },//承租方
                 SCommission:'',//实收佣金
                 Houston:'进账',//进账
                 Remarks:'',//备注
                 Major:'',//主成交姓名
                 MajorY:'',//%
                 MajorJ:'',//主成交金额
                 cooperation:{
                  cooperationn:'',//合作人姓名
                  cooperationY:'',//合作人业绩
                  cooperationJ:'',//合作人金额
                  act:'',//合作人金额
                  add:[]
                 },//合作人
                 ascription:'',//房源归属人姓名
                 ascriptionY:'',//房源归属人业绩
                 ascriptionJ:'',//房源归属人金额
                 imgs:'',//照片归属人姓名
                 imgsY:'',//照片归属人业绩
                 imgsJ:'',//照片归属人金额
           }
        };
    },
    mounted(){
      this.id = this.$route.query.deal_id
      this.datae();
    },
    methods: {
      datae(){
        let _this = this;
        _this.loading1 = false
          axios({
              method: 'post',
              url: '/api/dealup1?deid1='+_this.id,
              headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
          })
          .then(function(res){
              _this.data = res.data.message.data
              let a = res.data.message.Timeline;
               if(!a[6]){
                 _this.Timeline = 6
                 _this.Timelines = '总经理确认'
              }
               if(!a[5]){
                _this.Timeline = 5
                _this.Timelines = '财务确认'
              }
               if(!a[4]){
                _this.Timeline = 4
                _this.Timelines = '行政确认'
              }
               if(!a[3]){
                _this.Timeline = 3
                _this.Timelines = '经理确认'
              }
               if(!a[2]){
                _this.Timeline = 2
                _this.Timelines = '照片归属人确认'
              }
               if(!a[1]){
                _this.Timeline = 1
                _this.Timelines = '房源归属人确认'
              }
              if(!a[0]){
                _this.Timeline = 0
                _this.Timelines = '业务合作人确认'
              }
              console.log(a)
              _this.sedd = a;
              _this.amendx = res.data.message.amendx
              _this.wen = res.data.message.fi
              _this.removal = res.data.message.removal
              
              // console.log(res.data.message.deend)
              if (res.data.message.deend =='已完成') {
                _this.Timelines = '已完成'
              }
             _this.loading1 = true
          })
          .catch(function(err) {
              _this.$Notice.error({ title: '错误' });
          })
      },
      clickok(){
         let _this = this;
         this.loading2 = true
         axios({
              method: 'post',
              url: '/api/voucher?deid1='+_this.id,
              headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
          })
          .then(function(res){

              _this.datae();
              _this.$Message.success('确认成功');
             _this.loading2 = false
          })
          .catch(function(err) {
              _this.$Notice.error({ title: '确认错误' });
          })

      },
      historys(){
       	 window.history.go(-1)
      },
      Dealkans() {
          let query = { deal_id: this.id };
          this.$router.push({
              name: 'addl_st',
              query: query
          });
        },
      handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let _this = this;
                        _this.loading3 = true,
                        axios({
                            method: 'post',
                            url: '/api/amendx',
                            headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                            data:{
                              deid1:_this.id,
                              amendx:_this.formInline.amendx
                            }
                        })
                        .then(function(res){
                           _this.$Message.success('成功');
                           _this.shiwde = false
                           _this.loading3 = false
                           _this.datae()
                        })
                        .catch(function(err) {
                            _this.$Notice.error({ title: '错误' });
                        })
                    }
                })
            }
    }
};
</script>
