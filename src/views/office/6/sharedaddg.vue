
<style lang="less">
 .sharedaddg{
  .ivu-form-item {
    margin-bottom: 15px;
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
  .imgle{
    display: -webkit-box;display: -ms-flexbox;display: flex;
    .img{
     margin:2px;
     max-width: 100px;
     border:1px dashed #c9c9c9;
     cursor: pointer;
     vertical-align:top;
     position: relative;
      img{
        width:100%;
        height:auto;
      }
      .buoo{
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        font-size: 12px;
        color: #fff;
        width: 100%;
        text-align: center;
        left: 0;
        bottom: 0;
      }
      .div{
        position: absolute;
        display:none;
        top:0;
        left:0;
        right: 0;
        bottom:0;
        margin:auto;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.5);
        .ivu-icon{
          position: absolute;
          top:0;
          left:0;
          right: 0;
          bottom:0;
          margin:auto;
          width:20%;
          height:20%;
          color:#fff;
          font-size:1.5em;
          text-align:center;
          &:hover{
            opacity: 0.7;
          }
        }
      }
      &:hover .div{display:block;}
    }
  }
 }
</style>

<template>
   <div class="sharedaddg cf">
   <pre>{{addg}}</pre>
   <pre>{{dataimg}}</pre>
   <Form :model="addg" :label-width="80" v-if="loading2">  
   <Card>
      <p slot="title">
          品牌名称:{{addg.brandsname}}
          <span style="margin-left:10px;">所在大楼:{{addg.buildingsname}}</span>
      </p>
     <Row>
       <Col :xs="24" :sm="24" :md="24" :lg="7" style="padding:5px">
          <Card>
              <p slot="title">
                  <Icon type="navicon"></Icon>
                  已添加工位
              </p>
              <!-- yiyou -->
                <Row style="max-height: 948px;overflow: auto;">
                <Col :xs="24" :sm="24" :md="24" :lg="24" style="padding:5px" v-for="(n,index) in addg.station" :key="n.length" v-if="n.id !== 0 ">
                   <!-- add -->
                   <Card dis-hover>
                  <p slot="title"><Icon type="android-radio-button-on"></Icon>已添加工位{{index+1}}</p>
                <FormItem label="办公室类型">
                   <Select v-model="n.type">
                      <Option value="带窗办公室">带窗办公室</Option>
                      <Option value="无窗办公室">无窗办公室</Option>
                      <Option value="开放工位">开放工位</Option>
                  </Select>
                </FormItem>

                <FormItem label="间数" v-if="n.type =='带窗办公室'||n.type =='无窗办公室'">
                     <div class="input-group">
                      <input placeholder='间' v-model="n.roommin" type="text" maxlength="8">
                      <input placeholder='间' v-model="n.roommax" type="text" maxlength="8">
                      <span>人间</span>
                    </div>
                </FormItem>
                <FormItem label="装修情况">
                   <Select v-model="n.decoration">
                      <Option value="标准装修">标准装修</Option>
                      <Option value="豪华装修">豪华装修</Option>
                      <Option value="精装修">精装修</Option>
                      <Option value="中等装修">中等装修</Option>
                      <Option value="简装修">简装修</Option>
                      <Option value="毛坯">毛坯</Option>
                  </Select>
                </FormItem>

                <FormItem label="库存">
                   <Input v-model="n.stock" placeholder="库存...">
                     <span slot="append">套</span>
                   </Input>
                </FormItem>
                <FormItem label="单价">
                   <Input v-model="n.price" placeholder="单价...">
                     <span slot="append">元/工位/月</span>
                   </Input>
                </FormItem>
                 <FormItem label="最短租期">
                   <Input v-model="n.minease" placeholder="最短租期...">
                     <span slot="append">天</span>
                   </Input>
                </FormItem>
                <FormItem label="付款方式">
                     <div class="input-group">
                      <input placeholder='押' v-model="n.rentmin" type="text" maxlength="8">
                      <input placeholder='付' v-model="n.rentmax" type="text" maxlength="8">
                      <span>个月</span>
                    </div>
                </FormItem>
                  <FormItem label="注册">
                      <RadioGroup v-model="n.registered" type="button">
                          <Radio label="虚拟注册"></Radio>
                          <Radio label="实地注册"></Radio>
                          <Radio label="不可注册"></Radio>
                      </RadioGroup>
                  </FormItem>
                 <FormItem label="上传图片">
                    <Button @click="modal2true(index,n.dataimg)" type="ghost" icon="ios-cloud-upload-outline">上传/编辑图片</Button>
                 </FormItem>
                 <div class="imgle">
                   <div class="img" v-for="(s,index) in n.dataimg" :key="s.length" @click="modal3t = s.type,modal3i = s.url,modal3 = true">
                     <img :src="s.url" :alt="s.type" :title="s.url">
                      <p class="buoo">{{s.type}}</p>
                      <div class="div">
                        <Icon type="eye"></Icon>
                      </div>
                   </div>
                 </div>
               </Card>
                   <!-- add -->
                </Col>
              </Row>
              <!-- yiyou -->
           </Card>
       </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="17" style="padding:5px">
           <Card>
              <p slot="title">
                  <Icon type="ios-bookmarks"></Icon>
                  添加工位
              </p>

              <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="12" style="padding:5px" v-for="(n,index) in addg.station" :key="n.length" v-if="n.id == 0">
                   <!-- add -->
                   <Card dis-hover>
                  <p slot="title"><Icon type="android-radio-button-off"></Icon>工位{{index+1}}</p>
                   <a href="#" slot="extra"  @click.prevent="addaddg">
                      <Icon type="plus"></Icon>
                      添加工位
                   </a>

                   <a href="#" slot="extra"  @click.prevent="removeaddg(index)" v-if="index !==0" style="color: red;margin-left: 10px;">
                      <Icon type="minus-round"></Icon>
                      删除工位
                   </a>
                <FormItem label="办公室类型">
                   <Select v-model="n.type">
                      <Option value="带窗办公室">带窗办公室</Option>
                      <Option value="无窗办公室">无窗办公室</Option>
                      <Option value="开放工位">开放工位</Option>
                  </Select>
                </FormItem>

                <FormItem label="间数" v-if="n.type =='带窗办公室'||n.type =='无窗办公室'">
                     <div class="input-group">
                      <input placeholder='间' v-model="n.roommin" type="text" maxlength="8">
                      <input placeholder='间' v-model="n.roommax" type="text" maxlength="8">
                      <span>人间</span>
                    </div>
                </FormItem>
                <FormItem label="装修情况">
                   <Select v-model="n.decoration">
                      <Option value="标准装修">标准装修</Option>
                      <Option value="豪华装修">豪华装修</Option>
                      <Option value="精装修">精装修</Option>
                      <Option value="中等装修">中等装修</Option>
                      <Option value="简装修">简装修</Option>
                      <Option value="毛坯">毛坯</Option>
                  </Select>
                </FormItem>

                <FormItem label="库存">
                   <Input v-model="n.stock" placeholder="库存...">
                     <span slot="append">套</span>
                   </Input>
                </FormItem>
                <FormItem label="单价">
                   <Input v-model="n.price" placeholder="单价...">
                     <span slot="append">元/工位/月</span>
                   </Input>
                </FormItem>
                 <FormItem label="最短租期">
                   <Input v-model="n.minease" placeholder="最短租期...">
                     <span slot="append">天</span>
                   </Input>
                </FormItem>
                <FormItem label="付款方式">
                     <div class="input-group">
                      <input placeholder='押' v-model="n.rentmin" type="text" maxlength="8">
                      <input placeholder='付' v-model="n.rentmax" type="text" maxlength="8">
                      <span>个月</span>
                    </div>
                </FormItem>
                  <FormItem label="注册">
                      <RadioGroup v-model="n.registered" type="button">
                          <Radio label="虚拟注册"></Radio>
                          <Radio label="实地注册"></Radio>
                          <Radio label="不可注册"></Radio>
                      </RadioGroup>
                  </FormItem>
                 <FormItem label="上传图片">
                    <Button @click="modal2true(index,n.dataimg)" type="ghost" icon="ios-cloud-upload-outline">上传/编辑图片</Button>
                 </FormItem>
                 <div class="imgle">
                   <div class="img" v-for="(s,index) in n.dataimg" :key="s.length" @click="modal3t = s.type,modal3i = s.url,modal3 = true">
                     <img :src="s.url" :alt="s.type" :title="s.url">
                      <p class="buoo">{{s.type}}</p>
                      <div class="div">
                        <Icon type="eye"></Icon>
                      </div>
                   </div>
                 </div>
               </Card>
                   <!-- add -->
                </Col>
              </Row>
               
           </Card>

        </Col>
      </Row>
      <Card style="margin-top:15px;text-align: center;">
             <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
               <span v-if="!loading">添加/编辑工位</span>
               <span v-else>添加/编辑工位中...</span>
             </Button>
       </Card>
    <Modal v-model="modal3" :title="modal3t" width="500">
      <img :src="modal3i" :alt="modal3t" style="width:100%;">
    </Modal>
     <Modal v-model="modal2" width="800" :closable="false" :mask-closable="false">
        <p slot="header">
            <Icon type="ios-cloud-upload-outline"></Icon>
            <span>上传图片</span>
        </p>
        <div>
            <Uploads v-if="Uploadst" v-bind:dataimg="dataimg" ref="imgadd"></Uploads>
        </div>
        <div slot="footer">
            <Button type="primary" @click="outlinese">添加到工位</Button>
            <Button type="text" @click="modal2 = false,Uploadst = false">取消</Button>
        </div>
     </Modal>
     </Card>
    </Form>
     <Card v-else>加载中...</Card>
   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';
