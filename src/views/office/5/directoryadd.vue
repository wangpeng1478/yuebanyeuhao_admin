
<style lang="less">
 .directoryadd{
   .addlaixnienee{
    .ivu-card-extra{
    width: 52px;
    overflow: hidden;
    height: 23px;
    }
  }
  .selectsNmae{
    .ivu-select-not-found{
      display:none
    }
   }
   .ivu-form-item {
     margin-bottom: 15px;
   }
   .unit{
     .dsinblock1,.dsinblock3{
       width:40%;
       display:inline-block;
     }
     .dsinblock2{
      width:15%;
      display:inline-block;
      vertical-align: text-bottom;
      text-align: center;
     }
   }
   .wimax{
     max-width:700px;
   }

    .macheifh{
       max-height: 408px;
       overflow:hidden;
       overflow-y: auto;
     }
   .top10s{
     vertical-align: top;
     padding: 5px;
     width:50%;
     display:inline-block;
     .p{
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       span{
        font-weight: 600;
       }
     }
     .inde{
        position: absolute;
        top: 0;
        left: 0;
        background: #8eb9f5;
        color: #fff;
        width: 15px;
        display: block;
        height: 15px;
        line-height: 15px;
        text-align: center;
        border-radius: 4px 0 0 0;
     }
     .eq1{
      background:#f54545;
     }
     .eq2{
      background:#ff8547;
     }
     .eq3{
      background:#ffac38;
     }
   }
 }

  @media (max-width: 1200px){
  .directoryadd .unit .dsinblock2{
     width: 20%;
  }
  .directoryadd .unit .dsinblock1, .directoryadd .unit .dsinblock3 {
    width: 35%;
  }
}
@media (max-width: 1530px){
  .directoryadd .top10s{
    width:100%;
  }
}
@media (max-width: 997px){
  .directoryadd .top10s{
    width:50%;
  }
}
</style>

