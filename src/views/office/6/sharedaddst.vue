
<style lang="less">
 .sharedaddst{
  background:#fff;
  .selectsNmae{
      .ivu-select-not-found{
        display:none
      }
   }
    .addlouse{
       .selectsNmae{
         max-width: 300px;
       }
       .sanwei{
         margin: 0 6px;
       }
    } 
    .addprivates{
      .wi3d{
        max-width:200px;
        display:inline-block
      }
      .sanwei{
         margin: 0 6px;
       }
    }
    .Checkboxse{
      margin-right: 15px;
    }
    .Cardsr{
      margin-bottom: 10px;
      .ivu-card-head{
        padding: 5px 10px;
        p{
          font-weight: 100;
        }
      }
      .ivu-card-extra{
        top: 4px;
        right: 10px;
      }
      .ivu-form-item-label{
        width:50px !important;
      }
      .ivu-form-item-content{
        margin-left: 50px !important;
      }
      .ivu-form-item{
        margin-bottom:0;
      }
      .wi3d{
        margin-bottom:3px;
      }
    }
 }
</style>

<template>
   <div class="sharedaddst cf">
   <pre>{{sharedadds.addlouse}}</pre>
   <pre>{{sharedadds.addprivates}}</pre>
   <pre>{{imgs}}</pre>
   <pre>{{dataimg2}}</pre>
   <div v-if="lodasda">
        <Form :model="sharedadds" :label-width="100">
         <Row>
           <Col :xs="24" :sm="24" :md="8" :lg="6" style="padding:5px">
            <Card style="max-height:782px;min-height:200px;overflow:auto">
              <p slot="title">
                  <Icon type="folder"></Icon>
                  楼盘列表
              </p>

                <Card class="Cardsr" v-for="(n, index) in sharedadds.addlouse" :key="n.length" v-if="n.id !==0">
                    <p slot="title">{{n.img.length}}普通({{n.name}})</p>
                     <a href="#" slot="extra">
                     <!-- @click.prevent="changeLimit" -->
                      <a v-if="adminTrue" href="#" @click.prevent="changeLimit3(n.uniqidof)">click</a>
                       <Tooltip content="删除" placement="top">
                            <Button @click.prevent="changeLimit(n.id)" size="small" type="error"><Icon type="android-remove-circle"></Icon></Button>
                        </Tooltip>
                        <Tooltip content="添加工位" placement="top">
                           <Button @click.prevent="changegong(n.id)" size="small" type="primary"><Icon type="plus-round"></Icon></Button>
                        </Tooltip>
                         <Tooltip content="添加照片" placement="top">
                           <Button @click.prevent="addimgs(0,n.id,index)" size="small" type="primary"><Icon type="android-add-circle"></Icon></Button>
                        </Tooltip>
                    </a>
                   <FormItem :label="'楼盘 ' + index">
                       <Input v-model="n.layer"></Input>
                       <!-- <span class="sanwei">层</span> -->
                   </FormItem>
                </Card>

                <Card class="Cardsr" v-for="(n, index) in sharedadds.addprivates" :key="n.length" v-if="n.id !==0">
                    <p slot="title"></span>{{n.img.length}}专用({{n.louname}})</p>
                     <a href="#" slot="extra">
                     <!-- @click.prevent="changeLimit" -->
                     <a v-if="adminTrue" href="#" @click.prevent="changeLimit3(n.uniqidof)">click</a>
                       <Tooltip content="删除" placement="top">
                            <Button @click.prevent="changeLimit(n.id)" size="small" type="error"><Icon type="plus-circled"></Icon></Button>
                        </Tooltip>
                        <Tooltip  content="添加工位" placement="top">
                           <Button @click.prevent="changegong(n.id)" size="small" type="primary"><Icon type="plus-round"></Icon></Button>
                        </Tooltip>
                         <Tooltip content="添加照片" placement="top">
                           <Button @click.prevent="addimgs(1,n.id,index)" size="small" type="primary"><Icon type="android-add-circle"></Icon></Button>
                        </Tooltip>
                    </a>
                   <FormItem :label="'楼盘 ' + index">
                       <Cascader class="wi3d" :data="region" v-model="n.regions"></Cascader>
                       <Input class="wi3d" v-model="n.address" placeholder='显示地址'></Input>
                       <Input v-model="n.layer"></Input>
                       <!-- <span class="sanwei">层</span> -->
                   </FormItem>
                </Card>


                 <Modal v-model="modal2" width="800" :closable="false" :mask-closable="false">
                  <p slot="header">
                      <Icon type="ios-cloud-upload-outline"></Icon>
                      <span>上传图片</span>
                  </p>
                  <div>
                      <Uploads v-if="Uploadst" v-bind:dataimg="dataimg2" ref="imgadd2"></Uploads>
                      <span v-else>加载中...</span>
                  </div>
                  <div slot="footer">
                      <Button type="primary" :loading="loadinge" @click="outlinese">添加</Button>
                      <Button type="text" @click="modal2 = false,dataimg2 = []">取消</Button>
                  </div>
               </Modal>

            </Card>
           </Col>
            <Col :xs="24" :sm="24" :md="16" :lg="18" style="padding:5px">
            <Card>
            <p slot="title">
                <Icon type="folder"></Icon>
                编辑品牌
            </p>
               <Row>
                <Col>
                   <FormItem label="品牌名称"  class="ivu-form-item-required">
                       <Input v-model="sharedadds.sharedaname" style="width:60%;"></Input>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                   <FormItem label="添加楼盘"  class="ivu-form-item-required">
                       
                        <Tooltip content="添加更多楼盘" placement="top">
                            <Button @click="addlou" icon="ios-plus-outline">添加更多楼盘</Button>
                        </Tooltip>
                         <Tooltip content="添加专用大楼" placement="top">
                            <Button @click="addprivate" icon="ios-plus">添加专用大楼</Button>
                        </Tooltip>
                  </FormItem>
                </Col>
              </Row>

               <Row class="addlouse" v-for="(n, index) in sharedadds.addlouse" :key="n.length" v-if="n.id ==0">
                <Col>
                   <FormItem :label="'楼盘 ' + index"  class="ivu-form-item-required">
                        <Select v-model="n.name" 
                        class="selectsNmae" 
                        filterable
                        clearable
                        remote
                        :remote-method="remoteMethod"
                         placeholder = '请搜索楼盘'>
                          <Option v-for="(option, index) in optionsName" :value="option.value" :key="index">{{option.label}}</Option>
                       </Select>
                       <Input style="max-width: 100px; display: inline-block;" v-model="n.layer"></Input>
                       <!-- <span class="sanwei">层</span> -->
                        <Poptip
                          confirm
                          :title="'确定删除 楼盘' + index"
                          @on-ok="removelou(index)">
                          <Button type="error" size="small"><Icon type="trash-a"></Icon></Button>
                       </Poptip>
                   </FormItem>
                </Col>
              </Row>

              <Row class="addprivates" v-for="(n, index) in sharedadds.addprivates" :key="n.length" v-if="n.id ==0">
                <Col>
                   <FormItem :label="'专用大楼 ' + index"  class="ivu-form-item-required">
                       <Cascader class="wi3d" :data="region" v-model="n.regions"></Cascader>
                       <Input class="wi3d" v-model="n.louname" placeholder='楼盘名称'></Input>
                       <Input class="wi3d" v-model="n.address" placeholder='显示地址'></Input>
                       <Input style="max-width: 100px; display: inline-block;" v-model="n.layer"></Input>
                       <!-- <span class="sanwei">层</span> -->
                        <Poptip
                          confirm
                          :title="'确定删除 专用大楼' + index"
                          @on-ok="removeprivate(index)">
                          <Button type="error" size="small"><Icon type="trash-a"></Icon></Button>
                      </Poptip>
                   </FormItem>
                </Col>
              </Row>

              <Row>
                <Col>
                   <FormItem label="基础服务"  class="ivu-form-item-required">
                         <Card>
                            <p slot="title">
                               <Checkbox
                                :indeterminate="indeterminate1"
                                :value="checkAll1"
                                @click.prevent.native="handleCheckAll1">全选</Checkbox>
                            </p>
                             <CheckboxGroup v-model="sharedadds.checkAllGroup1" @on-change="checkAllGroupChange1">
                                  <Checkbox class="Checkboxse" v-for="n in jichu" :key="n" :label="n">{{n}}</Checkbox>
                              </CheckboxGroup>
                         </Card>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                   <FormItem label="企业服务"  class="ivu-form-item-required">
                         <Card>
                            <p slot="title">
                               <Checkbox
                                :indeterminate="indeterminate12"
                                :value="checkAll12"
                                @click.prevent.native="handleCheckAll12">全选</Checkbox>
                            </p>
                             <CheckboxGroup v-model="sharedadds.checkAllGroup2" @on-change="checkAllGroupChange12">
                                  <Checkbox class="Checkboxse" v-for="n in qoue" :key="n" :label="n">{{n}}</Checkbox>
                              </CheckboxGroup>
                         </Card>
                  </FormItem>
                </Col>
              </Row>
               <Row>
                <Col>
                   <FormItem label="品牌总机">
                      <Input style="width:50%;" v-model="sharedadds.switchboard"></Input>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                   <FormItem label="运营公司">
                      <Input style="width:50%;" v-model="sharedadds.thecompany"></Input>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                   <FormItem label="品牌简介"  class="ivu-form-item-required">
                      <Input style="width:60%;" v-model="sharedadds.note" type="textarea" :rows="4"></Input>
                  </FormItem>
                </Col>
              </Row>
               </Card>
           </Col>
         </Row>
         </Form>
       

        <Card style="margin-top:15px;" v-if="!modal2">
            <p slot="title">
                <Icon type="images"></Icon>
                添加品牌图片
            </p>
          <!--   <p>一张</p> -->
            <Uploads v-bind:dataimg="dataimg" ref="imgadd"></Uploads>
        </Card>

        <Card style="margin:15px 0 30px 0;text-align: center;">
           <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
             <span v-if="!loading">修改品牌</span>
             <span v-else>修改品牌中...</span>
           </Button>
        </Card>

       </div>
       <Card v-else>加载中...</Card>
   </div>
