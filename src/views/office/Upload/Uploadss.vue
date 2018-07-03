<style lang="less">
.Upload {
   .masdasA>a{
     margin:2px;
   }
   .addBaogao{
    z-index:55;
   }
   .lisimg{
    list-style-type:none;
    img{
      width:100%;
      height: auto;
      cursor: -webkit-grab;
      cursor: -moz-grab;
      cursor:grab;
    }
    .li{
      width: 210px;
      margin: 5px;
      display: inline-block;
      border: 1px dashed #eee;
      position:relative;
      .removeimg{
        -webkit-transition:all 0.25s ease-out;transition:all 0.25s ease-out;
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid #949494;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        &:hover{
          opacity: 0.7;
        }
      }
    }
    .placeholder-style{
      border: 3px dashed red;
    }
    .iview-admin-cloned-item{
      opacity: 0.2;
    }
   }
   .loogimgs{
     -webkit-transition:all 0.25s ease-out;transition:all 0.25s ease-out;
    position: absolute;
    right: 0px;
    bottom: 31px;
    font-size: 12px;
    background: #fff;
    border: 1px solid #80848f;
    color: #80848f;
    padding: 0 2px;
    cursor: pointer;
     &:hover{
          opacity: 0.7;
        }
   }
}
  
</style>

<template>
  <div class="Upload cf">

<Card style="margin-bottom: 15px;">
<div v-show="img.length !==0 ">
  <ul class="lisimg" id="todoList">
    <li class="li notwrap todolist-item" v-for="(item, index) in img" :key="index" :data-index="index">
     <p class="dataLest" :datas='item.url' :types="item.type"></p>
      <img :src="item.url" :alt="item.type">
       <Select v-model="item.type">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
       </Select>
       <span class="removeimg" @click="removerImg(index,this)"><Icon color="#949494" type="close-round"></Icon></span>
       <span class="loogimgs" @click='clickCard(item.url)'>查看大图</span>
    </li>
  </ul>
   <Modal
          v-model="clickCards" width="600px">
          <img :src="clickCardsimg" style="width:100%;height:auto">
         </Modal>
  </div>
  <div v-show="img.length ==0">
  <Alert style="margin: 0;" type="warning" show-icon>没有图片</Alert></div>
</Card>

<pre>{{img}}</pre>

    <Upload
        multiple
        type="drag"
        :headers="keys"
        :before-upload="beforeUpload"
        :on-progress='onProgress'
        :on-success='onSuccess'
        :on-error='onError'
        :on-preview='onPreview'
        :on-remove='onRemove'
        :on-format-error='onFormatError'
        :on-exceeded-size='onExceededSize'
        :format="['jpg','jpeg','png','gif']"
        :max-size="10240"
        :action='actionUrl'>
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖动文件上传</p>
        </div>
    </Upload>

        <Button type="primary" icon="iphone" @click="upphone = true">手机上传图片</Button>
    <Modal v-model="upphone" width="400" :closable="false" :mask-closable="false">
        <p slot="header" style="text-align:center">
            <Icon type="iphone"></Icon>
            <span>手机上传图片</span>
        </p>
        <div style="text-align:center">
            <canvas id="qrccode-canvas"></canvas>
            <Alert show-icon>上传完毕后点击 <b>“我已上传完毕”</b> 即可</Alert>
        </div>
        <div slot="footer">
            <Button type="primary" :loading="modal_loading" @click="uppones" long>“我已上传完毕”</Button>
        </div>
    </Modal>
  </div> 
</template>

