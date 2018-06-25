
<style lang="less">
 .contacts{
   .title_botton{
     padding: 8px 50px;
     margin: 0 0 20px;
     border-bottom: 1px dotted #D5D9DC;
     font-size: 12px;
     color: #B9BEC3;
     font-weight: bold;
   }
   .quhao{
    width:25%;
    display:inline-block;
   }
   .phones{
    width:73%;
    float: right;
   }
   .tow5{
    width:45%;
    display:inline-block;
    margin:0.5%;
   }
   .shangcss{
    .ivu-upload-select{
      display:block;
    }
   }
 }
</style>

<template>
   <div class="contacts cf">
<Row>
<Col :xs="24" :sm="24" :md="12" :lg="12">
  <div class="title_botton">基本信息</div>
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="24">
             <FormItem label="姓名">
               <Input v-model="moldx.name"></Input>
             </FormItem>  
          </Col>
           <Col :xs="24" :sm="24" :md="24" :lg="24">
             <FormItem label="性别">

               <RadioGroup v-model="moldx.gend" type="button">
                  <Radio label="未知"></Radio>
                  <Radio label="男"></Radio>
                  <Radio label="女"></Radio>
               </RadioGroup>

             </FormItem>  
          </Col>
        </Row>
        <Row>
           <Col :xs="24" :sm="24" :md="24" :lg="24">
             <FormItem label="类型">
                  <Select v-model="moldx.types" @on-change="typechang">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
             </FormItem>  
           </Col>

          <Col v-if="typessshohide" :xs="24" :sm="24" :md="24" :lg="24">
             <FormItem label="身份">
                  <Select v-model="moldx.moldx2">
                      <Option v-for="item in cityLists" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
             </FormItem>  
           </Col>

           <Col v-if="!typessshohide" :xs="24" :sm="24" :md="24" :lg="24">
             <FormItem label="身份">
                  <Select v-model="moldx.moldx2">
                      <Option v-for="item in cityListss" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
             </FormItem>  
           </Col>


        </Row>
         <div class="title_botton">联系方式</div>

         <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="手机">
                 <Input  v-model="moldx.phonenumber.names">
                   <Button @click="clickaddp" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
         </Row>

         <Row v-for="(item, index) in moldx.phonenumber.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="手机">
                 <Input v-model="item.name">
                   <Button @click="clickremovep(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
         </Row>

          <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="固话">
                 <Input v-model="moldx.fixedline.q" class="quhao" placeholder="区号"></Input>
                 <Input v-model="moldx.fixedline.h" class="phones" placeholder='固话'>
                   <Button @click="clickaddf" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
         </Row>

          <Row v-for="(item, index) in moldx.fixedline.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="固话">
                 <Input v-model="item.q" class="quhao" placeholder="区号"></Input>
                 <Input v-model="item.h" class="phones" placeholder='固话'>
                   <Button @click="clickremovef(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
         </Row>


         <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="传真">
                 <Input v-model="moldx.fax"></Input>
               </FormItem>  
            </Col>
         </Row>

          <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="邮箱">
                 <Input v-model="moldx.mailbox"></Input>
               </FormItem>  
            </Col>
          </Row>
        <div class="title_botton">名片</div>
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="12">
               <FormItem label="名片正面" class="shangcss">
                  <Upload 
                  action="/api/imgup"
                  :headers="keys"
                  :format="['jpg','jpeg','png','gif']"
                  :on-success='onSuccess'
                  :on-error='onError'>
                  <div style="width: 100%;
                   height:110px;
                   text-align: center;
                   padding:10px 0;
                   border-radius: 4px;
                   border: 1px dashed #dddee1">
                   <div v-if="moldx.cardz =='' ">
                     <Icon type="ios-cloud-upload" size="25" style="color: #3399ff;margin-top: 10px;"></Icon>
                     <p>点击上传名片正面</p>
                   </div>
                   <div v-else>
                     <img :src="moldx.cardz" style="height:98px;">
                  </div>
                  </div>
                  </Upload>
               </FormItem>  
             </Col>

             <Col :xs="24" :sm="24" :md="24" :lg="12">
               <FormItem label="名片反面" class="shangcss">
                  <Upload 
                  action="/api/imgup"
                   :headers="keys"
                  :format="['jpg','jpeg','png','gif']"
                  :on-success='onSuccessa'
                  :on-error='onErrora'>
                  <div style="width: 100%;
                   height:110px;
                   text-align: center;
                   padding:10px 0;
                   border-radius: 4px;
                   border: 1px dashed #dddee1">
                   <div v-if="moldx.cardf =='' ">
                     <Icon type="ios-cloud-upload" size="25" style="color: #3399ff;margin-top: 10px;"></Icon>
                     <p>点击上传名片反面</p>
                   </div>
                   <div v-else>
                     <img :src="moldx.cardf" style="height:98px;">
                  </div>
                  </div>
                  </Upload>
               </FormItem>  
             </Col>
          </Row>
          <Row>
            <Col>
              <FormItem>
                  <!-- <Button type="primary" icon="iphone" @click="upuoks">手机上传名片</Button> -->
                  <p>{{webid}}</p>
                <Modal v-model="upphone" width="400" :closable="false" :mask-closable="false">
                    <p slot="header" style="text-align:center">
                        <Icon type="iphone"></Icon>
                        <span>手机上传名片</span>
                    </p>
                    <div style="text-align:center">
                        <canvas id="qrccode-canvass"></canvas>
                        <Alert show-icon>上传完毕后点击 <b>“我已上传完毕”</b> 即可</Alert>
                    </div>
                    <div slot="footer">
                        <Button type="primary" :loading="modal_loading" @click="uppones" long>“我已上传完毕”</Button>
                    </div>
                </Modal>
              </FormItem>
            </Col>
          </Row>