import Uploads from '.././Upload/Uploads.vue';

export default {
    name: 'sharedaddg',
    components:{
        Uploads
     },
      data () {
          return {
             id:'',
             loading:false,
             loading2:false,
             modal2:false,
             modal3:false,
             modal3t:'',
             modal3i:'',
             Uploadst:false,
             indexs:0,
             dataimg:[],
             addg:{
               brandsname:'方糖小镇',
               buildingsname:'江苏大厦',
               station:[
                {
                 // id:0,
                 // type:'开放工位', //办公室类型
                 // decoration:'', //装修情况
                 // stock:'', //库存
                 // price:'', //单价
                 // minease:'', //最短租期
                 // rentmin:'', //押
                 // rentmax:'', //付
                 // roommin:'', //间
                 // roommax:'', //间
                 // dataimg:[],
                 // registered:'不可注册'
                }
                ]
             }
          }
        },
        mounted(){
            this.id = this.$route.query.id; //id
            this.datase()
        },
        methods:{
           datase(){
               let _this = this;
               _this.loading2 = false;
               axios({
                method:'post',
                url:'/api/sh3up1?sh2id='+_this.id,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
              .then(function (res){
                // console.log(res.data.message)
                _this.addg = res.data.message
                _this.loading2 = true;
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '工位失败'});
              })
           },
           addaddg(){
             this.addg.station.push({
                 id:0,
                 type:'3',
                 decoration:'',
                 stock:'',
                 price:'',
                 minease:'',
                 rentmin:'',
                 rentmax:'',
                 roommin:'',
                 roommax:'',
                 dataimg:[],
             })
           },
           removeaddg(e){
            this.addg.station.splice(e,1)
           },
           modal2true(e,a){
            this.Uploadst = true
            this.indexs = e
            this.modal2 = true
            this.dataimg = []
            this.dataimg = a
            
           },
           outlinese(){
             this.addg.station[this.indexs].dataimg = this.$refs.imgadd.img;
             this.dataimg = []
             this.modal2 = false
           },
           handleSubmit(){
               let _this = this;
               _this.loading = true;
               axios({
                method:'post',
                url:'/api/sh3up2?sh2id='+_this.id,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                data:{jo:_this.addg}
             })
              .then(function (res){
                _this.$Message.success('成功');
                _this.loading = false;
                _this.datase()
              })
              .catch(function (err) {
                   _this.loading = false;
                  _this.$Notice.error({title: '提交失败'});
              })

           }

        }
};
</script>

