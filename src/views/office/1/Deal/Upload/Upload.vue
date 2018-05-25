<style lang="less">
   .masdasA>a{
     margin:2px;
   }
   .addBaogao{
    z-index:55;
   }
</style>

<template>
  <div class="Upload cf">
  <pre>{{data}}</pre>
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
        :format="['jpg','jpeg','png','gif','pdf','ai','zip','rar','xls','avi','docx']"
        :max-size="10240"
        :action='actionUrl'>
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖动文件上传</p>
        </div>
    </Upload>
  </div> 
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'Uploads',
    data () {
      return {
         actionUrl:'/api/up2',
         keys:{},
         data:[]
      }
     },
    mounted(){
      this.keys = {
         Authorization:'Bearer '+Cookies.set('keya')
      };
    },
    methods: {
       beforeUpload(){
         //参数为上传的文件，若返回 false 或者 Promise 则停止上传
       },
       onProgress(event, file, fileList){
       },
       onSuccess(response, file, fileList){
         console.log(response.message)
          this.data.push({
            url:'http://47.98.155.165'+response.message,
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
         // console.log(file)
       },
       onRemove(file, fileList){
       },
       onFormatError(file, fileList){
         this.$Notice.warning({
              title: '文件格式不正确',
              desc: '文件格式 ' + file.name + ' 不正确，[jpg,jpeg,png,gif,pdf,ai,zip,rar,xls,avi]'
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
    }
};
</script>
