
<style lang="less">
 .directoryaddst{
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

  @media (max-width: 1200px){
  .directoryaddst .unit .dsinblock2{
     width: 20%;
  }
  .directoryaddst .unit .dsinblock1, .directoryaddst .unit .dsinblock3 {
    width: 35%;
  }
}
@media (max-width: 1530px){
  .directoryaddst .top10s{
    width:100%;
  }
}
@media (max-width: 997px){
  .directoryaddst .top10s{
    width:50%;
  }
}
</style>

<template>
   <div class="directoryaddst cf">
   <pre>{{manData}}</pre>
    <Card>
        <p slot="title">
            <Icon type="ios-book-outline"></Icon>
            {{directoryadds.name}}企业名录编辑
        </p>
         <a href="#" slot="extra" @click.prevent="Edit">
              <Icon type="edit"></Icon>
              跟进
          </a>
 <div v-if="loadingdata">
         <Form :model="directoryadds" :label-width="85">
         <div class="wimax">
                 <FormItem label="楼盘名称"  class="ivu-form-item-required">
                   <Input v-model="directoryadds.name" disabled></Input>
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
                          <Checkbox @on-change='disabledse = !disabledse' v-model="directoryadds.unit.floor">
                         
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


<!-- laixniren -->
<Card style="margin-top:15px;">
    <p slot="title">
        <Icon type="navicon"></Icon>
        联系人
    </p>
         <a href="#" slot="extra" @click.prevent="clickMaid('')">
            <Icon type="plus-round"></Icon>
            添加联系人
         </a>
        <Card v-for="(item, index) in manData" :key="item.length" class="mingCard">
           <Button class="editCard" type="error" size="small" @click="clickMaid(item.maid)">编辑</Button>
            <p><Icon type="person"></Icon> 姓名: {{item.name}}</p>
            <p><Icon type="ios-albums-outline"></Icon> 类别: {{item.moldx2}}</p>
            <p><Icon type="person-stalker"></Icon> 性别: {{item.gend}}</p>
           <div v-for="n in item.man2" :key="n.length">
            <p v-if="n.moldx == '公司名称'">
                <Icon type="ios-home-outline"></Icon> {{n.moldx}}: {{n.subs}}</p>
            <p v-if="n.moldx == '手机'">
                <Icon type="iphone"></Icon> {{n.moldx}}: {{n.subs}}</p>
            <p v-if="n.moldx == '固话'">
                <Icon type="ios-telephone"></Icon> {{n.moldx}}: {{n.subs}}</p>
            <p v-if="n.moldx == '名片正'">
                <Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
            <p v-if="n.moldx == '名片反'">
                <Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
            </div>
        </Card>
        <div>
            <Modal v-model="clickCards">
                <img :src="clickCardsimg" style="width:500px;">
            </Modal>
        </div>
</Card>
<!-- laixniren -->

              <Card style="margin-top:15px;text-align: center;">
                 <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
                   <span v-if="!loading">修 改</span>
                   <span v-else>修 改 中</span>
                 </Button>
              </Card>
         </Form>

         </div>
          <Card v-else>加载中...</Card>
    </Card>
   
   </div>
</template>

<script>

import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'directoryaddst',
      data () {
          return {
             typedata:'企业名录联系人',
             id:'',
             manData:[],
             loading:false,
             loadingdata:false,
             disabledse:false,
             clickCardsimg:'',
             clickCards:false,
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
             }
          }
        },
        mounted(){
           this.id = this.$route.query.deal_id;
           this.lsetdata();
        },
        methods:{
          lsetdata(){
            let _this = this;
            axios({
              method:'post',
              url:'/api/enteup1?qyid='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
              .then(function (res){
                _this.loadingdata = true
                // console.log(res)
                _this.directoryadds = res.data.message.name
                _this.manData = res.data.message.man
              })
              .catch(function (err) {
                 _this.$Notice.error({title: '失败'});
              })
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
             axios({
              method:'post',
              url:'/api/enteup2?qyid='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'jo':{
                name: _this.directoryadds,
                man:[],
              }}
             })
              .then(function (res){
                _this.loading = false;
                // console.log(res)
                if (res.data.statusx == 200){
                  _this.$Message.success('修改企业名录成功');
                }else{
                  _this.$Notice.error({title: res.data.message});
                }
              })
              .catch(function (err) {
                   _this.loading = false;
                  _this.$Notice.error({title: '修改企业名录失败'});
              })   
          },
           clickCard(e){
             this.clickCardsimg = e;
             this.clickCards = true;
          },
          clickMaid(e){
            //联系人添加编辑
            let query = { 
              deal_id: e,
              ofid: this.directoryadds.qyid,
              eq:0
            };
            let querys = { 
              ofid: this.directoryadds.qyid,
              eq:1
            };
            if (e == ''){
                this.$router.push({
                 name: 'directory_tas',
                 query: querys
                });
            }else{
                this.$router.push({
                 name: 'directory_tas',
                 query: query
                });
            }  
          },
           Edit(){
              let query = { deal_id: this.id};
                this.$router.push({
                 name: 'directory_look',
                 query: query
                });
            },
        }
};
</script>

