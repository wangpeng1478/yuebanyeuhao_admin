<style lang="less">
 .houseadd{
 .addlaixnienee{
      .ivu-card-extra{
    width: 52px;
    overflow: hidden;
    height: 23px;
  }
  }
  .ivu-form-item {
    margin-bottom: 15px;
}
  .addName{
    .addscli{
      position:absolute;
      top:0;
      right:0;
    }
    .addlianxi{
      position:absolute;
      top:0;
      right:-50px;
    }
    .addlimg{
      position:absolute;
      top:0;
      right:-100px;
    }
   }
   .selectsNmae{
    .ivu-select-not-found{
      display:none
    }
   }
   .cardseti{
    .ivu-card-head{
      padding: 5px 10px;
    }
      .ivu-card-extra{
        top:0
       }
   }
   .yiyouCard{
       width: 210px;
       margin: 5px;
       background: #f5f8ff;
       display: inline-block;
       vertical-align: top;
      .ivu-tag{
        position:absolute;
        top:3px;
        right:0;
      }
      .extras{
        position:absolute;
        top:4px;
        right:8px;
      }
      .ivu-card-body{
        padding:5px;
        .p1,.p2{
        background: #fff;
        padding: 0 5px;
        margin: 5px 0;
        height: 28px;
        line-height:28px;
        font-size: 12px;
        border: 1px solid #e7edfd;
       }
       .p2{
        height:50px;
        overflow: auto;
        padding:5px;
        word-wrap:break-word;
        line-height: 1.3;
       }
      }
      
   }
   .ModalAddse{

   }
   .jiagebose{
      width: 400px;
      margin-bottom: 15px;
      background: #f3f6fd;
      padding: 10px;
      border: 1px dashed #d4dffa;
     .ivu-input-group-prepend{
      text-align: right;
      width:84px;
     }
     .ivu-input-group-append{
      width:65px;
      text-align:left;
     }
   }
 }
</style>