</Col>

<Col :xs="24" :sm="24" :md="12" :lg="12">
  <div class="title_botton">公司信息</div>

       <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="公司名称">
                 <Input v-model="moldx.firmname.name">
                   <Button @click="clickaddgong" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>

        <Row v-for="(item, index) in moldx.firmname.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="公司名称">
                 <Input v-model="item.name">
                   <Button @click="clickremovegong(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>

       <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="部门">
                 <Input v-model="moldx.department.name">
                   <Button @click="clickadddep" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>

        <Row v-for="(item, index) in moldx.department.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="部门">
                 <Input v-model="item.name">
                   <Button @click="clickremovedep(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>


        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="职位">
                 <Input v-model="moldx.positions.name">
                   <Button @click="clickadddpositi" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>

       <Row v-for="(item, index) in moldx.positions.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="职位">
                 <Input v-model="item.name">
                   <Button @click="clickremovepositi(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>

        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="地址">
                 <Input class='tow5' v-model="moldx.areas" placeholder="区域"></Input>
                 <Input class='tow5' v-model="moldx.addresss" placeholder="详细地址"></Input>
                 <Input class='tow5' v-model="moldx.propertys" placeholder="楼盘"></Input>
                 <Input class='tow5' v-model="moldx.housenumbers" placeholder="门牌号"></Input>
               </FormItem>  
            </Col>
       </Row>
       <div class="title_botton">其他信息</div>

         <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="社交网络">
                 <Select class="quhao" v-model="moldx.socials.l">
                      <Option value="微信">微信</Option>
                      <Option value="QQ">QQ</Option>
                      <Option value="新浪微博">新浪微博</Option>
                  </Select>
                 <Input class="phones" v-model="moldx.socials.n">
                   <Button @click="clickadddsocia" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
         </Row>

          <Row v-for="(item, index) in moldx.socials.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="社交网络">
                 <Select class="quhao" v-model="item.l">
                      <Option value="微信">微信</Option>
                      <Option value="QQ">QQ</Option>
                      <Option value="新浪微博">新浪微博</Option>
                  </Select>
                 <Input class="phones" v-model="item.n">
                   <Button @click="clickremovesocia(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
         </Row>

               <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="隐藏内容">
                 <Input v-model="moldx.showname.name">
                   <Button @click="clickadddposshow" slot="append" icon="plus"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>

       <Row v-for="(item, index) in moldx.showname.add" :key="item.length">
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="隐藏内容">
                 <Input v-model="item.name">
                   <Button @click="clickreomeese(index)" slot="append" icon="minus-round"></Button>
                 </Input>
               </FormItem>  
            </Col>
       </Row>
          <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
               <FormItem label="备注">
                 <Input v-model="moldx.contactsnote" type="textarea" :rows="4"></Input>
               </FormItem>  
            </Col>
          </Row>
</Col>
</Row>
   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';
