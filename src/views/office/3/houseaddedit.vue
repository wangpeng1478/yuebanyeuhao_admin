
<style lang="less">
.houseaddedit{
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
     max-height: 330px;
     overflow:auto;
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
       &:hover .extras{
        // display:block;
       }
      .ivu-tag{
        position:absolute;
        top:3px;
        right:0;
      }
      .extras{
        position:absolute;
        top:0px;
        right:8px;
        display:none;
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
   .mingCard{
     width: 300px;
     display: inline-block;
     vertical-align: top;
     margin: 5px;
     p{margin-bottom:5px;}
     .ivu-icon{
      font-size: 15px;
      width: 15px;
     }
     .editCard{
      position:absolute;
      top:3px;
      right:3px;
     }
   }
 }
</style>

<template>
   <div class="houseaddedit cf">
   <pre>{{houseadd}}</pre>
   <pre>{{manData}}</pre>
   <pre>{{dataimg}}</pre>
   <div v-if='jaizailock'> 
   <Form :model="houseadd" :label-width="80">
      <Card style="margin-bottom:15px;">
        <p slot="title">
            基本信息{{id}}
        </p>
          <Row>
            <Col :xs="18" :sm="18" :md="18" :lg="8">
               <FormItem label="所属楼盘" class="ivu-form-item-required addName">
                 <Input v-model="houseadd.name" class="selectsNmae" placeholder= '请搜索楼盘' readonly></Input>
                  <Tooltip class="addlianxi" content="添加联系人" placement="top">
                   <Button @click="srctoole(0)" type="dashed" icon="person-stalker"></Button> 
                </Tooltip>

                 <Tooltip class="addlimg" content="添加图片" placement="top">
                   <Button @click="srctoole(1)" type="dashed" icon="ios-analytics"></Button> 
                </Tooltip>
               </FormItem>  
            </Col>
          </Row>

          <Row>
            <Col>
              <FormItem label="门牌号" class="ivu-form-item-required">
                <Card class="cardseti">
                  <Card class="yiyouCard" v-for="(n,index) in houseadd.Addconditions" :key='index'>
                   <p slot="title" style="font-weight: 100;color:#2c6df1">
                    {{n.room}}
                   </p>
                   <Input v-model="n.area" size="small" placeholder="面积"><span slot="append">m²</span></Input>
                   <Input v-model="n.note" size="small" type="textarea" placeholder="备注" style="margin-top:5px;"></Input>
                  </Card>
                </Card>
              </FormItem>
            </Col>
          </Row>

          <Row>
          <Col style="width:278px;display:inline-block;">
             <FormItem label="总面积"  class="ivu-form-item-required">
                <Input v-model="houseadd.area2">
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
                     <Input size="large" v-model="houseadd.money3">
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
                    <Input placeholder="单价" v-model="houseadd.property">
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
              <div style="width:150px;display:inline-block;">
                  <Input v-model="houseadd.favourable" @on-blur="fatrue(0)">
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
              <div style="width:150px;display:inline-block;">
                  <Input v-model="houseadd.miniterm" @on-blur="fatrue(1)">
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
              <div style="width:150px;display:inline-block;">
                  <Input v-model="houseadd.Forsale1" @on-blur="fatrue(2)">
                      <span slot="append">元/m²</span>
                  </Input>
              </div>
               <div style="width:150px;display:inline-block;">
                  <Input v-model="houseadd.Forsale2" @on-blur="fatrue(3)">
                      <span slot="append">元</span>
                  </Input>
              </div>
              <div style="width:80px;display:inline-block;vertical-align:10px">
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
          <Card style="margin-top:15px;">
         <p slot="title">添加联系人</p>
         <a href="#" slot="extra" @click.prevent="clickMaid('')">
            <Icon type="plus-round"></Icon>
            添加联系人
         </a>
         <div id="addlianxi"></div>

          <Card v-for="(item, index) in manData" :key="item.length" class="mingCard">
            <Button class="editCard" type="error" size="small" @click="clickMaid(item.maid)">编辑</Button>
            <p><Icon type="person"></Icon> 姓名: {{item.name}}</p>
            <p><Icon type="ios-albums-outline"></Icon> 类别: {{item.moldx2}}</p>
            <p><Icon type="person-stalker"></Icon> 性别: {{item.gend}}</p>
           <div v-if='lookCard || toogless == index'>
            <div v-for="n in item.man2" :key="n.length">
              <p v-if="n.moldx == '公司名称'"><Icon type="ios-home-outline"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '手机'"><Icon type="iphone"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '固话'"><Icon type="ios-telephone"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '名片正'"><Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
              <p v-if="n.moldx == '名片反'"><Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
            </div>
          </div>
           <div v-else>
              <Button type="primary" size="small" @click="clickMaids(item.maid,index)">申请查看</Button>
            </div>
          </Card>
           <Modal
          v-model="clickCards">
          <img :src="clickCardsimg" style="width:500px;">
         </Modal>
          <Modal
        v-model="loocModel"
        title="填写理由">
        
        <Input v-model="loocModelvui" type="textarea" placeholder="填写理由..."></Input>

         <div slot="footer">
           <Button :loading="loadingLook" @click="footerYes" type="primary">
                <span v-if="!loadingLook">发送</span>
                <span v-else>发送中...</span>
           </Button>
           <Button  @click="footerNo" type="text">取消</Button>
         </div>
      </Modal>
       </Card>
      <!-- 联系人 -->
      <!-- img -->
       <Card style="margin-top:15px;">
        <div id="addlimg"></div>
         <p slot="title">上传图片</p>
          <Uploads v-bind:dataimg="dataimg" ref="imgadd"></Uploads>
       </Card>
      <!-- img -->
         <Card style="margin-top:15px;text-align: center;">
       <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
         <span v-if="!loading">修 改</span>
         <span v-else>修 改 中</span>
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
   <div v-else>加载中...</div>
   </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie';
import Uploads from '.././Upload/Uploads.vue';

export default {
    name: 'houseaddedit',
     components:{
        Uploads
     },
      data () {
          return {
             typedata:'房源联系人',
             id:'',
             miids:'',
             access:'',//权限
             lookCard:false,//查看联系人权限
             worthName:false,//监听
             loadingse: false,
             jaizailock: false,
             ModalAdd: false, //add单元
             Addcondition:{}, //子页面参数
             Addsefas:false,
             Negotiablese:true, //面议true
             Negotiableses:false, //出售true
             yiyouCard:[], //已有房源
             modal1s:false,
             loading:false,
             lainxirendata:[],
             imgs:{}, //图片
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
             },
             manData:[],//l 联系人
             toogless:-1, //查看index
             indexMaid:-1, //记录查看index
             clickCards:false, //名片
             clickCardsimg:'', //名片
             loocModel:false,//理由
             loocModelvui:'', //理由
             loadingLook:false, //理由查看
             dataimg:[], //img
          }
        },
        mounted(){
            let _this = this;
            _this.id = _this.$route.query.deal_id; //id
            _this.nameC(); //id编辑默认
            _this.lookLian(); //权限
        },
        methods:{
         nameC(){
          //id编辑默认
          let _this = this;
          axios({
              method:'post',
              url:'/api/fangup1?id='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
             // console.log(res)
             _this.houseadd = res.data.message.name
             _this.dataimg = res.data.message.img
             _this.manData = res.data.message.man
             _this.jaizailock = true
          })
          .catch(function (err) {
              _this.$Notice.error({title: '大楼参数错误'});
          })
        },
        Remconditions(e){
           if (this.houseadd.Addconditions.length == 1) {
              this.$Message.warning('至少保留一个单元号');
           }else{
             this.houseadd.Addconditions.splice(e, 1);
             this.$Message.success('拆分成功');
           }
         },
         lookLian(){
          let _this = this;
          axios({
                method: 'post',
                url: '/api/power',
                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
            })
            .then(function(res) {
                Cookies.set('auth', res.data.power); //权限
                _this.access = res.data.power;
                _this.lookCard = res.data.power.lou06
            })
            .catch(function(err) {
                _this.$Notice.error({ title: '权限获取错误' });
            })
          },
         Caaddjia(){
          //相加
          let e = this.houseadd.Addconditions;
          let a = 0;
           for (var i = 0; i < e.length; i++) {
            let s = parseInt(e[i].area);
              a+=s;
           }
           this.houseadd.area2 = a;
         },
         Caaddjias(){
          let a = parseInt(this.houseadd.area2); //总面积
          let b = parseInt(this.houseadd.money3); //预估
          let e = parseInt(this.houseadd.property); //单价
          let c = Math.round(a*b*365/12);
          if (c === "") {
            console.log(0)
          }
          this.houseadd.money2 = c;
          this.houseadd.propertyz = Math.round(a*e);
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
             // _this.lainxiren = this.$refs.getInput.moldx;
             _this.imgs = this.$refs.imgadd.img;
             axios({
              method:'post',
              url:'/api/fangup2?id='+ _this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'fangadd':{
                name: _this.houseadd,
                img: _this.imgs,
                man:[]
              }}
           })
            .then(function (res){
              _this.loading = false;
              // console.log( JSON.stringify(res))
              if (res.data.statusx == 200){
                _this.$Message.success('编辑房源成功');
              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
            })
            .catch(function (err) {
                 _this.loading = false;
                _this.$Notice.error({title: '提交失败'});
            })
          },
          clickMaid(e){
            //联系人添加编辑
            // console.log(e)
            let query = { 
              deal_id: e,
              ofid: this.houseadd.roid,
              eq:0
            };
            let querys = { 
              ofid: this.houseadd.roid,
              eq:1
            };
            if (e == ''){
                this.$router.push({
                 name: 'hou_setas',
                 query: querys
                });
            }else{
                this.$router.push({
                 name: 'hou_setas',
                 query: query
                });
            }  
          },
          clickCard(e){
            // 名片查看
            this.clickCardsimg = e;
            this.clickCards = true;
          },
           clickMaids(e,a){
            //申请查看
            let _this = this;
            _this.indexMaid = a;
            _this.miids = e;
            axios({
              method:'post',
              url:'/api/manlook1?maid='+e,
              headers:{Authorization:'Bearer '+Cookies.set('keya')}
           })
            .then(function (res){
              // console.log(res.data)
              if (res.data.statusx == 202){
                _this.loocModel = true
              }else if(res.data.statusx == 200){
                _this.toogless = a;
              }

            })
            .catch(function (err) {
              _this.$Notice.error({title: '查看失败'});
            })
          },

           footerYes(){
            //请填写理由理由
            let _this = this;
            if (_this.loocModelvui == '') {
              _this.$Message.info('请填写理由');
            }else{
              axios({
              method:'post',
              url:'/api/manlook2',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                maid:_this.id,  //id
                miids:_this.miids,  //id
                rema:_this.loocModelvui //理由
              }
           })
            .then(function (res){
              // console.log(res)
                _this.loocModelvui = '';
                _this.$Message.info('申请成功');
                _this.toogless = _this.indexMaid;
                _this.loocModel = false
            })
            .catch(function (err) {
              _this.$Notice.error({title: '理由失败'});
            })

            }
          },
           footerNo(){
            //请填写理由理由 取消
            let _this = this;
              _this.loocModelvui = ''
              _this.loocModel = false
          },
          fatrue(e){
            if (e==0) {
              if (this.houseadd.favourable !=='') {
                  this.houseadd.Negotiable = false
              }
            }else if(e==1){
              if (this.houseadd.miniterm !=='') {
                  this.houseadd.Negotiablese = false
              }
            }else if(e==2){
              if (this.houseadd.Forsale1 !=='') {
                  this.houseadd.Forsale = true
              }else if(this.houseadd.Forsale1 ==''&&this.houseadd.Forsale1 ==''){
                  this.houseadd.Forsale = false
              }
            }else if(e==3){
              if (this.houseadd.Forsale2 !=='') {
                  this.houseadd.Forsale = true
              }else if(this.houseadd.Forsale1 ==''&&this.houseadd.Forsale1 ==''){
                  this.houseadd.Forsale = false
              }
            }
          }

      }
};
</script>