<template>
   <div class="houseadd cf">
      <pre>{{houseadd}}</pre>
      <pre>{{yiyouCard}}</pre>
 <Form :model="houseadd" :label-width="80">
      <Card style="margin-bottom:15px;">
        <p slot="title">
            基本信息 {{houseadd.id}}
        </p>
          <Row>
            <Col :xs="18" :sm="18" :md="18" :lg="8">
               <FormItem label="所属楼盘" class="ivu-form-item-required addName">
                 <Select 
                 v-model="houseadd.name"
                 class="selectsNmae" 
                  filterable
                  clearable
                  remote
                  :remote-method="remoteMethod"
                  @on-change = "changqeeeeee"
                  placeholder = '请搜索楼盘'
                  :loading="loadingse">
                      <Option v-for="(option, index) in optionsName" :value="option.value" :key="index">{{option.label}}</Option>
                  </Select>

                  <Tooltip class="addlianxi" content="添加联系人" placement="top">
                   <Button @click="srctoole(0)" type="dashed" icon="person-stalker"></Button> 
                </Tooltip>

                 <Tooltip class="addlimg" content="添加图片" placement="top">
                   <Button @click="srctoole(1)" type="dashed" icon="ios-analytics"></Button> 
                </Tooltip>

               </FormItem>  
            </Col>
          </Row>

          <Row v-if="yiyouCard.length !== 0">
            <Col>
              <FormItem label="门牌号" class="ivu-form-item-required">
                <Card class="cardseti">
                  <p class="titlese" slot="title">
                      <Icon type="grid"></Icon>
                      {{houseadd.name}}已有房源
                  </p>
                   <a class="extra" href="#" slot="extra" @click.prevent="ModalAdds">
                      <Icon type="plus-round"></Icon>
                      添加新的单元号
                   </a>
                <div style="max-height:365px;overflow: auto;">
                  <Card class="yiyouCard" v-for="(n,index) in yiyouCard" :key='index'>
                   <p slot="title" style="font-weight: 100;color:#2c6df1">
                    {{n.room}}
                   </p>
                   <Tag v-if="n.type !== null" color="#3bb4f2">{{n.type}}</Tag>
                    <p class="p1">{{n.area}}m² <span style="float:right">（总:{{n.areaz}}）m²</span> </p>
                    <p class="p1">{{n.price}}元/m²·天</p>
                    <p class="p2" v-if='n.note !== ""'>{{n.note}}</p>
                    <p class="p2" v-else style="color: #9e9e9e;">备注</p>
                  </Card>
               </div>
                </Card>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <FormItem label="添加单元号">
                <Button type="primary" shape="circle" icon="plus-round" @click="ModalAdds">添加单元号</Button>
                <Modal v-model="ModalAdd" class="ModalAddse" :styles="{top: '10px'}" width='1200px'>
                   <p slot="header" style="text-align:center">
                     {{houseadd.name}}添加新的单元号
                   </p>
                  <div>
                     <Addse v-if="Addsefas" :yiyouCard="Addcondition" ref="Addsed"></Addse>
                  </div>
                  <div slot="footer">
                      <Button @click="Modals(0)" type="primary" icon="plus-round">添加单元号</Button>
                      <Button @click="Modals(1)" type="dashed">取消</Button>
                  </div>
                </Modal>
            </FormItem>
          </Row>

          <Row v-if="houseadd.Addconditions.length !==0">
            <Col>
              <FormItem label="门牌号" class="ivu-form-item-required">
                <Card class="cardseti">
                  <p class="titlese" slot="title">
                      <Icon type="grid"></Icon>
                      添加新的单元号
                  </p>
                  <Card class="yiyouCard" v-for="(n,index) in houseadd.Addconditions" :key='index'>
                   <p slot="title" style="font-weight: 100;color:#2c6df1">
                    {{n.room}}
                   </p>
                    <Poptip
                        confirm
                        title="确定删除？"
                        class="extras"
                        @on-ok="Remconditions(index)">
                       <a href="javascript:;">
                          <Icon type="close-circled" size="22" color="#F44336"></Icon>
                       </a>
                    </Poptip>
                   
                   <Input v-model="n.area" @on-change="Caaddjia" size="small" placeholder="面积"><span slot="append">m²</span></Input>
                   <Input v-model="n.note" size="small" type="textarea" placeholder="备注" style="margin-top:5px;"></Input>
                  </Card>
                </Card>
              </FormItem>
            </Col>
          </Row>

          <Row>
          <Col style="width:278px;display:inline-block;">
             <FormItem label="总面积"  class="ivu-form-item-required">
                <Input v-model="houseadd.area2" @on-change="Caaddjias">
                   <span slot="append">m²</span>
                </Input>
            </FormItem>
          </Col>

          <Col style="width:195px;display:inline-block;margin-left: 5px;">
             <FormItem label="使用率"  class="ivu-form-item-required">
                <Input v-model="houseadd.availability">
                   <span slot="append">%</span>
                </Input>
            </FormItem>
          </Col>
          </Row>

          <Row>
          <Col>
              <FormItem label="装修情况"  class="ivu-form-item-required">
                  <RadioGroup type="button" v-model="houseadd.fitment">
                      <Radio label="标准交付"></Radio>
                      <Radio label="豪华装修"></Radio>
                      <Radio label="精装修"></Radio>
                      <Radio label="中等装修"></Radio>
                      <Radio label="简装修"></Radio>
                      <Radio label="毛坯"></Radio>
                  </RadioGroup>
              </FormItem>
          </Col>
          </Row>

           <Row>
          <Col>
              <FormItem label="出租价格"  class="ivu-form-item-required">
                <div class="jiagebose">
                     <Input size="large" v-model="houseadd.money1">
                        <span slot="prepend">业主报价</span>
                        <span slot="append">元/m²·天</span>
                     </Input>
                </div>
                <div class="jiagebose">
                     <Input size="large" v-model="houseadd.money3" @on-change="Caaddjias">
                        <span slot="prepend">预估成交价</span>
                        <span slot="append">元/m²·天</span>
                     </Input>
                </div>
                  <div class="jiagebose">
                     <Input size="large" v-model="houseadd.money2">
                        <span slot="prepend">按整套租金</span>
                        <span slot="append">元/月</span>
                     </Input>
                </div>
              </FormItem>
          </Col>
          </Row>

          <Row>
             <Col>
              <FormItem label="物业费用">
                <div style="width:195px;display:inline-block;">
                    <Input placeholder="单价" v-model="houseadd.property" @on-change="Caaddjias">
                        <span slot="append">元/m²</span>
                    </Input>
                </div>
                <div style="width:195px;display:inline-block;margin-left: 5px;">
                   <Input placeholder="总价" v-model="houseadd.propertyz">
                      <span slot="append">元/月</span>
                  </Input>
                 </div>
              </FormItem>
             </Col>
          </Row>

           <Row>
             <Col>
              <FormItem label="付款方式">
                  <div style="width:195px;display:inline-block;">
                    <Input v-model="houseadd.deposit" placeholder="-">
                        <span slot="prepend">押</span>
                    </Input>
                </div>
                <div style="width:195px;display:inline-block;margin-left: 5px;">
                   <Input v-model="houseadd.deposit2" placeholder="-">
                      <span slot="prepend">付</span>
                  </Input>
                 </div>
              </FormItem>
             </Col>
          </Row>
          <Row>
             <Col>
              <FormItem label="免租期">
              <div style="width:150px;display:inline-block;" v-if="!houseadd.Negotiable">
                  <Input v-model="houseadd.favourable">
                      <span slot="append">天</span>
                  </Input>
              </div>
              <div style="width:80px;display:inline-block;vertical-align: 10px;">
                  <Checkbox @on-change="houseadd.favourable =''" v-model="houseadd.Negotiable">面议</Checkbox>
              </div>
              </FormItem>
             </Col>
          </Row>

           <Row>
             <Col>
              <FormItem label="最短租期">
              <div style="width:150px;display:inline-block;" v-if="!houseadd.Negotiablese">
                  <Input v-model="houseadd.miniterm">
                      <span slot="append">天</span>
                  </Input>
              </div>
              <div style="width:80px;display:inline-block;vertical-align: 10px;">
                  <Checkbox @on-change="houseadd.miniterm =''" v-model="houseadd.Negotiablese">面议</Checkbox>
              </div>
              </FormItem>
             </Col>
          </Row>

          <Row>
             <Col style="width:200px;display:inline-block">
              <FormItem label="是否可分割">
                  <Checkbox v-model="houseadd.availability2">
                    <span v-if="!houseadd.availability2">不可分割</span>
                    <span v-else>可分割</span>
                  </Checkbox>
              </FormItem>
             </Col>
              <Col style="width:200px;display:inline-block">
              <FormItem label="是否可注册">
                  <Checkbox v-model="houseadd.register">
                     <span v-if="!houseadd.register">不可注册</span>
                     <span v-else>可注册</span>
                  </Checkbox>
              </FormItem>
             </Col>
        </Row>
          <Row>
             <Col>
              <FormItem label="出售价格">
              <div style="width:150px;display:inline-block;" v-if="Negotiableses">
                  <Input v-model="houseadd.Forsale1" @on-blur="zuqi">
                      <span slot="append">元/m²</span>
                  </Input>
              </div>
               <div style="width:150px;display:inline-block;" v-if="Negotiableses">
                  <Input v-model="houseadd.Forsale2">
                      <span slot="append">元</span>
                  </Input>
              </div>
              <div style="width:80px;display:inline-block;vertical-align: 10px;">
                  <Checkbox @on-change="Negotiableses = !Negotiableses,houseadd.Forsale1='',houseadd.Forsale2=''" v-model="houseadd.Forsale">
                     <span v-if="!houseadd.Forsale">不可出售</span>
                     <span v-else>可出售</span>
                  </Checkbox>
              </div>
              </FormItem>
             </Col>
          </Row>


          <Row>
            <Col style="width:300px;">
               <FormItem label="房源类型" class="ivu-form-item-required">
                      <Cascader :data="identitydata" v-model="houseadd.identity" change-on-select></Cascader>
               </FormItem>  
            </Col>
          </Row>
          <Row>
            <Col style="width:600px;">
               <FormItem label="备注">
                <Input v-model="houseadd.introduce" type="textarea" :rows="4"></Input>
               </FormItem>  
            </Col>
          </Row>
      </Card>


      <!-- 联系人 -->
      <Card style="margin-top:15px;" class="addlaixnienee">
         <p slot="title">添加联系人1</p>
         <a v-if='!lestlian1' href="#" slot="extra" @click.prevent="addEdit(1)">
           <Icon type="plus-round"></Icon>
            添加
         </a>
         <a v-if='!lestlian2' href="#" slot="extra" @click.prevent="addEdit(2)">
           <Icon type="plus-round"></Icon>
            添加
         </a>
         <a v-if='!lestlian3' href="#" slot="extra" @click.prevent="addEdit(3)">
           <Icon type="plus-round"></Icon>
            添加
         </a>
          <a v-if='!lestlian4' href="#" slot="extra" @click.prevent="addEdit(4)">
           <Icon type="plus-round"></Icon>
            添加
         </a>
          <a v-if='!lestlian5' href="#" slot="extra" @click.prevent="addEdit(5)">
           <Icon type="plus-round"></Icon>
            添加
         </a>

         <div id="addlianxi"></div>
         <contacts :typedata="typedata" ref="getInput"></contacts>

         <Card style='margin-top:15px' v-if="lestlian1">
          <p slot="title">添加联系人2</p>
          <a href="#" slot="extra" @click.prevent="lestlian1 = false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs1"></contacts>
         </Card>

         <Card style='margin-top:15px' v-if="lestlian2">
          <p slot="title">添加联系人3</p>
          <a href="#" slot="extra" @click.prevent="lestlian2 = false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs2"></contacts>
         </Card>
         <Card style='margin-top:15px' v-if="lestlian3">
          <p slot="title">添加联系人4</p>
          <a href="#" slot="extra" @click.prevent="lestlian3 = false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs3"></contacts>
         </Card>
         <Card style='margin-top:15px' v-if="lestlian4">
          <p slot="title">添加联系人5</p>
          <a href="#" slot="extra" @click.prevent="lestlian4 = false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs4"></contacts>
         </Card>
       </Card>
      <!-- 联系人 -->
      <!-- img -->
       <Card style="margin-top:15px;">
        <div id="addlimg"></div>
         <p slot="title">上传图片</p>
         <Uploads ref="imgadd"></Uploads>
       </Card>
      <!-- img -->

         <Card style="margin-top:15px;text-align: center;">
       <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
         <span v-if="!loading">提 交</span>
         <span v-else>提 交 中</span>
       </Button>
        <Modal
        v-model="modal1s"
        title="提交数据">
        <div style="height: 500px;overflow: auto;">
          <h4>楼盘数据</h4>
          <pre>{{houseadd}}</pre>
          <h4>联系人</h4>
          <pre>{{lainxirendata}}</pre>
          <h4>图片</h4>
          <pre>{{imgs}}</pre>
        </div>
        </Modal>
       </Card>

