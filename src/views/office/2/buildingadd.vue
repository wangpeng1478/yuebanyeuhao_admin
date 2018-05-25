<style lang="less">
.buildingadd{
  .addlaixnienee{
    .ivu-card-extra{
    width: 52px;
    overflow: hidden;
    height: 23px;
    }
  }

   .imgMap{
     width: 100%;
     height: 400px;
     min-height: 300px;
     border: 1px dashed rgb(204, 204, 204);
   }
   .ivu-form-item{
    margin-bottom: 10px;
   }
   .melese{
      margin-right: 5px;
   }
   .maps{
    .ivu-form-item-content{
      &:after{ 
        content:"";
        position:absolute;
        display: block;
        width:100%;
        height:100%;
        z-index: 99;
        top: 0;
        left:0;
      }
    }
    .amap-logo,.amap-copyright{
      display:none !important;
    }
   }
   .subways{
    .ivu-card-head{
      padding: 7px 16px;
    }
    .ivu-card-extra{
      height:37px;
      top:0;
      line-height: 50px;
      width:auto;
    }
    .ivu-card-body{
      height:150px;
      overflow: auto;
    }
   }
   .ivu-input-group-append{
    width: 34px;
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
   .septuijian{
    -webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;
    cursor: pointer;
     &:hover{
      opacity: 0.7;
      background: #eee;
     }
   }
}
@media (min-width: 992px){
  .meleses{
    padding-left: 100px;
    margin-bottom:8px;
  }
}
@media (min-width: 768px){
  .meleses{
    padding-left: 100px;
    margin-bottom:8px;
  }
}
@media (max-width: 765px){
  .meleses{
    padding-left: 100px;
    margin-bottom:8px;
  }
}
@media (min-width: 1200px){
  .meleses{
    padding-left: 0;
    margin-bottom:0;
  }
}
</style>

<template>
   <div class="buildingadd cf">
   <pre>{{loupnAdd}}</pre>
  <Form :model="loupnAdd" :label-width="100">
     <Card>
       <p slot="title">基本信息</p>
         <Row>
            <Col :xs="20" :sm="20" :md="18" :lg="10" class="addName">
               <FormItem label="写字楼名称" class="ivu-form-item-required">
                 <AutoComplete
                  v-model="loupnAdd.name"
                  @on-search="handleSearch"
                  @on-select="nameClick"
                  placeholder="写字楼名称">
                   <Option v-for="item in autoName" :value="item.value" :key="item.label">
                    <span> {{ item.label }}</span>
                    <span style="float:right;color:#ccc">{{item.adname}}-{{item.address}}</span>
                   </Option>
                   </AutoComplete>
               </FormItem> 
                <Tooltip class="addscli" content="本楼盘，更多楼宇。例：2号楼、南楼" placement="top">
                   <Button type="ghost" icon="plus" @click="clickAdd"></Button> 
                </Tooltip>

                <Tooltip class="addlianxi" content="添加联系人" placement="top">
                   <Button @click="srctoole(0)" type="dashed" icon="person-stalker"></Button> 
                </Tooltip>

                 <Tooltip class="addlimg" content="添加图片" placement="top">
                   <Button @click="srctoole(1)" type="dashed" icon="ios-analytics"></Button> 
                </Tooltip>

            </Col>
        </Row>

        <Row v-if="loupnAdd.addnamd.length !==0" style="width:600px;">
        <FormItem label="">
          <Col style="display: inline-block;width: 200px;margin:0 10px 3px 0;" v-for="(item, index) in loupnAdd.addnamd" :key="item.length">
              <Input v-model="item.name">
                  <Button @click="clickRemove(index)" slot="append" icon="minus-round"></Button>
              </Input>
          </Col>
          </FormItem>
        </Row>

         <Row>
            <Col class="melese" :xs="24" :sm="24" :md="18" :lg="5">
               <FormItem label="详细地址" class="ivu-form-item-required">
                     <Select v-model="loupnAdd.region" placeholder="请选择城区" @on-change="regionDta">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                    </Select>
               </FormItem>  
            </Col>

             <Col class="melese meleses" :xs="24" :sm="24" :md="18" :lg="3">
                <Select v-model="loupnAdd.subrange" placeholder="请选择商圈">
                      <Option v-for="item in cityLists" :value="item.label" :key="item.label">{{ item.label }}</Option>
                </Select>
             </Col>

            <Col class="melese meleses" :xs="24" :sm="24" :md="18" :lg="3">
                <Input v-model="loupnAdd.street" placeholder="街道"></Input>
            </Col>

            <Col class="melese meleses" :xs="24" :sm="24" :md="18" :lg="5">
               <Input v-model="loupnAdd.address" placeholder="详细地址" @on-blur="blurlo"></Input>
            </Col>

        </Row>

        <Row>
           <Col class="melese" :xs="24" :sm="24" :md="18" :lg="5">
               <FormItem label="最近地铁" class="ivu-form-item-required">

                    <Select v-model="loupnAdd.station" placeholder="请选择地铁" filterable @on-change="stations">
                      <Option v-for="item in metros" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>

               </FormItem>  
            </Col>

             <Col class="melese meleses" :xs="24" :sm="24" :md="18" :lg="3">  
                <Input v-model="loupnAdd.metro" placeholder="几号线" readonly></Input>
             </Col>

            <Col class="melese meleses" :xs="24" :sm="24" :md="18" :lg="3">
                <Input v-model="loupnAdd.dist" placeholder="距离" >
                   <span slot="append">米</span>
                </Input>
            </Col>

        </Row>

        <Row v-if="subways" class="subways">
           <Col :xs="24" :sm="24" :md="18" :lg="13">
             <FormItem label="">
                <Card>
                 <p slot="title">推荐地铁、点击更换</p>
                 <a href="#" slot="extra" @click.prevent="subways=false">
                    <Icon type="ios-close-empty" size='30'></Icon>
                </a>
                 <p class="septuijian" v-for="(e,index) in subway" :key="index" @click="addsubways(e.name,e.distance)">
                 {{index +1}}:{{loupnAdd.name}}离{{e.adname}}{{e.address}} {{e.name}} <b>{{e.distance}}</b> 米
                 </p>
               </Card>
            </FormItem> 
          </Col>
        </Row>

        <Row>
          <Col :xs="24" :sm="24" :md="18" :lg="13" class='maps'>
          <FormItem label="">

           <el-amap class="imgMap" vid="amapDemo" :zoom="zoom" :center="loupnAdd.coordinate">
             <el-amap-marker :position="loupnAdd.coordinate"></el-amap-marker>
           </el-amap>

           </FormItem>
          </Col>
        </Row>
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="24">
           <FormItem label="办公类型" class="ivu-form-item-required">
             <RadioGroup v-model="loupnAdd.genre" type="button" @on-change="loupnAdd.genre2 = ''">
                <Radio label="普通办公"></Radio>
                <Radio label="创意园区"></Radio>
             </RadioGroup>
           </FormItem>
          </Col>
        </Row>

        <Row v-if='loupnAdd.genre !== "普通办公"'>
         <Col :xs="12" :sm="12" :md="12" :lg="6">
           <FormItem label="园区品牌">
              <Input v-model="loupnAdd.genre2"></Input>
           </FormItem>
          </Col>
        </Row>
      
           <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="24">
           <FormItem label="业主类型" class="ivu-form-item-required">
             <RadioGroup v-model="loupnAdd.liaison" type="button">
                <Radio label="请选择"></Radio>
                <Radio label="大业主"></Radio>
                <Radio label="小业主"></Radio>
             </RadioGroup>
           </FormItem>
          </Col>
        </Row>

          <Row>
            <Col :xs="24" :sm="24" :md="18" :lg="13">
               <FormItem label="楼盘简介">
                 <Input v-model="loupnAdd.introduce" type="textarea" :rows="4"></Input>
               </FormItem>  
            </Col>
          </Row>


      </Card>

      <Card style="margin-top:15px;">
         <p slot="title">详细信息</p>
          <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="6">
               <FormItem label="开发商">
                 <Input v-model="loupnAdd.developer"></Input>
               </FormItem>  
            </Col>
          </Row>

           <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="总建筑面积">
                  <Input v-model="loupnAdd.builtup">
                    <span slot="append">/m²</span>
                  </Input>
               </FormItem>  
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="标准层高">
                  <Input v-model="loupnAdd.storeyheight">
                    <span slot="append">m</span>
                  </Input>
               </FormItem>  
            </Col>
          </Row>
          <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="总层数">
                  <Input v-model="loupnAdd.storey2">
                    <span slot="append">层</span>
                  </Input>
               </FormItem>  
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="得房率">
                  <Input v-model="loupnAdd.roomrate">
                    <span slot="append">%</span>
                  </Input>
               </FormItem>  
            </Col>
          </Row>
           <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="电梯品牌">
                  <Input v-model="loupnAdd.elevator2"></Input>
               </FormItem>  
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="电梯个数">
                  <Input v-model="loupnAdd.elevator1">
                     <span slot="append">个</span>
                  </Input>
               </FormItem>  
            </Col>
          </Row>

            <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="物业公司">
                  <Input v-model="loupnAdd.property"></Input>
               </FormItem>  
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="物业费用">
                  <Input v-model="loupnAdd.property2"></Input>
               </FormItem>  
            </Col>
          </Row>

          <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="12">
               <FormItem label="入住企业">
                 <Input type="textarea" :rows="4" v-model="loupnAdd.enter"></Input>
               </FormItem>  
            </Col>
          </Row>
      </Card>

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

       <Card style="margin-top:15px;">
        <div id="addlimg"></div>
         <p slot="title">上传图片</p>
         <Uploads ref="imgadd"></Uploads>
       </Card>

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
          <pre>{{loupnAdd}}</pre>
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
import Cookies from 'js-cookie'
import datas from './data/subwaydata.js'
import contacts from '.././contacts/contacts.vue';
import Uploads from '.././Upload/Upload.vue';

export default {
    name: 'buildingadd',
    components: {
        contacts,
        Uploads
    },
      data () {
	        return {
             typedata:'楼盘联系人',
             namesechong:true,
             autoName: [], //自动写字楼名称
             nameData:[],
             zoom: 16,
             whether: 0, //判断能在高德地图中搜索到
             subway: [], //附近地铁
             subways: false, //附近地铁
             names: "", //监听name 消除附近地铁
             cityList: [], //城区
             cityLists: [], //城区
             metrosda:'', //全部地铁
             metros: [], //地铁
	           loupnAdd:{
               name:'',//大楼名称
               addnamd:[], //add大楼
               region:'',//城区
               subrange:'',//商圈
               street:'',//街道
               address:'',//详细地址
               station:'',//地铁站
               metro:'',//地铁线
               dist:'',//离地铁多少米
               coordinate:[121.473658,31.230378],//经纬度
               genre:'普通办公',//办公类型
               liaison:'请选择',//业主类型
               genre2:'',//品牌
               introduce:'',//楼盘简介
               developer:'',//开发商
               builtup:'',//总建筑面积
               storeyheight:'',//标准层高
               storey2:'',
               roomrate:'',//得房率
               elevator2:'',//客梯品牌
               elevator1:'',//电梯个数
               property:'',
               property2:'',
               enter:'',
             },
             modal1s:false,
             loading:false,
             lainxiren:{},
             lainxirens:{},
             lainxirendata:[],
             imgs:{},
             lestlian1:false,
             lestlian2:false,
             lestlian3:false,
             lestlian4:false,
             lestlian5:false,
	        }
        },
        mounted(){
          // this.cityList = datas.cityLists;
          let _this = this;
          // console.log(this)
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

          axios({
              method:'post',
              url:'/api/metro',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.metro;
            _this.metrosda = data;
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: i,
                     label: i
                    }
                metros.push(nea)
             }
             // console.log(metros)
             _this.metros = metros;
            
          })
          .catch(function (err) {
              _this.$Notice.error({title: '地铁错误'});
          })
        },
        methods:{
           handleSearch(val){
           this.names = val;
            this.autoName=[{
               value:'加载中.',
               label:'加载中.'
            }]
           this.$http.get('http://restapi.amap.com/v3/place/text?key=c90d470e523340097ef7bf9020708814&keywords='+val+'&types=商务住宅|楼宇|商务写字楼|产业园区|产业园区&city=021&children=1&offset=10&page=1&extensions=all')
                .then(response  => {
                  // console.log(response.data)
                  if(response.data.pois.length !== 0){
                    this.whether = 0;
                     let lse = response.data.pois;
                     let datas = [];
                     for (let i = 0; i < lse.length; i++) {
                        let ect = {
                              value:lse[i].name,
                              label: i+':'+lse[i].name, 
                              adname:lse[i].adname, 
                              address:lse[i].address
                            }
                        datas.push(ect)
                     }
                     if(this.autoName !==datas){
                       this.autoName = datas;
                        // console.log(datas)  
                     }
                   }else{
                    this.whether = 1;
                    this.autoName=[{
                       value:val,
                       label:val
                      }]
                   }
                 }, response => {
                 this.$Notice.error({title: '错误'});
                })

           },
           nameClick(e){
            let _this = this;
                axios({
                  method:'post',
                  url:'/api/lourep?name='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                _this.namesechong = true;
                if (res.data.statusx == 202) {
                  _this.$Notice.error({title: res.data.message});
                  _this.namesechong = false;
                }
                
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '名字重复'});
              })


             if (this.whether === 0) {
                this.$http.get('http://restapi.amap.com/v3/place/text?key=c90d470e523340097ef7bf9020708814&keywords='+e+'&types=商务住宅|楼宇|商务写字楼|产业园区|产业园区&city=021&children=1&offset=1&page=1&extensions=all')
                .then(response  => {
                  let data = response.data.pois[0];
                  // console.log(data)
                  if(data.address.length !== 0){
                       _this.loupnAdd.address = data.address;//详细地址
                   }else{
                    _this.loupnAdd.address = '';//详细地址
                    this.$Notice.warning({
                      title: '警告',
                      desc: '高德地图无法获取 <b style="color:#000">'+this.loupnAdd.name+'详细地址</b> 请自行查找填写！',
                      duration:8
                    });
                   }
                   if(data.adname.length !== 0){
                     _this.loupnAdd.region = data.adname
                      
                   }else{
                    _this.loupnAdd.region = '';//城区
                    this.$Notice.warning({
                      title: '警告',
                      desc: '高德地图无法获取 <b style="color:#000">'+this.loupnAdd.name+'城区</b> 请自行查找填写！',
                      duration:8
                    });
                   }

                   if(data.business_area.length !== 0){
                     _this.loupnAdd.street = data.business_area;//街道
                   }else{
                    _this.loupnAdd.street = '';//街道
                    this.$Notice.warning({
                      title: '警告',
                      desc: '高德地图无法获取 <b style="color:#000">'+this.loupnAdd.name+'街道信息</b> 请自行查找填写！',
                      duration:8
                    });
                   }

                   if(data.location.length !== 0){
                    var locations = data.location.split(',')
                    // _this
                    _this.loupnAdd.coordinate = locations;//经纬度
                    
                    _this.$http.get('http://restapi.amap.com/v3/place/around?key=c90d470e523340097ef7bf9020708814&location='+data.location+'&keywords=地铁站')
                      .then(response  => {
                       let les = response.data.pois;
                        if(les.length !== 0){
                          _this.subway = JSON.parse(JSON.stringify(les).replace(/\(地铁站\)/g, ""));
                          _this.subways = true;
                        }
                        // console.log(les["0"])
                       }, response => {
                       _this.$Notice.error({title: '地铁获取错误'});
                      })

                   }else{
                    _this.loupnAdd.coordinate = [121.473658,31.230378];//经纬度
                    this.$Notice.warning({
                      title: '警告',
                      desc: '高德地图无法获取 <b style="color:#000">'+this.loupnAdd.name+'经纬度</b> 请自行查找填写！',
                      duration:8
                    });
                   }

                   
                   // http://restapi.amap.com/v3/config/district?keywords=江苏大厦&subdistrict=3&key=c90d470e523340097ef7bf9020708814
                   // http://restapi.amap.com/v3/place/around?key=c90d470e523340097ef7bf9020708814&location=121.475213,31.235871&keywords=地铁站

                 }, response => {
                 this.$Notice.error({title: '错误'});
                })

             }else if(this.whether === 1){
               this.$Notice.warning({
                      title: '警告',
                      desc: '高德地图没有 <b style="color:#000">'+this.loupnAdd.name+'相关信息</b> 请自行查找填写！',
                      duration:8
                    });
             }
           },
           blurlo(){
              if (this.loupnAdd.address !== '') {
                 this.$http.get('http://restapi.amap.com/v3/geocode/geo?key=c90d470e523340097ef7bf9020708814&address=' + this.loupnAdd.address + '&city=021', {
                        RadioGroups: this.RadioGroups
                    })
                    .then(response => {
                        
                        if(response.data.geocodes.length !==0){
                          // console.log(response.data.geocodes["0"].location);

                           var locations = response.data.geocodes["0"].location.split(',')
                           this.loupnAdd.coordinate = locations;//经纬度
                        }else{
                           this.loupnAdd.coordinate = [121.473658,31.230378];//经纬度
                           this.$Notice.warning({
                            title: '警告',
                            desc: '高德地图没有找到<b style="color:#000">'+this.loupnAdd.address+'相关信息</b> 请自行查找填写！',
                            duration:8
                          });
                        }
                    }, response => {
                        this.$Notice.error({ title: '错误' });
                    })
             }
             return false;
           },
           regionDta(value){
             for (var i = 0; i < this.cityList.length; i++) {
              if(value == this.cityList[i].value){
                // console.log(i)
                // console.log(this.cityList[i].children)
                this.cityLists = this.cityList[i].children;
              }  
             }
           },
           clickAdd(){
            this.loupnAdd.addnamd.push({
                   name:''
            })
           },
           clickRemove(e){
            this.loupnAdd.addnamd.splice(e,1)
           },
           stations(e){
            let _this = this;
            _this.loupnAdd.metro = _this.metrosda[e];
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
             let yan = _this.loupnAdd;
             if(!_this.namesechong){
                this.$Notice.warning({
                    title: '房源重复',
                });
                return false;
             }else if (yan.name =='') {
                this.$Notice.warning({
                    title: '请填写写字楼名称',
                });
                return false;
             }else if(yan.region =='' || yan.subrange =='' || yan.street =='' || yan.address ==''){
                 this.$Notice.warning({
                    title: '请填写详细地址',
                });
                return false;
             }else if(yan.station =='' || yan.metro =='' || yan.dist ==''){
                 this.$Notice.warning({
                    title: '请填写地铁',
                });
                return false;
             }else if(yan.liaison =='请选择'){
                 this.$Notice.warning({
                    title: '请填业主类型',
                });
                return false;
             }


             _this.loading = true;
             _this.lainxiren = this.$refs.getInput.moldx;
             // _this.lainxirens = this.$refs.getInputs.moldx;
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

             // console.log(this.$refs.getInput)
             axios({
              method:'post',
              url:'/api/louadd',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'louadd':{
                name: _this.loupnAdd,
                img: _this.imgs,
                man:_this.lainxirendata
              }}
           })
            .then(function (res){
              _this.loading = false;
              // console.log(res)
              if (res.data.statusx == 200){
                _this.$Message.success('添加楼盘成功');
                _this.Clear()
              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
            })
            .catch(function (err) {
                 _this.loading = false;
                _this.$Notice.error({title: '添加楼盘失败'});
            })
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
          addsubways(a,b){
            let _this = this;
            _this.loupnAdd.station = a;
            _this.stations(a)
            _this.loupnAdd.dist = b;
          },
          Clear(){
            this.loupnAdd={
               name:'',//大楼名称
               addnamd:[], //add大楼
               region:'',//城区
               subrange:'',//商圈
               street:'',//街道
               address:'',//详细地址
               station:'',//地铁站
               metro:'',//地铁线
               dist:'',//离地铁多少米
               coordinate:[121.473658,31.230378],//经纬度
               genre:'普通办公',//办公类型
               liaison:'请选择',//业主类型
               genre2:'',//品牌
               introduce:'',//楼盘简介
               developer:'',//开发商
               builtup:'',//总建筑面积
               storeyheight:'',//标准层高
               storey2:'',
               roomrate:'',//得房率
               elevator2:'',//客梯品牌
               elevator1:'',//电梯个数
               property:'',
               property2:'',
               enter:'',
             }
          }
        },
        watch:{
          names: {
            handler: function (val, oldVal) {
               if(val == ""){
                this.subways = false;
                this.subway = []
               }
            },
            deep: true
          },
          subway: {
            handler: function (val, oldVal) {
               let _this = this;
              if(_this.subway.length !== 0){
                 _this.loupnAdd.station = val[0].name;
                 _this.loupnAdd.dist = parseInt(val[0].distance);
              }
            },
            deep: true
          },
        }
};
</script>