<template>
   <div class="directoryadd cf">
       <pre>{{directoryadds}}</pre>
       <pre>{{lainxirendata}}</pre>
       <pre>{{top10s}}</pre>
    <Card>
        <p slot="title">
            <Icon type="ios-book-outline"></Icon>
            企业名录添加
        </p>
         <Form :model="directoryadds" :label-width="85">
         <Row>
            <Col :xs="24" :sm="24" :md="8" :lg="8" style="padding:5px">
              <Card>
                 <p slot="title">
                    <Icon type="connection-bars"></Icon>
                    最近添加10条
                 </p>
                 <div class="macheifh">
                <div class="top10s" v-for="(item,index) in top10s" :key="item.length">
                 <Card>
                    <span :class="{ eq1:index==0,eq2:index==1,eq3:index==2 }" class="inde">{{index+1}}</span>
                    <p class="p" :title="item.name"><span>楼盘名称:</span> {{item.name}}</p>
                    <p class="p" :title="item.gname"><span>公司名称:</span> {{item.gname}}</p>
                    <p class="p"><span>单元号:</span> {{item.floorx}}F {{item.hnumber}}室</p>
                 </Card>
                </div>
                </div>
                 <Spin size="large" fix v-if="loadingtop10s"></Spin>
              </Card>
            </Col>
            <Col :xs="24" :sm="24" :md="16" :lg="16" style="padding:5px">
               <Card>
                 <p slot="title">
                    <Icon type="ios-book-outline"></Icon>
                    公司信息
                </p>
              <div class="wimax">
                 <FormItem label="楼盘名称"  class="ivu-form-item-required">
                     <Select 
                     v-model="directoryadds.name"
                     class="selectsNmae" 
                      filterable
                      clearable
                      remote
                      :remote-method="remoteMethod"
                      placeholder = '请搜索楼盘'
                      :loading="loadingse">
                      <Option v-for="(option, index) in optionsName" :value="option.value" :key="index">{{option.label}}</Option>
                  </Select>
                 </FormItem>

                 <FormItem label="公司名称"  class="ivu-form-item-required">
                      <Input v-model="directoryadds.companyname"></Input>
                 </FormItem>

                 <FormItem label="单元号"  class="ivu-form-item-required unit">
                      <div class="dsinblock1">
                          <Input v-model="directoryadds.unit.layers">
                          <span slot="append">F 楼层</span>
                          </Input>
                      </div>
                      <div class="dsinblock2">
                          <Checkbox @on-change='disabledse = !disabledse,directoryadds.unit.number=""' v-model="directoryadds.unit.floor">
                         
                           <span v-if="directoryadds.unit.floor">整层</span>
                                <span v-else>不是整层</span>
                          </Checkbox>
                      </div>
                      <div class="dsinblock3">
                          <Input v-model="directoryadds.unit.number" :disabled="disabledse">
                          <span slot="append">门牌号</span>
                          </Input>
                      </div>
                 </FormItem>
                  <FormItem label="公司规模">
                  <Select v-model="directoryadds.scalex">
                      <Option value="20人以下">20人以下</Option>
                      <Option value="20-50人">20-50人</Option>
                      <Option value="50-100人">50-100人</Option>
                      <Option value="100-200人">100-200人</Option>
                      <Option value="200-500人">200-500人</Option>
                      <Option value="500-800人">500-800人</Option>
                      <Option value="800-1500人">800-1500人</Option>
                      <Option value="1500人以上">1500人以上</Option>
                  </Select>
                 </FormItem>
                   <FormItem label="租户行业">
                         <Select v-model="directoryadds.tradex">
                          <Option value="IT|通信|电子|互联网">IT|通信|电子|互联网</Option>
                          <Option value="金融业">金融业</Option>
                          <Option value="房地产|建筑">房地产|建筑</Option>
                          <Option value="贸易|批发|零售|租赁业">贸易|批发|零售|租赁业</Option>
                          <Option value="生产|加工|制造">生产|加工|制造</Option>
                          <Option value="交通|运输|物流|仓储">交通|运输|物流|仓储</Option>
                          <Option value="服务业">服务业</Option>
                          <Option value="文化|传媒|娱乐|体育">文化|传媒|娱乐|体育</Option>
                          <Option value="文体教育|工艺美术">文体教育|工艺美术</Option>
                          <Option value="能源|矿产|环保">能源|矿产|环保</Option>
                          <Option value="商业服务">商业服务</Option>
                          <Option value="政府|非盈利机构">政府|非盈利机构</Option>
                          <Option value="农|林|牧|渔">农|林|牧|渔</Option>
                          <Option value="机械设备|医疗器械">机械设备|医疗器械</Option>
                          <Option value="其他">其他</Option>
                        </Select>
                 </FormItem>

                  <FormItem label="租约到期">
                       <div style="display: inline-block;">
                       <DatePicker v-model="directoryadds.time" type="date" placeholder="选择日期"></DatePicker></div>
                       <div style="display: inline-block;">
                       <Checkbox v-model="directoryadds.timeyes">
                                <span v-if="directoryadds.timeyes">在租</span>
                                <span v-else>不在租</span>
                       </Checkbox></div>
                  </FormItem>
                   <FormItem label="备注">
                       <Input v-model="directoryadds.remarksx" type="textarea" :autosize="{minRows: 4,maxRows: 5}"></Input>
                  </FormItem>
                </div>
              </Card>
            </Col>
         </Row>

       <Row>
         <Col>
          <!-- 联系人 -->
          <Card style="margin-top:15px;" class="addlaixnienee">
            <p slot="title">添加联系人1 
                <Checkbox v-model="directoryadds.toggle.show1">
                    <span v-if="!directoryadds.toggle.show1">公开</span>
                    <span v-else>隐藏</span>
                </Checkbox>
              </p>
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

         <contacts :typedata="typedata" ref="getInput"></contacts>
         <Card style='margin-top:15px' v-if="lestlian1">
         <p slot="title">添加联系人2 <Checkbox v-model="directoryadds.toggle.show2">
                    <span v-if="!directoryadds.toggle.show2">公开</span>
                    <span v-else>隐藏</span>
                </Checkbox></p>
          <a href="#" slot="extra" @click.prevent="lestlian1 = false,directoryadds.toggle.show2=false">
            <Icon type="plus-round"></Icon>
             删除
          </a>
           <contacts :typedata="typedata" ref="getInputs1"></contacts>
         </Card>

         <Card style='margin-top:15px' v-if="lestlian2">
         <p slot="title">添加联系人3 <Checkbox v-model="directoryadds.toggle.show3">
                    <span v-if="!directoryadds.toggle.show3">公开</span>
                    <span v-else>隐藏</span>
                </Checkbox></p>
          <a href="#" slot="extra" @click.prevent="lestlian2 = false,directoryadds.toggle.show3=false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs2"></contacts>
         </Card>
         <Card style='margin-top:15px' v-if="lestlian3">
          <p slot="title">添加联系人4 <Checkbox v-model="directoryadds.toggle.show4">
                    <span v-if="!directoryadds.toggle.show4">公开</span>
                    <span v-else>隐藏</span>
                </Checkbox></p>
          <a href="#" slot="extra" @click.prevent="lestlian3 = false,directoryadds.toggle.show4=false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs3"></contacts>
         </Card>
         <Card style='margin-top:15px' v-if="lestlian4">
          <p slot="title">添加联系人5 <Checkbox v-model="directoryadds.toggle.show5">
                    <span v-if="!directoryadds.toggle.show5">公开</span>
                    <span v-else>隐藏</span>
                </Checkbox></p>
          <a href="#" slot="extra" @click.prevent="lestlian4 = false,directoryadds.toggle.show5=false">
           <Icon type="plus-round"></Icon>
            删除
          </a>
           <contacts :typedata="typedata" ref="getInputs4"></contacts>
         </Card>
       </Card>
          <!-- 联系人 -->
         </Col>
       </Row>


        <Card style="margin-top:15px;text-align: center;">
           <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
             <span v-if="!loading">提 交</span>
             <span v-else>提 交 中</span>
           </Button>
        </Card>


         </Form>
    </Card>

   </div>