</Form>
   </div>
</template>

<script>

import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie';
import Addse from './add/add.vue';

import contacts from '.././contacts/contacts.vue';
import Uploads from '.././Upload/Upload.vue';

export default {
    name: 'houseadd',
     components:{
        Addse,
        contacts,
        Uploads
     },
      data () {
          return {
             typedata:'房源联系人',
             optionsName:[],//大楼名字
             worthName:false,//监听
             loadingse: false,
             ModalAdd: false, //add单元
             Addcondition:{}, //子页面参数
             Addsefas:false,
             Negotiablese:true, //面议true
             Negotiableses:false, //出售true
             yiyouCard:[], //已有房源
             lestlian1:false,
             lestlian2:false,
             lestlian3:false,
             lestlian4:false,
             lestlian5:false,
             modal1s:false,
             loading:false,
             lainxirendata:[],
             imgs:{},
             identitydata:[{
                    value: '小业主房源',
                    label: '小业主房源',
                    children: [
                        {
                            value: '二房东',
                            label: '二房东'
                        },
                        {
                            value: '转租客',
                            label: '转租客'
                        }
                    ]
                },{
                    value: '大业主房源',
                    label: '大业主房源',
                    children: [
                        {
                            value: '开发商',
                            label: '开发商'
                        },
                        {
                            value: '开发商代理',
                            label: '开发商代理'
                        },
                        {
                            value: '物业',
                            label: '物业'
                        },
                        {
                            value: '转租客',
                            label: '转租客'
                        },
                        {
                            value: '二房东',
                            label: '二房东'
                        },
                    ]
                }],//房源类型
             houseadd:{
              name:'', // 楼盘name
              id:'',
              laga2:10,// 楼盘宽度
              Addconditions:[], //单元号
              area2:0,//总面积
              availability:70, //使用率
              fitment:'标准交付',//装修情况
              money1:'',//业主报价
              money3:'',//预估成交价
              money2:'',//按整套租金
              property:'',//物业费用单价
              propertyz:'',//物业费用zong价
              deposit:'', //押
              deposit2:'', //付
              favourable:'', //免租
              Negotiable:true,
              Negotiablese:true,
              miniterm:'',//最短租期
              availability2:false,//分割
              register:true,//注册
              Forsale:false,//可出售
              Forsale1:'',//可出售
              Forsale2:'',//可出售
              identity:[],//房源类型
              introduce:'',//备注
             }
          }
        },
        mounted(){
           this.ajaxName();//大楼名字
        },
        methods:{
         zuqi(){
          let a = Number(this.houseadd.area2),
              b = Number(this.houseadd.Forsale1),
              c = Number(this.houseadd.Forsale2)
           console.log(a)
           console.log(b)
           console.log(c)
           this.houseadd.Forsale2 = a*b
         },
         ajaxName(e){
          let _this = this;
           _this.loading1 = true;
          axios({
              method:'post',
              url:'/api/louname?name=',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
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
          .catch(function (err) {
              _this.$Notice.error({title: '大楼名字错误'});
          })
         },
         remoteMethod(query){
           let _this = this;
             if(query !== ''){
              _this.loading1 = true;
              // console.log(query)
               axios({
                method:'post',
                url:'/api/louname?name='+query,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                 })
                .then(function (res) {
                  _this.loading1 = false;
                  // console.log(res.data.message.length)
                  if(res.data.message.length > 0){
                   let data = res.data.message;
                    // console.log(data);
                    _this.metrosda = data;
                    let metros = [];
                      for (var i in data){
                          let nea = {
                             value: data[i],
                             label: data[i]
                            }
                        metros.push(nea)
                     }
                     _this.optionsName = metros;
                  }else if(res.data.message.length == 0){
                    _this.$Message.warning('没有找到'+query+', 请添加楼盘');
                  }
            
                })
                .catch(function (err) {
                    _this.$Notice.error({title: '大楼名字错误'});
                })
             }else{
              _this.ajaxName();//大楼名字
             }
         },
         ModalAdds(){
          let _this = this;
          if (_this.houseadd.name !=="") {
             _this.ModalAdd =  true;
          }else{
             _this.$Message.warning('请选择所属楼盘');
          }
          
         },
         Remconditions(e){
           if (this.houseadd.Addconditions.length == 1) {
             this.$Message.warning('至少保留一个单元号');
           }else{
            this.houseadd.Addconditions.splice(e, 1);
           }
           
         },
         Modals(e){
          this.ModalAdd = false;
           if (e == 0) {
            this.houseadd.area2 = 0;
            this.houseadd.laga2 = this.$refs.Addsed.add; //宽度
            this.houseadd.laga3 = this.$refs.Addsed.adds; //宽度
            this.houseadd.Addconditions = [];
            let Add = this.$refs.Addsed.Addclasstable;
            // console.log(Add);
            let datas = [];
            for (var i = 0; i < Add.length; i++) {
                let e = {
                   room:Add[i].name,
                   area:0,
                   note:''
                }
                datas.push(e)
            }
            this.houseadd.Addconditions = datas;
           }else{
           }
         },
         Caaddjia(){
          //相加
          let e = this.houseadd.Addconditions;
          let a = 0;
           for (var i = 0; i < e.length; i++) {
            let s = Number(e[i].area);
              a+=s;
           }
           this.houseadd.area2 = a;
         },
         Caaddjias(){
          let a = Number(this.houseadd.area2); //总面积
          let b = Number(this.houseadd.money3); //预估
          let e = Number(this.houseadd.property); //单价
          let s = a*b*365/12;
          let c = Math.round(s);
          let w = a*e;
          if (c === "") {
            console.log(0)
          }
          // console.log(a)
          // console.log(b)
          // console.log(c)
          this.houseadd.money2 = c;
          this.houseadd.propertyz = Math.round(w);
         },
         addEdit(e){
            if (e == 1) {
               this.lestlian1 = true
            }
             if (e == 2) {
               this.lestlian2 = true
            }
             if (e == 3) {
               this.lestlian3 = true
            }
             if (e == 4) {
               this.lestlian4 = true
            }
            if (e == 5) {
               this.$Message.warning('联系人添加五个');
            }
          },
           srctoole(e){
             if(e === 0){
              document.getElementById("addlianxi").scrollIntoView();
            }else if(e === 1){
              document.getElementById("addlimg").scrollIntoView();
            }
           },
          handleSubmit(){
             let _this = this;
             let yan = _this.houseadd;
             if (yan.name =='') {
                this.$Notice.warning({
                    title: '请填写所属楼盘',
                });
                return false;
             }else if(yan.Addconditions.length == 0){
                 this.$Notice.warning({
                    title: '请填添加单元号',
                });
                return false;
             }else if(yan.area2 ==''){
                 this.$Notice.warning({
                    title: '请填写总面积',
                });
                return false;
             }else if(yan.availability ==''){
                 this.$Notice.warning({
                    title: '请填使用率',
                });
                return false;
             }else if(yan.money1 =='' || yan.money2 =='' || yan.money3 ==''){
                 this.$Notice.warning({
                    title: '请填出租价格',
                });
                return false;
             }else if(yan.identity.length == 0){
                 this.$Notice.warning({
                    title: '请填房源类型',
                });
                return false;
             }
             // 以上验证
             // _this.modal1s = true;
             _this.loading = true;
             _this.lainxiren = this.$refs.getInput.moldx;
             _this.imgs = this.$refs.imgadd.img;
             _this.lainxirendata = [];
             _this.lainxirendata.push(this.$refs.getInput.moldx)
             if (_this.lestlian1) {
              _this.lainxirendata.push(this.$refs.getInputs1.moldx)
             }
             if (_this.lestlian2) {
              _this.lainxirendata.push(this.$refs.getInputs2.moldx)
             }
             if (_this.lestlian3) {
              _this.lainxirendata.push(this.$refs.getInputs3.moldx)
             }
             if (_this.lestlian4) {
              _this.lainxirendata.push(this.$refs.getInputs4.moldx)
             }
             // console.log(_this.lainxirendata)
             axios({
              method:'post',
              url:'/api/fangadd',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'fangadd':{
                name: _this.houseadd,
                img: _this.imgs,
                man:_this.lainxirendata
              }}
           })
            .then(function (res){
              _this.loading = false;
              // console.log( JSON.stringify(res))
              if (res.data.statusx == 200){
                _this.$Message.success('添加房源成功');
                _this.Clear()
              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
            })
            .catch(function (err) {
                 _this.loading = false;
                _this.$Notice.error({title: '提交失败'});
            })
          },
          Clear(){
             this.houseadd = {
              name:'', // 楼盘name
              id:'',
              laga2:10,// 楼盘宽度
              laga3:10,// 楼盘宽度
              Addconditions:[], //单元号
              area2:0,//总面积
              availability:70, //使用率
              fitment:'标准交付',//装修情况
              money1:'',//业主报价
              money3:'',//预估成交价
              money2:'',//按整套租金
              property:'',//物业费用单价
              propertyz:'',//物业费用zong价
              deposit:'', //押
              deposit2:'', //付
              favourable:'', //免租
              Negotiable:true,
              Negotiablese:true,
              miniterm:'',//最短租期
              availability2:false,//分割
              register:true,//注册
              Forsale:false,//可出售
              Forsale1:'',//可出售
              Forsale2:'',//可出售
              identity:[],//房源类型
              introduce:'',//备注
             }
          },
          changqeeeeee(value){
            let _this = this;
            if (value !== undefined) {
              axios({
                method:'post',
                url:'/api/lagaadd?name='+value,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
              .then(function (res) {
                  _this.houseadd.property = res.data.message["0"].property2
                  console.log(res.data.message["0"].property2)
                  _this.Addcondition = res.data.message;
                  _this.yiyouCard = res.data.message[2];
                  _this.Addsefas = true;
                  _this.worthName = true;
                  _this.houseadd.id = res.data.message[0].ofid;
                  _this.houseadd.Addconditions = []
              })
              .catch(function (err) {
                  // _this.$Notice.error({title: '大楼参数错误'});
              })
            }else{
                console.log('kong')
               _this.houseadd.id = ''
               _this.Addsefas = false;
               _this.worthName = false;
               _this.yiyouCard = [];
               _this.Addcondition = [];
            }
            
           
          }
      },
   watch:{
     houseadd: {
      handler: function (val, oldVal){
        // let _this = this;
        // if (val.name !==''){
        //  if (!_this.worthName) {
        //    _this.Addcondition = [];
        //    _this.yiyouCard = [];
        //    axios({
        //       method:'post',
        //       url:'/api/lagaadd?name='+val.name,
        //       headers:{Authorization:'Bearer '+Cookies.set('keya')},
        //    })
        //   .then(function (res) {
        //       // console.log(JSON.stringify(res.data.message))
        //       _this.Addcondition = res.data.message;
        //       _this.yiyouCard = res.data.message[2];
        //       _this.Addsefas = true;
        //       _this.worthName = true;
        //       _this.houseadd.id = res.data.message[0].ofid;
        //       _this.houseadd.Addconditions = []
        //   })
        //   .catch(function (err) {
        //       _this.$Notice.error({title: '大楼参数错误'});
        //   })
        //  }
           
        // }else if(val.name ==''){
        //    _this.Addsefas = false;
        //    _this.worthName = false;
        //    _this.yiyouCard = [];
        //    _this.Addcondition = [];
        // }

      },
      deep: true
    }
  }
};
</script>
