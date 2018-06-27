
<style lang="less">
 .clientadd{
  .ivu-form-item {
    margin-bottom: 15px;
   }
   .Upload0{
    .ivu-upload{
      width:100%;
    }
    .buttse{
      position: absolute;
      right:0;
      top:0;
    }
   }
   .intention{
    .ivu-card-head{
      padding: 5px 10px;
    }
    .ivu-card-extra{
      top:0
    }
   }
   .Selectde{
    width:20%;
    display:inline-block;
   }
   .input-group {
    position: relative;
    display: table;
    border-collapse: separate;
    input{
        box-sizing: border-box;
        border: solid 1px #ddd;
        font-size: 12px;
        height: 31px;
        line-height: 1.42857;
        padding: 4px;
        border-right: none;
        text-align: center;
        width:35%;
        color: #495060;
    }
    input:focus{
      border-color: #57a3f3;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    }
    input:first-child{
      border-radius: 3px 0 0 3px;
    }
    span{
      display: inline-block;
      width: 30%;
      height: 31px;
      line-height: 31px;
      text-align: center;
      background-color: #eee;
      border: 1px solid #ccc;
      font-size: 12px;
      vertical-align: top;
      border-radius: 0 3px 3px 0;
    }
  }
  .onclick_text{
    list-style-type: none;
    li{
      display: inline-block;
      cursor: pointer;
      margin: 5px;
      background-color: #2d8cf0;
      font-size: 12px;
      color: #fff;
      height: 20px;
      line-height: 20px;
      padding: 1px 5px;
      border-radius: 3px;
      &:hover{
        opacity: 0.8;
      }
    }
  }
 }

 @media (max-width: 1100px){
  .clientadd .Selectde{
    width:40%;
    margin: 0 5px 5px 0
  }
}

</style>

<template>
   <div class="clientadd cf">
    <pre>{{clientadd}}</pre>
   <Form :model="clientadd" :label-width="85">
    <Card style="margin-bottom:15px;">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            基本信息
        </p>
        
        <Row>
          <Col style="padding:8px 5px;" :xs="24" :sm="24" :md="12" :lg="12" v-for="(n, index) in clientadd.contact" :key="n.length">
             <Card>
                <p slot="title">
                  <Icon type="person-add"></Icon>
                  联系人{{index+1}}
                </p>
                
                <a v-if="index==0" href="#" slot="extra" @click.prevent="addCliadd">
                    <Icon type="plus"></Icon>
                    添加联系人
                </a>
                <a v-else href="#" slot="extra" @click.prevent="removeCliadd(index)" style="color: #ed3f14;">
                    <Icon type="minus-round"></Icon>
                    删除联系人
                </a>

                 <FormItem label="客户姓名"  class="ivu-form-item-required">
                    <Input v-model="n.name" placeholder="请填写客户全称"></Input>
                 </FormItem>
                  <FormItem label="客户性别"  class="ivu-form-item-required">
                    <RadioGroup v-model="n.sex" type="button">
                        <Radio label="未知"></Radio>
                        <Radio label="男"></Radio>
                        <Radio label="女"></Radio>
                    </RadioGroup>
                 </FormItem>

                 <FormItem label="客户手机"  class="ivu-form-item-required">
                     <Input  v-model="n.phonenumber.name">
                       <Button @click="addclient(index)" slot="append" icon="plus"></Button>
                     </Input>
                 </FormItem>
                 <!-- add -->
                  <FormItem label="客户手机"  class="ivu-form-item-required" v-for="(item, indexx) in n.phonenumber.add" :key="item.length">
                     <Input  v-model="item.name">
                       <Button @click="removeclient(index,indexx)" slot="append" icon="minus-round"></Button>
                     </Input>
                  </FormItem>
                 <!-- add -->
                 <FormItem label="客户座机"  class="ivu-form-item-required cf">
                    <div style="display: inline-block;width:28%;vertical-align: top;">
                      <Input v-model="n.tel.name" placeholder="区号"></Input>
                    </div>
                     <div style="float:right;width:70%;vertical-align: top;">
                       <Input v-model="n.tel.names" placeholder="电话">
                        <Button @click="addclient1(index)" slot="append" icon="plus"></Button>
                       </Input>
                     </div>
                 </FormItem>
                 <!-- add -->
                 <FormItem label="客户座机"  class="ivu-form-item-required cf" v-for="(item, indexx) in n.tel.add" :key="item.length">
                    <div style="display: inline-block;width:28%;vertical-align: top;">
                      <Input v-model="item.name" placeholder="区号"></Input>
                    </div>
                     <div style="float:right;width:70%;vertical-align: top;">
                       <Input v-model="item.names" placeholder="电话">
                        <Button @click="removeclient1(index,indexx)" slot="append" icon="minus-round"></Button>
                       </Input>
                     </div>
                 </FormItem>
                 <!-- add -->
                  <FormItem label="客户邮箱"  class="ivu-form-item-required">
                     <Input  v-model="n.mail.name">
                       <Button @click="addclient2(index)" slot="append" icon="plus"></Button>
                     </Input>
                 </FormItem>
                 <!-- add -->
                  <FormItem label="客户邮箱"  class="ivu-form-item-required" v-for="(item, indexx) in n.mail.add" :key="item.length">
                     <Input  v-model="item.name">
                       <Button @click="removeclient2(index,indexx)" slot="append" icon="minus-round"></Button>
                     </Input>
                  </FormItem>
                 <!-- add -->
                  <FormItem label="客户身份"  class="ivu-form-item-required">
                       <Select v-model="n.Identity">
                          <Option value="行政|后勤|文秘">行政|后勤|文秘</Option>
                          <Option value="财务|审计|税务">财务|审计|税务</Option>
                          <Option value="法务|律师">法务|律师</Option>
                          <Option value="市场|销售">市场|销售</Option>
                          <Option value="经理|高管">经理|高管</Option>
                          <Option value="总经理|董事长">总经理|董事长</Option>
                          <Option value="其他">其他</Option>
                      </Select>
                 </FormItem>
                 <FormItem label="名片正" class="Upload0">
                      <Upload 
                        class="cf"
                        action="/api/imgup"
                        :headers="keys"
                        :format="['jpg','jpeg','png','gif']"
                        :on-success='onSuccess'
                        :on-error='onError'>
                        <div style="width: 100%;
                         text-align: center;
                         min-height:105px;
                         border-radius: 4px;
                         border: 1px dashed #dddee1">
                         <div v-if="n.cardz =='' " @click="Upload0(index)">
                           <Icon type="ios-cloud-upload" size="25" style="color: #3399ff;margin-top: 20px;"></Icon>
                           <p>点击上传名片正面</p>
                         </div>
                         <div v-else @click="Upload0(index)" style="width:100%;position:relative;">
                           <img :src="n.cardz" style="max-height: 140px;vertical-align: middle;">
                        </div>
                        </div>
                      </Upload>
                      <Button v-if="n.cardz !=='' " @click.prevent="modliser(n.cardz)" class='buttse' type="dashed" size='small'>查看大图</Button>
                 </FormItem>
                  <FormItem label="名片反" class="Upload0">
                       <Upload 
                        class="cf"
                        action="/api/imgup"
                        :headers="keys"
                        :format="['jpg','jpeg','png','gif']"
                        :on-success='onSuccessa'
                        :on-error='onErrora'>
                        <div style="width: 100%;
                         text-align: center;
                         min-height:105px;
                         border-radius: 4px;
                         border: 1px dashed #dddee1">
                         <div v-if="n.cardf =='' " @click="Upload0(index)">
                           <Icon type="ios-cloud-upload" size="25" style="color: #3399ff;margin-top: 20px;"></Icon>
                           <p>点击上传名片正面</p>
                         </div>
                         <div v-else @click="Upload0(index)" style="width:100%;position:relative;">
                           <img :src="n.cardf" style="max-height: 140px;vertical-align: middle;">
                         </div>
                        </div>
                      </Upload>
                      <Button v-if="n.cardf !=='' " @click.prevent="modliser(n.cardf)" class='buttse' type="dashed" size='small'>查看大图</Button>
                 </FormItem>
                  <Modal
                    v-model="modal1"
                    width='700px'
                    title="名片">
                    <img :src="model1Img" style="width:100%">
                 </Modal>
             </Card>
          </Col>
        </Row>

        <Row style="display: none;">
          <Col :xs="24" :sm="24" :md="12" :lg="8">
             <FormItem label="客户等级"  class="ivu-form-item-required">
                <RadioGroup v-model="clientadd.grade" type="button">
                    <Radio label="A">A级</Radio>
                    <Radio label="B">B级</Radio>
                    <Radio label="C">C级</Radio>
                </RadioGroup>
                <Alert style="margin:12px 0px 0 0" v-if="clientadd.grade =='A' ">A:半年内有需求的客户,一个月提醒一次,若无跟进24小时后
                        再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。</Alert>
                <Alert style="margin:12px 0px 0 0" v-if="clientadd.grade =='B' ">B:一年内有需求的客户,三个月提醒一次,若无跟进24小时后
                        再次跳窗提醒,若当日24点前还是无跟进将自动转为公客</Alert>
                <Alert style="margin:12px 0px 0 0" v-if="clientadd.grade =='C' ">C:二年内有需求的客户,六个月提醒一次,若无跟进24小时后
                        再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。</Alert>
             </FormItem>
          </Col>
        </Row>

        <Row>
          <Col :xs="24" :sm="24" :md="8" :lg="6">
             <FormItem label="公司名称">
                 <Input v-model="clientadd.gname"></Input>
             </FormItem>
          </Col>
          <Col :xs="24" :sm="24" :md="8" :lg="6">
             <FormItem label="公司规模">
                  <Select v-model="clientadd.scalex">
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
          </Col>
          <Col :xs="24" :sm="24" :md="8" :lg="6">
             <FormItem label="客户行业">
                 <Select v-model="clientadd.tradex">
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
          </Col>
        </Row>
        <Row v-if="!xanzsdasd">
           <Col :xs="24" :sm="24" :md="12" :lg="15">
             <FormItem label="原地址">
                <Select style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress" placeholder="请选择城区">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                </Select>
                <Input style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress1" placeholder="详细地址"></Input>
                <Input style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress2" placeholder="楼盘"></Input>
                <Input style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress3" placeholder="楼层"></Input>
                <Input style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress4" placeholder="门牌号"></Input>
                <div style="width:30%;display:inline-block;margin:2px; 2px 0 0">
                  <Button type="dashed" size="small" @click="xanzsdasd = !xanzsdasd">系统选择</Button>
                </div>
             </FormItem>
          </Col>
        </Row>

         <Row v-else>
           <Col :xs="24" :sm="24" :md="12" :lg="15">
             <FormItem label="原地址">
                <Select style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress" placeholder="请选择城区" @on-change="regionDtas">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                </Select>
                <Select style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress1" placeholder="请选择商圈" @on-change="regionDtas1">
                   <Option v-for="item in cityLists" :value="item.value" :key="item.value">{{ item.value }}</Option>
                </Select>
                <Select style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="clientadd.OriginalAddress2" placeholder="请选择楼盘" @on-change="regionDtas2">
                   <Option v-for="item in cityListss" :value="item.value" :key="item.value">{{ item.value }}</Option>
                </Select>
                 <Select style="width:30%;display:inline-block;margin:2px; 2px 0 0" v-model="fanguanse" placeholder="请选择房源" @on-change="regionDtas55">
                   <Option v-for="item in cityListsss" :value="item.value" :key="item.value">{{ item.value }}</Option>
                </Select>
                 <div style="width:30%;display:inline-block;margin:2px; 2px 0 0">
                  <Button type="dashed" size="small" @click="xanzsdasd = !xanzsdasd">点击填写</Button>
                </div>
                <!-- {{fanguanse}} -->
             </FormItem>
          </Col>
        </Row>

        <Row>
          <Col :xs="24" :sm="24" :md="12" :lg="6">
             <FormItem label="来源">
             <!-- {{clientadd.sourcx}} -->
                <Cascader :data="Cascaderdata" v-model="clientadd.sourcx" @on-change="clientadd.customize ='' "></Cascader>
                <Input v-if="clientadd.sourcx[1] == '自定义'" v-model="clientadd.customize" placeholder="自定义" style="margin-top:5px;"></Input>
                <Input v-if="clientadd.sourcx[1] == '朋友介绍显示'||clientadd.sourcx[1] == '朋友介绍隐藏'" v-model="clientadd.customize" placeholder="请填写介绍人姓名或备注" style="margin-top:5px;"></Input>
                <!-- 请填写介绍人姓名或备注 -->
             </FormItem>
          </Col>
        </Row>
    </Card>

     <Card style="margin-bottom:15px;">
        <p slot="title">
            <Icon type="chatbubble-working"></Icon>
             需求信息
        </p>
        <Row>
          <Col>
           <FormItem label="客户等级"  class="ivu-form-item-required">
              <RadioGroup v-model="clientadd.reasx" type="button">
                  <Radio label="开新公司"></Radio>
                  <Radio label="公司迁址"></Radio>
                  <Radio label="投资"></Radio>
                  <Radio label="公司扩租"></Radio>
                  <Radio label="其他"></Radio>
              </RadioGroup>
           </FormItem>
           </Col>
       </Row>
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="20">
           <FormItem label="客户意向">
               <Card class='intention' v-for="(n, index) in clientadd.intention" :key="n.length" style="margin:0 0 15px 0">
                   <p slot="title">
                      <Icon type="ios-film-outline"></Icon>
                      第{{index+1}}意向
                  </p>

                  <a v-if="index==0" href="#" slot="extra" @click.prevent="addintention">
                    <Icon type="plus"></Icon>
                    添加意向房源
                  </a>
                  <a v-else href="#" slot="extra" @click.prevent="removeintention(index)" style="color: #ed3f14;">
                      <Icon type="minus-round"></Icon>
                      删除意向房源
                  </a>
                    <div @click="regionDtaset(index)">
                      <Select class="Selectde" v-model="n.area" filterable  placeholder="请选择城区" @on-change="regionDta">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                      </Select>
                      <Select class="Selectde" v-model="n.subrange" filterable  placeholder="请选择商圈" @on-change="regionDta1">
                          <Option v-for="item in cittindex[index].cityLists" :value="item.label" :key="item.label">{{ item.label }}</Option>
                      </Select>
                       <Select class="Selectde" v-model="n.property" filterable  placeholder="请选择楼盘" @on-change="regionDta2">
                          <Option v-for="item in cittindex[index].cityListss" :value="item.label" :key="item.label">{{ item.label }}</Option>
                      </Select>
                      <Select class="Selectde" v-model="n.house" filterable  placeholder="请选择房源">
                          <Option v-for="item in cittindex[index].cityListsss" :value="item.label" :key="item.label">{{ item.label }}</Option>
                      </Select>
                      <Alert v-if="n.area !== ''" style="margin-top:10px">{{n.area}} {{n.subrange}} {{n.property}} {{n.house}}</Alert>
                    </div>
               </Card>
           </FormItem>
           </Col>
       </Row>

      <Row>
          <Col :xs="24" :sm="24" :md="12" :lg="6">
           <FormItem label="单价"  class="ivu-form-item-required">
              <div class="input-group">
                <input v-model="clientadd.minmo" type="text" maxlength="8">
                <input v-model="clientadd.maxmo" type="text" maxlength="8">
                <span>元/m²*天</span>
              </div>
           </FormItem>
           </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="6">
           <FormItem label="房源面积"  class="ivu-form-item-required">
              <div class="input-group">
                <input v-model="clientadd.minar" type="text" maxlength="8">
                <input v-model="clientadd.maxar" type="text" maxlength="8">
                <span>m²</span>
              </div>
           </FormItem>
           </Col>
       </Row>
        <Row>
          <Col :xs="24" :sm="24" :md="12" :lg="6">
           <FormItem label="总预算">
               <Input v-model="clientadd.budgetx">
                  <span slot="append">元</span>
              </Input>
           </FormItem>
           </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="6">
           <FormItem label="用房时间">
              <DatePicker v-model="clientadd.timey"  type="date" style="width:100%"></DatePicker>
           </FormItem>
           </Col>
       </Row>
        <Row>
          <Col :xs="24" :sm="24" :md="12" :lg="6">
           <FormItem label="工位数">
               <Input v-model="clientadd.posx">
                  <span slot="append">个</span>
              </Input>
           </FormItem>
           </Col>
       </Row>
       <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="24">
           <FormItem label="备注">
                 <ul class="onclick_text">
                    <li @click="addtexttaeaea('疑似中介')">疑似中介</li>
                    <li @click="addtexttaeaea('客户急需')">客户急需</li>
                    <li @click="addtexttaeaea('需要隔断')">需要隔断</li>
                    <li @click="addtexttaeaea('租金可商量')">租金可商量</li>
                    <li @click="addtexttaeaea('无分机号')">无分机号</li>
                    <li @click="addtexttaeaea('拎包入住')">拎包入住</li>
                    <li @click="addtexttaeaea('临近地铁')">临近地铁</li>
                    <li @click="addtexttaeaea('大开间')">大开间</li>
                    <li @click="addtexttaeaea('找商铺')">找商铺</li>
                </ul>
               <Input v-model="clientadd.remarksx" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="房屋详细信息，小区情况，周边配套，交通情况，对租客要求 ，入住时间" style="width:500px;"></Input>
           </FormItem>
           </Col>
       </Row>
    </Card>


         <Card style="margin-top:15px;text-align: center;">
           <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
             <span v-if="!loading">提 交</span>
             <span v-else>提 交 中</span>
           </Button>
       </Card>

    </Form>
   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'clientadd',
      data () {
          return {
             keys:{},
             regionDtasetindex:0,
             fanguanse:'',
             loading:false,
             xanzsdasd:false,
             cityList:[],
             cityLists: [], //城区
             cityListss: [], //城区
             cityListsss: [], //房源
             cittindex:[
             {
              cityLists: [], //城区
              cityListss: [], //城区
              cityListsss: [], //房源
             },
             {
              cityLists: [], //城区
              cityListss: [], //城区
              cityListsss: [], //房源
             },
             {
              cityLists: [], //城区
              cityListss: [], //城区
              cityListsss: [], //房源
             },
             {
              cityLists: [], //城区
              cityListss: [], //城区
              cityListsss: [], //房源
             }],
             Cascaderdata: [
                {
                    value: '网络',
                    label: '网络',
                    children: [
                        {
                            value: '越办越好',
                            label: '越办越好'
                        },
                        {
                            value: '搜房',
                            label: '搜房'
                        },
                        {
                            value: '安居客',
                            label: '安居客'
                        },
                        {
                            value: '58同城',
                            label: '58同城'
                        }, 
                        {
                            value: '自定义',
                            label: '自定义'
                        },  
                    ]
                },
                {
                    value: '扫楼',
                    label: '扫楼',
                    children:[{
                      value: '扫楼',
                      label: '扫楼',
                    }]
                }, 
                {
                    value: '开发',
                    label: '开发',
                    children: [
                        {
                            value: '企业名录',
                            label: '企业名录'
                        },
                        {
                            value: '业主跟进',
                            label: '业主跟进'
                        },
                        {
                            value: '企查查/天眼查',
                            label: '企查查/天眼查'
                        },
                        {
                            value: '驻守',
                            label: '驻守'
                        },
                        {
                            value: '自定义',
                            label: '自定义'
                        },

                    ]
                }, 
                 {
                    value: '来访',
                    label: '来访',
                    children: [
                        {
                            value: '上门来访',
                            label: '上门来访'
                        },
                        {
                            value: '自定义',
                            label: '自定义'
                        },
                    ]
                }, 
                {
                    value: '介绍',
                    label: '介绍',
                    children: [
                        {
                            value: '朋友介绍显示',
                            label: '朋友介绍显示'
                        },
                        {
                            value: '朋友介绍隐藏',
                            label: '朋友介绍隐藏'
                        },
                    ]
                 }
                ],
             clientadd:{
                contact:[
                  {
                    name:'', //客户姓名
                    sex:'未知', //客户性别 未知 男  女
                    phonenumber:{
                      name:'',
                      add:[]
                   },//手机
                   tel:{
                      name:'',
                      names:'',
                      add:[]
                   }, //固话
                  mail:{
                      name:'',
                      add:[]
                   },//手机
                   Identity:'',//身份
                   cardz:'',//正
                   cardf:'',//反
                  }
                ],
                grade:'B', //客户等级
                gname:'', //公司名称
               scalex:'',//公司规模
               tradex:'', //客户行业
               OriginalAddress:'', //原地址
               OriginalAddress1:'', //原地址
               OriginalAddress2:'', //原地址
               OriginalAddress3:'', //原地址
               OriginalAddress4:'', //原地址
               sourcx:[],//来源
               customize:'', //自定义
               reasx:'其他',
               intention:[
                   {
                    area:'',
                    subrange:'',
                    property:'',
                    house:'',
                   }
               ],
               minmo:'',
               maxmo:'',
               minar:'',
               maxar:'',
               budgetx:'',
               posx:'',
               timey:'',
               remarksx:'',
             },
             cardg:0,
             modal1: false,
             model1Img:'',
            
          }
        },
        mounted(){
          this.keys = {
             Authorization:'Bearer '+Cookies.set('keya')
          };
          let _this = this;
          axios({
              method:'post',
              url:'/api/region',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
              // console.log(res.statusx)
             _this.cityList = res.data.region;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })
        },
        methods:{
            regionDtaset(e){
              this.regionDtasetindex = e;
              console.log(this.regionDtasetindex)
            },
           addclient(e){
            this.clientadd.contact[e].phonenumber.add.push({
                   name:''
             })
           },
           removeclient(e,a){
              this.clientadd.contact[e].phonenumber.add.splice(a,1)
           },
           addclient1(e){
            this.clientadd.contact[e].tel.add.push({
                  name:'',
                  names:'',
             })
           },
           removeclient1(e,a){
              this.clientadd.contact[e].tel.add.splice(a,1)
           },
            addclient2(e){
            this.clientadd.contact[e].mail.add.push({
                   name:''
             })
           },
           removeclient2(e,a){
              this.clientadd.contact[e].mail.add.splice(a,1)
           },
           onSuccess(response, file, fileList){
              this.clientadd.contact[this.cardg].cardz = 'http://47.98.155.165'+response.message
              // console.log('http://47.98.155.165'+response.message)
          },
          onError(error, file, fileList){
               // console.log('文件上传失败')
              this.$Notice.warning({
                    title: '文件上传失败',
                    desc: file.name
                });
         },
         onSuccessa(response, file, fileList){
              this.clientadd.contact[this.cardg].cardf = 'http://47.98.155.165'+response.message
          },
          onErrora(error, file, fileList){
               // console.log('文件上传失败')
               this.$Notice.warning({
                    title: '文件上传失败',
                    desc: file.name
                });
         },
         Upload0(e){
           this.cardg = e
         },
         modliser(e){
          this.model1Img = e
          this.modal1 = true
         },
         addCliadd(){
           this.clientadd.contact.push({
                    name:'', //客户姓名
                    sex:'未知', //客户性别 未知 男  女
                    phonenumber:{
                      name:'',
                      add:[]
                   },//手机
                   tel:{
                      name:'',
                      names:'',
                      add:[]
                   }, //固话
                  mail:{
                      name:'',
                      add:[]
                   },//手机
                   Identity:'',//身份
                   cardz:'',//正
                   cardf:'',//反
             })
         },
         removeCliadd(e){
          this.clientadd.contact.splice(e,1)
         },
         Selectindex(e){
          console.log(e)
         },
         regionDta(value){
             for (var i = 0; i < this.cityList.length; i++) {
              if(value == this.cityList[i].value){
                this.cittindex[this.regionDtasetindex].cityLists = this.cityList[i].children;
              }  
             }
           },
         regionDta1(value){
          let _this = this;
          axios({
              method:'post',
              url:'/api/need1?subrange='+value,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.cittindex[_this.regionDtasetindex].cityListss = [];
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cittindex[_this.regionDtasetindex].cityListss = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })
         },
         regionDta2(value){
          let _this = this;
          axios({
              method:'post',
              url:'/api/need1?fname='+value,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.cittindex[_this.regionDtasetindex].cityListsss = [];
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cittindex[_this.regionDtasetindex].cityListsss = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })
         }, 
         regionDtas(value){
             for (var i = 0; i < this.cityList.length; i++) {
              if(value == this.cityList[i].value){
                this.cityLists = this.cityList[i].children;
              }  
             }
           },
         regionDtas1(value){
          let _this = this;
          axios({
              method:'post',
              url:'/api/need1?subrange='+value,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.cityListss = [];
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cityListss = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })
         },
         regionDtas2(value){
          let _this = this;
          axios({
              method:'post',
              url:'/api/need1?fname='+value,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.cityListsss = [];
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cityListsss = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })
         },
         addintention(){
              if (this.clientadd.intention.length == 4) {
                 this.$Message.warning('客户意向最多添加四个');
              }else{
                this.clientadd.intention.push({
                    area:'',
                    subrange:'',
                    property:'',
                    house:'',
                 })
              }
         },
         removeintention(e){
            this.clientadd.intention.splice(e,1)
         },
         addtexttaeaea(e){
           this.clientadd.remarksx = this.clientadd.remarksx+' '+e
         },
         handleSubmit(){
           let _this = this;

            if(_this.clientadd.contact["0"].name ==''){
                this.$Notice.warning({
                    title: '请填写客户姓名',
                });
                return false;
             }else if (_this.clientadd.contact["0"].Identity =='') {
                this.$Notice.warning({
                    title: '请填写客户身份',
                });
                return false;
             }else if (_this.clientadd.minmo =='' || _this.clientadd.maxmo =='') {
                this.$Notice.warning({
                    title: '请填写单价',
                });
                return false;
             }else if (_this.clientadd.minar =='' || _this.clientadd.maxar =='') {
                this.$Notice.warning({
                    title: '请填写房源面积',
                });
                return false;
             }
             if (_this.clientadd.contact["0"].phonenumber.name =='') {
               if(_this.clientadd.contact["0"].tel.name =='' || _this.clientadd.contact["0"].tel.names ==''){
                this.$Notice.warning({
                    title: '请填写客户手机/座机',
                });
                return false;
               }
             }
             // else if (_this.clientadd.contact["0"].tel.name =='' || _this.clientadd.contact["0"].tel.names =='') {
             //    this.$Notice.warning({
             //        title: '请填写客户座机',
             //    });
             //    return false;
             // }
             // return false;
            _this.loading = true;
            axios({
              method:'post',
              url:'/api/clueadd',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{jo:_this.clientadd}
           })
            .then(function (res){
              _this.loading = false;
              // console.log( JSON.stringify(res))
              if (res.data.statusx == 200){
                _this.$Message.success('添加客户成功');
                _this.restoe();
              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
            })
            .catch(function (err) {
                 _this.loading = false;
                _this.$Notice.error({title: '添加客户失败'});
            })

         },
         regionDtas55(value){
           this.clientadd.OriginalAddress3 = value
         },
         restoe(){
          this.clientadd = {
                contact:[
                  {
                    name:'', //客户姓名
                    sex:'未知', //客户性别 未知 男  女
                    phonenumber:{
                      name:'',
                      add:[]
                   },//手机
                   tel:{
                      name:'',
                      names:'',
                      add:[]
                   }, //固话
                  mail:{
                      name:'',
                      add:[]
                   },//手机
                   Identity:'',//身份
                   cardz:'',//正
                   cardf:'',//反
                  }
                ],
               grade:'B级', //客户等级
               gname:'', //公司名称
               scalex:'',//公司规模
               tradex:'', //客户行业
               OriginalAddress:'', //原地址
               OriginalAddress1:'', //原地址
               OriginalAddress2:'', //原地址
               OriginalAddress3:'', //原地址
               OriginalAddress4:'', //原地址
               sourcx:[],//来源
               customize:'', //自定义
               reasx:'其他',
               intention:[
                   {
                    area:'',
                    subrange:'',
                    property:'',
                    house:'',
                   }
               ],
               minmo:'',
               maxmo:'',
               minar:'',
               maxar:'',
               budgetx:'',
               posx:'',
               timey:'',
               remarksx:'',
             }
         }
        }
};
</script>