</template>

<script>

import axios from 'axios'
import Cookies from 'js-cookie';
import contacts from '.././contacts/contacts.vue';

export default {
    name: 'directoryadd',
    components: {
        contacts
    },
      data () {
          return {
             typedata:'企业名录联系人',
             directoryadds:{
                name:'', //楼盘名称
                companyname:'', //公司名称
                unit:{
                  layers:'', //楼层
                  floor:false,
                  number:'', //门牌号
                },
                scalex:'', //公司规模
                tradex:'', //租户行业
                time:'', //租约到期
                timeyes:true, //租约到期
                remarksx:'', //租约到期
                toggle:{
                  show1:false,
                  show2:false,
                  show3:false,
                  show4:false,
                  show5:false,
                }
             },
             optionsName:[],//大楼名字
             lainxirendata:[],//联系人
             loadingse: false,
             disabledse: false,
             lestlian1:false,
             lestlian2:false,
             lestlian3:false,
             lestlian4:false,
             lestlian5:false,
             loading:false,
             top10s:[],
             loadingtop10s:true
          }
        },
        mounted(){
          this.ajaxName();//大楼名字
          this.top10();//大楼名字
        },
        methods:{
        top10(){
          let _this = this;
          _this.loadingtop10s = true
          axios({
              method:'post',
              url:'/api/entetop10',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
             _this.top10s = res.data.message
             _this.loadingtop10s = false
          })
          .catch(function (err) {
              _this.$Notice.error({title: 'top10错误'});
          })
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
          handleSubmit(){
             let _this = this;
             let yan = _this.directoryadds;
             if (yan.name =='') {
                this.$Notice.warning({
                    title: '请填写写字楼名称',
                });
                return false;
             }else if(yan.companyname ==''){
                 this.$Notice.warning({
                    title: '请填写公司名称',
                });
                return false;
             }else if(yan.unit.layers ==''){
                 this.$Notice.warning({
                    title: '单元号',
                });
                return false;
             }
             _this.loading = true;
             _this.lainxirendata = [];
             var a1 = this.$refs.getInput.moldx;
                 a1.master = this.directoryadds.toggle.show1;
             _this.lainxirendata.push(a1)
             if (_this.lestlian1) {
                var a2 = this.$refs.getInputs1.moldx;
                 a2.master = this.directoryadds.toggle.show2;
                 _this.lainxirendata.push(a2)
             }
             if (_this.lestlian2) {
                var a3 = this.$refs.getInputs2.moldx;
                 a3.master = this.directoryadds.toggle.show3;

              _this.lainxirendata.push(a3)
             }
             if (_this.lestlian3) {
                var a4 = this.$refs.getInputs3.moldx;
                 a4.master = this.directoryadds.toggle.show4;

              _this.lainxirendata.push(a4)
             }
             if (_this.lestlian4) {
                var a5 = this.$refs.getInputs4.moldx;
                 a5.master = this.directoryadds.toggle.show5;

              _this.lainxirendata.push(a5)
             }
             // console.log(_this.lainxirendata)
             axios({
              method:'post',
              url:'/api/enteadd',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'jo':{
                name: _this.directoryadds,
                man:_this.lainxirendata
              }}
             })
              .then(function (res){
                _this.loading = false;
                // console.log(res)
                if (res.data.statusx == 200){
                  _this.$Message.success('添加企业名录成功');
                  _this.Clear()
                  _this.top10()
                  _this.$Notice.info({
                    title: '添加企业名录成功',
                    desc: '您还可以继续添加！'
                  });

                }else if(res.data.statusx == 202){
                  _this.$Notice.error({title: res.data.message});
                }
              })
              .catch(function (err) {
                   _this.loading = false;
                  _this.$Notice.error({title: '添加企业名录失败'});
              })
              
          },
          Clear(){
             this.directoryadds.companyname = ''; 
             this.directoryadds.scalex = ''; 
             this.directoryadds.tradex = ''; 
             this.directoryadds.time = ''; 
             this.directoryadds.timeyes = true; 
             this.directoryadds.remarksx = ''; 
             this.directoryadds.unit = {
                  layers:'', //楼层
                  floor:false,
                  number:'', //门牌号
                };
             this.directoryadds.toggle = {
                  show1:false,
                  show2:false,
                  show3:false,
                  show4:false,
                  show5:false,
                }
             this.lainxirendata = []
             this.lestlian1 = false;
             this.lestlian2 = false;
             this.lestlian3 = false;
             this.lestlian4 = false;
             this.lestlian5 = false;

          }
        }
};
</script>