</template>

<!-- 价格 -->
<!-- 网点ID -->
<script>
import axios from 'axios'
import Cookies from 'js-cookie';
import Uploads from '.././Upload/Uploads.vue';
export default {
    name: 'sharedaddst',
     components: {
        Uploads
    },
      data () {
          return {
             id:'',
             id2:'',
             region:[],//区域
             optionsName:[], //lou
             indeterminate1: false,
             loadinge: false,
             lodasda:false,
             modal2:false,
             Uploadst:false,
             checkAll1: false,
             dataimg2:[],
             indeterminate12: false,
             checkAll12: false,
             loading:false,
             adminTrue:false,
             imgs:[],
             jichu:['前台接待', '书吧', '洽谈室', '办公清洁', '办公家具', '休闲区', '视频远程会议', '茶点', '复印打印', '健身设施', '多功能厅', '免费咖啡', '传真', '中央空调', '咖啡厅', '饮用水', '办公宽带', '空气净化器', '茶水间', 'WIFI', '自动售货机', '冰箱'],
             qoue:['会议室', '微波炉', '卫生间配套', '办理证件', '投融资服务', '人力招聘', '运营服务', '公司年检', '营销推荐', '法律咨询', '商务聚会', '财税代理', '宣传设计', '人事代理', '政策申请', '政策顾问', '创业辅导'],
             sharedadds:{
                addlouse:[], //添加更多楼盘
                addprivates:[],//专用大楼
                checkAllGroup1: [],
                checkAllGroup2: []
             },
             dataimg:[],
          }
        },
        mounted(){
            this.id = this.$route.query.id; //id
            this.quyu();
            this.ajaxName();//大楼名字
            this.datse();//data
            // adminTrue
            if (Cookies.set('user') == 'admin') {
              this.adminTrue = true
            }
        },
        methods:{
         datse(){
           let _this = this;
           _this.lodasda = false
            axios({
              method:'post',
              url:'/api/sh1up1?sh1id='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
            .then(function (res) {
               console.log(res)
               _this.dataimg = res.data.message.img;
               _this.sharedadds = res.data.message.name
              _this.lodasda = true
            })
            .catch(function (err) {
                _this.$Notice.error({title: '编辑错误'});
            })

         },
         quyu(){
           let _this = this;
            axios({
              method:'post',
              url:'/api/region',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
            .then(function (res) {
               let data =[];
               for (var i = 0; i < res.data.region.length; i++) {
                   let a = {
                      value: res.data.region[i].value,
                      label: res.data.region[i].value,
                      children: res.data.region[i].children
                  }
                 data.push(a)
               }
               // console.log(data)
               _this.region = data
            })
            .catch(function (err) {
                _this.$Notice.error({title: '区域错误'});
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
                  if(res.data.message.length !== 0){
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
                  }else{
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
         changeLimit(e){
            console.log(e)
            const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
            let _this = this;
          axios({
              method:'post',
              url:'/api/sharedel',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                sh2id:e
              }
           })
          .then(function (res) {
            console.log(res)
            _this.datse();//data
            setTimeout(msg, 0);
            _this.$Message.info('删除成功');
          })
          .catch(function (err) {
              _this.$Notice.error({title: '错误'});
          })

         },
         addimgs(a,b,c){
          this.id2 = b
          this.modal2 = true
          this.dataimg2 = [] //res
          if (a==0) {
            console.log('普通')
            console.log(this.sharedadds.addlouse[c].img)
            this.dataimg2 = this.sharedadds.addlouse[c].img

          }else if(a==1){
            console.log('专用')
            console.log(c)
            console.log(this.sharedadds.addprivates[c].img)
            this.dataimg2 = this.sharedadds.addprivates[c].img
          }
          console.log(b)
          this.Uploadst = false;
           setTimeout(()=>{
               this.Uploadst = true
            },200)
         },
         outlinese(){
           console.log(this.$refs.imgadd2.img)
           console.log(this.id2)
           this.loadinge = true;
           let _this = this;
           // console.log(_this.dataimg2)
            axios({
              method:'post',
              url:'/api/shimgact',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                sh2id:_this.id2,
                jo:_this.$refs.imgadd2.img
              }
           })
            .then(function (res){
              _this.loadinge = false;
              _this.modal2 = false
              _this.dataimg2 = []
              _this.datse();//data
            })
            .catch(function (err) {
                _this.$Notice.error({title: '1失败'});
            })

         },
         changegong(e){
            let query = { id: e};
              this.$router.push({
               name: 'shared_addg',
               query: query
              });
         },
         changeLimit3(e){
          console.log(e)
            let query = { deal_id: e};
              this.$router.push({
               name: 'sharedadd_edit',
               query: query
              });
         },
         addlou(){
           this.sharedadds.addlouse.push({
                id:0,
                name:'',
                layer:0
           })
         },
         removelou(e){
            this.sharedadds.addlouse.splice(e,1)
         },
         addprivate(){
           this.sharedadds.addprivates.push({
                id:0,
                regions:[],
                address:'',
                louname:'',
                layer:0
           })
         },
         removeprivate(e){
           this.sharedadds.addprivates.splice(e,1)
         },
         handleCheckAll1 () {
                if (this.indeterminate1) {
                    this.checkAll1 = false;
                } else {
                    this.checkAll1 = !this.checkAll1;
                }
                this.indeterminate1 = false;

                if (this.checkAll1) {
                    this.sharedadds.checkAllGroup1 = this.jichu;
                } else {
                    this.sharedadds.checkAllGroup1 = [];
                }
            },
            checkAllGroupChange1 (data) {
                if (data.length === 22) {
                    this.indeterminate1 = false;
                    this.checkAll1 = true;
                } else if (data.length > 0) {
                    this.indeterminate1 = true;
                    this.checkAll1 = false;
                } else {
                    this.indeterminate1 = false;
                    this.checkAll1 = false;
                }
            },
            handleCheckAll12 () {
                if (this.indeterminate12) {
                    this.checkAll12 = false;
                } else {
                    this.checkAll12 = !this.checkAll12;
                }
                this.indeterminate12 = false;

                if (this.checkAll12) {
                    this.sharedadds.checkAllGroup2 = this.qoue;
                } else {
                    this.sharedadds.checkAllGroup2 = [];
                }
            },
            checkAllGroupChange12 (data) {
                if (data.length === 17) {
                    this.indeterminate12 = false;
                    this.checkAll12 = true;
                } else if (data.length > 0) {
                    this.indeterminate12 = true;
                    this.checkAll12 = false;
                } else {
                    this.indeterminate12 = false;
                    this.checkAll12 = false;
                }
            },
            handleSubmit(){
             let _this = this;
             let yan = _this.sharedadds;
             let n = 'sharedaname' in yan;
             let no = 'note' in yan;
              if (!n) {
                this.$Notice.warning({
                    title: '请填品牌名称',
                });
                return false;
             }else if(yan.sharedaname == ''){
                this.$Notice.warning({
                    title: '请填品牌名称',
                });
                return false;
             }else if(yan.checkAllGroup1.length == 0){
                this.$Notice.warning({
                    title: '请选择基础服务',
                });
                return false;
             }else if(yan.checkAllGroup2.length == 0){
                this.$Notice.warning({
                    title: '请选择企业服务',
                });
                return false;
             }else if(!no){
                this.$Notice.warning({
                    title: '请填写简介',
                });
                return false;
             }else if(yan.note ==''){
                this.$Notice.warning({
                    title: '请填写简介',
                });
                return false;
             }

             _this.loading = true;
             _this.imgs = this.$refs.imgadd.img;
             axios({
              method:'post',
              url:'/api/sh1up2?sh1id='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{'jo':{
                name: _this.sharedadds,
                img: _this.imgs
              }}
           })
            .then(function (res){
              _this.loading = false;
              // console.log(res)
              if (res.data.statusx == 200){
                _this.$Message.success('修改品牌成功');
                _this.datse();//data
              }else{
                _this.$Notice.error({title: res.data.message});
              }
            })
            .catch(function (err) {
                 _this.loading = false;
                _this.$Notice.error({title: '修改品牌失败'});
            })
          },
      }
};
</script>

