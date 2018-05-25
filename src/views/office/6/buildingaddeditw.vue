<style lang="less">
.buildingaddedit{
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
   <div class="buildingaddedit cf" v-if="dataIMG">
   <pre>{{loupnAdd}}</pre>
   <pre>{{manData}}</pre>
   <pre>{{dataimg}}</pre>
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
                  <Button @click="clickRemove(index,item.s)" slot="append" icon="minus-round"></Button>
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
          <!--       <Select v-model="loupnAdd.subrange" placeholder="请选择商圈" class="ivu-form-item-required">
                      <Option v-for="item in cityLists" :value="item.label" :key="item.label">{{ item.label }}</Option>
                </Select> -->
                <Input v-model="loupnAdd.subrange" placeholder="商圈"></Input>
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
               <FormItem label="建筑面积">
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
           <Button :loading="loadingLook"  @click="footerYes" type="primary">
                <span v-if="!loadingLook">发送</span>
                <span v-else>发送中...</span>
           </Button>
           <Button  @click="footerNo" type="text">取消</Button>
         </div>
      </Modal>

       </Card>

       <Card style="margin-top:15px;">
        <div id="addlimg"></div>
         <p slot="title">上传图片</p>
         <Uploads v-bind:dataimg="dataimg" ref="imgadd"></Uploads>
       </Card>
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
          <pre>{{loupnAdd}}</pre>
          <h4>图片</h4>
          <pre>{{imgs}}</pre>
        </div>
        </Modal>
       </Card>

</Form>
   </div>
   <div v-else>
     加载中！
   </div>

</template>

<script>

import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie'
import contacts from '.././contacts/contacts.vue';
import Uploads from '.././Upload/Uploads.vue';

export default {
    name: 'buildingaddedit',
    components: {
        contacts,
        Uploads
    },
      data () {
	        return {
             typedata:'网点联系人',
             access: '',
             lookCard:false, //查看权限
             toogless:-1, //查看index
             indexMaid:-1, //记录查看index
             miids:'', //记录查看ID
             dataimg:[],
             dataIMG:false,
             loocModel:false,
             loocModelvui:'', //理由
             loadingLook:false,
             clickCards:false,
             clickCardsimg:'',
             clickses:false,
             manData:[],
             id:'',
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
             ofid:'',
             lainxiren:{},
             imgs:{},
             datas:[],
	        }
        },
        mounted(){
          // this.cityList = datas.cityLists;
          let _this = this;
          _this.id = _this.$route.query.deal_id;
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

          // if(this.access !== ''){
          //    this.lookCard = this.access.lou06;
          //    // console.log(this.access.lou06);
          // }

          axios({
              method:'post',
              url:'/api/louup1?id='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            _this.ofid = res.data.message.name.ofid;
            // console.log(res.data.message.name.ofid)
              if (res.data.statusx == 200){
                _this.datas =  res.data.message.man;
                 _this.regionDta(res.data.message.name.region)
                 _this.loupnAdd = res.data.message.name;
                let img = [];
                for (var i = 0; i < res.data.message.img.length; i++) {
                   var a = {
                     eq:res.data.message.img[i].eq,
                     url:res.data.message.img[i].url,
                     type:res.data.message.img[i].type,
                   }
                   img.push(a)
                }
                 _this.dataimg = img;
                 _this.manData = res.data.message.man;
                 _this.dataIMG = true;

              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
          })
          .catch(function (err) {
              _this.$Notice.error({title: '编辑错误'});
          })

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
                     _this.loupnAdd.region = data.adname;//城区
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
                // console.log(this.cityList[i].children)
                this.cityLists = this.cityList[i].children;
              }
             }
           },
           clickAdd(){

            this.loupnAdd.addnamd.push({
                   name:'',
                   ofid:0,
                   s:1
            })

           },
           clickRemove(e,a){
            if (a == 1) {
              this.loupnAdd.addnamd.splice(e,1)
            }else if(a == 0){
               this.$Message.warning('不允许删除');
            }
            
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
             if (yan.name =='') {
                this.$Notice.warning({
                    title: '请填写写字楼名称',
                });
                return false;
             }
             
             _this.loading = true;
             _this.imgs = this.$refs.imgadd.img;
             axios({
              method:'post',
              url:'/api/louup2',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'louup':{
                name: _this.loupnAdd,
                img: _this.imgs,
                man:[]
              }}
           })
            .then(function (res){
              _this.loading = false;
                if (res.data.statusx == 200){
                _this.$Message.success('修改成功');
                // console.log( JSON.stringify(res.data.message))
                 // window.history.go(-1);
              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
            })
            .catch(function (err) {
                 _this.loading = false;
                _this.$Notice.error({title: '编辑失败'});
            })
          },
          addEdit(){
            console.log(1)
          },
          clickCard(e){
            this.clickCardsimg = e;
            this.clickCards = true;
          },
          clickMaid(e){
            //联系人添加编辑
            // console.log(e)
            let query = { 
              deal_id: e,
              ofid: this.ofid,
              eq:0
            };
            let querys = { 
              ofid: this.ofid,
              eq:1
            };
            if (e == ''){
                this.$router.push({
                 name: 'lou_contas',
                 query: querys
                });
            }else{
                this.$router.push({
                 name: 'lou_contas',
                 query: query
                });
            }
              
          },
          clickMaidri(){
            console.log('添加')
          },
          clickMaids(e,a){
            let _this = this;
            _this.indexMaid = a;
            _this.miids = e;
            console.log(e)
            axios({
              method:'post',
              url:'/api/manlook1?maid='+e,
              headers:{Authorization:'Bearer '+Cookies.set('keya')}
           })
            .then(function (res){
              console.log(res)
              if (res.data.statusx == 202) {
                _this.loocModel = true
              }else if(res.data.statusx == 200){
                _this.toogless = a;
              }
            })
            .catch(function (err) {
              _this.$Notice.error({title: '查看失败'})
            })
          },
          footerYes(){
            let _this = this;
            if (_this.loocModelvui == '') {
              _this.$Message.info('请填写理由');
            }else{
              axios({
              method:'post',
              url:'/api/manlook2',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                maid:_this.miids,
                miids:_this.miids,  //id
                rema:_this.loocModelvui
              }
           })
            .then(function (res){
              // console.log(res.data.statusx)
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
            let _this = this;
              _this.loocModelvui = ''
              _this.loocModel = false
          },
           addsubways(a,b){
            let _this = this;
            _this.loupnAdd.station = a;
            _this.stations(a)
            _this.loupnAdd.dist = b;
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
          }

        }
};
</script>