import qrcode from 'qrcode'
var QRCode = require('qrcode')
var canvas = ''
export default {
    name: 'contacts',
    props:[
        "typedata"
    ],
      data () {
          return {
             keys:{},
             webid:'',
             master:Cookies.set('user'),
             upphone:false,
             modal_loading:false,
             cityList:[{
                        value: '楼盘联系人',
                        label: '楼盘联系人'
                    },
                    {
                        value: '房源联系人',
                        label: '房源联系人'
                    },
                    {
                        value: '客户',
                        label: '客户'
                    },
                     {
                        value: '企业名录联系人',
                        label: '企业名录联系人'
                     },
                     {
                        value: '介绍人',
                        label: '介绍人'
                     },
                      {
                        value: '品牌联系人',
                        label: '品牌联系人'
                     },
                      {
                        value: '网点联系人',
                        label: '网点联系人'
                     },
                     
                    ],
             cityLists:[{
                  value: '未知',
                  label: '未知'
             },
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
                  value: '小业主',
                  label: '小业主'
             },
             {
                  value: '二房东',
                  label: '二房东'
             },
             {
                  value: '转租客',
                  label: '转租客'
             }],
              cityListss:[{
                  value: '未知',
                  label: '未知'
             },
             {
                  value: 'ss',
                  label: 'ss'
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
                  value: '小业主',
                  label: '小业主'
             },
             {
                  value: '二房东',
                  label: '二房东'
             },
             {
                  value: '转租客',
                  label: '转租客'
             }],
             typessshohide:true,
             moldx:{
               name:'',//姓名
               gend:'未知', //性别
               types:'', //类型
               moldx2:'', //身份
               phonenumber:{
                names:'',
                add:[]
               },//手机
               fixedline:{
                q:'',
                h:'',
                add:[]
               },//固话
               fax:'',//传真
               mailbox:'',//邮箱
               firmname:{
                name:'',
                add:[]
               },//公司名字
               department:{
                 name:'',
                 add:[]
               },//部门
               positions:{
                 name:'',
                 add:[]
               },//职位
               areas:'',//区域
               addresss:'',//详细地址
               propertys:'',//楼盘
               housenumbers:'',//门牌号
               socials:{
                l:'',
                n:'',
                add:[]
               },//社交
               contactsnote:'',//备注
               showname:{
                 name:'',
                 add:[]
               },
               cardz:'',
               cardf:'',//名片
             }
          }
        },
        mounted(){
          
          // console.log(this.typedata)
          this.moldx.types = this.typedata
            this.keys = {
               Authorization:'Bearer '+Cookies.set('keya')
            };
        },
        methods:{
          qrcode () {
            let url = 'http://www.yuebanyuehao.com/admin/upload2.html?data='+this.webid+','+this.master
            QRCode.toCanvas(document.getElementById('qrccode-canvass'), url, (error) => {
              if (error) {
                console.log(error)
              } else {
                console.log('ok')
              }
            })
         }, 
         upuoks(){
          this.webid = Math.random().toString(16).substring(2)
          this.qrcode();
          this.upphone = true
         },
          uppones(){
        let _this = this;
        _this.modal_loading = true
          axios({
                method:'post',
                url:'/api/webupend',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                data:{
                  webid:_this.webid,
                  master:_this.master
                }
             })
            .then(function (res) {
                //console.log(res.data.message)
                // _this.moldx.cardz = 'http://47.98.155.165'+
                // _this.moldx.cardf = 'http://47.98.155.165'+
                 _this.modal_loading = false
                 _this.upphone = false
            })
            .catch(function (err) {
                _this.$Notice.error({title: '错误'});
            })
       },
           clickaddp(){
             this.moldx.phonenumber.add.push({
                   name:''
             })
           },
           clickremovep(e){
            this.moldx.phonenumber.add.splice(e,1)
           },
           clickaddf(){
            this.moldx.fixedline.add.push({
                  q:'',
                  h:''
            })
           },
           clickremovef(e){
            this.moldx.fixedline.add.splice(e,1)
           },
           clickaddgong(){
             this.moldx.firmname.add.push({
                   name:''
            })
           },
           clickremovegong(e){
            this.moldx.firmname.add.splice(e,1)
           },
           clickadddep(){
            this.moldx.department.add.push({
                   name:''
            })
          },
          clickremovedep(e){
            this.moldx.department.add.splice(e,1)
           },
           clickadddpositi(){
              this.moldx.positions.add.push({
                   name:''
             })
            },
            clickremovepositi(e){
            this.moldx.positions.add.splice(e,1)
           },
           clickadddsocia(){
            this.moldx.socials.add.push({
                l:'',
                n:'',
             })
           },
           clickremovesocia(e){
            this.moldx.socials.add.splice(e,1)
           },
           clickadddposshow(){
            this.moldx.showname.add.push({
                   name:''
             })
           },
           clickreomeese(e){
             this.moldx.showname.add.splice(e,1)
           },
           onSuccess(response, file, fileList){
              // console.log('文件上传成功')
              console.log(response.message)
              this.moldx.cardz = 'http://www.yuebanyuehao.com'+response.message
          },
          onError(error, file, fileList){
               // console.log('文件上传失败')
              this.$Notice.warning({
                    title: '文件上传失败',
                    desc: file.name
                });
         },
         onSuccessa(response, file, fileList){
              // console.log('文件上传成功')
              console.log(response.message)
              this.moldx.cardf = 'http://www.yuebanyuehao.com'+response.message
          },
          onErrora(error, file, fileList){
               // console.log('文件上传失败')
               this.$Notice.warning({
                    title: '文件上传失败',
                    desc: file.name
                });
         },
         typechang(e){
           if (e == '房源联系人' || e == '楼盘联系人') {
              this.typessshohide = true;
           }else{
              this.typessshohide = false;
           }
         }
        }
}
</script>