<script>
import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie';
import Sortable from 'sortablejs';
import qrcode from 'qrcode'
var QRCode = require('qrcode')
var canvas = ''
export default {
    name: 'Uploads',
    props:[
        "dataimg"
    ],
    data () {
      return {
        cityList: [
                    {
                        value: '封面',
                        label: '封面'
                    },
                    {
                        value: '会议室',
                        label: '会议室'
                    },
                    {
                        value: '咖啡厅',
                        label: '咖啡厅'
                    },
                    {
                        value: '休息室',
                        label: '休息室'
                    },
                    {
                        value: '茶水间',
                        label: '茶水间'
                    },
                    {
                        value: '吸烟室',
                        label: '吸烟室'
                    },
                    {
                        value: '书吧',
                        label: '书吧'
                    },
                    {
                        value: '前台',
                        label: '前台'
                    },
                    {
                        value: '办公室内景',
                        label: '办公室内景'
                    },
                    {
                        value: '外观',
                        label: '外观'
                    },
                    {
                        value: '入口',
                        label: '入口'
                    },
                    {
                        value: '大堂',
                        label: '大堂'
                    },
                    {
                        value: '走廊',
                        label: '走廊'
                    },{
                        value: '电梯间',
                        label: '电梯间'
                    },{
                        value: '商业配套',
                        label: '商业配套'
                    },
                    {
                        value: '景观',
                        label: '景观'
                    },
                    {
                        value: '共享办公专用',
                        label: '共享办公专用'
                    },   
                    {
                        value: '其他',
                        label: '其他'
                    }
                ],
         actionUrl:'/api/imgup?master='+Cookies.set('user'),
         keys:{},
         img:[],
         clickCardsimg:'',
         clickses:false,
         clickCards:false,
         codesrc:'',
         webid:Math.random().toString(16).substring(2),
         master:Cookies.set('user'),
         upphone:false,
         modal_loading:false
      }
     },
    mounted(){
      this.keys = {
         Authorization:'Bearer '+Cookies.set('keya')
      };
      this.qrcode();
      this.img = this.dataimg;
      // console.log({Authorization:'Bearer '+Cookies.set('keya')})
        let _this = this;
        let todoList = document.getElementById('todoList');
        Sortable.create(todoList, {
            group: {
                name: 'list',
                pull: true
            },
            animation: 120,
            ghostClass: 'placeholder-style',
            fallbackClass: 'iview-admin-cloned-item',
            onUpdate (evt) {
              _this.order();
            }
        });
        // _this.order();
    },
    methods: {
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
               // console.log(res.data.message)
               for (var i = 0; i < res.data.message.length; i++) {
                   _this.img.push({
                      url:'http://www.yuebanyuehao.com'+res.data.message[i],
                      type:'',
                      eq:0
                   })
               }
                _this.modal_loading = false
                 _this.upphone = false
            })
            .catch(function (err) {
                _this.$Notice.error({title: '错误'});
            })
       },
       beforeUpload(){
         //参数为上传的文件，若返回 false 或者 Promise 则停止上传
       },
       onProgress(event, file, fileList){
       },
       onSuccess(response, file, fileList){
         // console.log(response.message)
         let _this = this;
         let index = _this.img.length;
         _this.img.push({
            url:'http://www.yuebanyuehao.com'+response.message,
            type:'',
            eq:index
         })
         setTimeout(function() {
           _this.order();
         })
       },
       onError(error, file, fileList){
         console.log(error)
         console.log(file)
         console.log(fileList)
         this.$Notice.warning({
                    title: '文件上传失败',
                    desc: '文件  ' + file.name + ' 文件上传失败'
                });
         
       },
       onPreview(file){
         //可以通过 file.response 拿到服务端返回数据
       },
       onRemove(file, fileList){
       },
       onFormatError(file, fileList){
         this.$Notice.warning({
              title: '文件格式不正确',
              desc: '文件格式 ' + file.name + ' 不正确，[jpg,jpeg,png,gif]'
          });

       },
       onExceededSize(file, fileList){
          this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件  ' + file.name + ' 太大，不超过10M。'
                });
       },
       headerss(){
         // return Authorization:'Bearer '+Cookies.set('keya')
       },
       order(){
        let _this = this;
         // _this.imgData = [];
         let data = [];
        $('#todoList .dataLest').each(function(index) {
             data.push({
              url:$(this).attr('datas'),
              type:$(this).attr('types'),
              eq:index
            })
        });
        _this.img = data;
         // console.log( _this.imgData)
       },
       removerImg(e){
        let _this = this;
         _this.img.splice(e,1)
       },
        clickCard(e){
            this.clickCardsimg = e;
            this.clickCards = true;
        },
        qrcode () {
          let url = 'http://www.yuebanyuehao.com/admin/upload.html?data='+this.webid+','+this.master
          QRCode.toCanvas(document.getElementById('qrccode-canvas'), url, (error) => {
            if (error) {
              console.log(error)
            } else {
              console.log('ok')
            }
          })
       } 
    }
};
</script>
