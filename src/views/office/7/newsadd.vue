
<style lang="less">
 .newsadd{
  .Uplimg{
    width:200px; 
    height:150px;
    display: inline-block;
    margin-right:20px;
    border:1px solid #ddd;
    padding:5px;
    text-align:center;
    line-height:150px;
    img{
        width:100%;
    }
  }
  .Uploadsee{
    display: inline-block;
    vertical-align: bottom;
    .ivu-upload-list{display:none}
  }
 }
</style>

<template>
   <div class="newsadd cf">
   <pre>{{addnews}}</pre>
       <div>
        <Row>
            <Col>
                <Card>
                    <Form :model="addnews" :label-width="100">
                        <FormItem label="文章标题">
                            <Input v-model="addnews.title"></Input>
                        </FormItem>
                        <FormItem label="文章类型">
                             <RadioGroup v-model="addnews.type" type="button">
                                <Radio label="行业新闻"></Radio>
                                <Radio label="楼盘介绍"></Radio>
                             </RadioGroup>
                        </FormItem>
                        <FormItem label="文章推送">
                             <RadioGroup v-model="addnews.movement" type="button">
                                <Radio label="列表精选"></Radio>
                                <Radio label="频道主推"></Radio>
                                <Radio label="首页主推"></Radio>
                             </RadioGroup>
                        </FormItem>
                        <FormItem label="文章摘要">
                            <Input v-model="addnews.abstract" type="textarea" :rows="4"></Input>
                        </FormItem>
                        <FormItem label="封面图">
                            <div class="Uplimg">
                               <h3 v-if="addnews.titlesrc ==''">没有封面图</h3>
                               <img v-else :src="addnews.titlesrc" alt="封面图">
                            </div>
                            <Upload class="Uploadsee" :headers="keys" :format="['jpg','jpeg','png','gif']" action='/api/imgup' :on-success='onSuccess'>
                              <Button type="ghost" icon="ios-cloud-upload-outline">上传图片</Button>
                            </Upload>
                        </FormItem>
                        <FormItem label="文章内容">
                            <textarea id="articleEditor"></textarea>
                        </FormItem>
                        <FormItem>
                             <Button @click="handlePublish" :loading="publishLoading" icon="ios-checkmark" type="primary">发布</Button>
                        </FormItem>
                    </Form>
                </Card>
            </Col>
        </Row>
    </div>

   </div>
</template>

<script>
import tinymce from 'tinymce';
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'newsadd',
      data () {
          return {
             keys:{},
             publishLoading:false,
             addnews:{
                title:'',
                type:'行业新闻',
                movement:'列表精选',
                abstract:'',
                titlesrc:'',
                content:''
             }
          }
        },
        mounted(){
            this.keys = {
             Authorization: 'Bearer ' + Cookies.set('keya')
          };
          let _this = this;
            tinymce.init({
                selector: '#articleEditor',
                branding: false,
                elementpath: false,
                height: 350,
                language: 'zh_CN.GB2312',
                menubar: 'edit insert view format table tools',
                theme: 'modern',
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                    'searchreplace visualblocks visualchars code fullscreen fullpage',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons paste textcolor colorpicker textpattern imagetools codesample'
                ],
                toolbar1: ' newnote print fullscreen preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
                autosave_interval: '20s',
                image_advtab: true,
                table_default_styles: {
                    width: '100%',
                    borderCollapse: 'collapse'
                },
                setup: function (editor) {
                        editor.on('init', function (e) {
                             // tinymce.get('articleEditor').setContent('localStorage.editorContent')
                        });
                        editor.on('keydown', function (e) {
                            _this.addnews.content = e.currentTarget.innerHTML
                        });
                    }
            }); 
        },
        destroyed () {
          tinymce.get('articleEditor').destroy();
        },
        methods:{
           onSuccess(response, file, fileList) {
            let img = 'http://47.98.155.165' + response.message
            this.addnews.titlesrc = img
          },
          handlePublish(){
             if (this.addnews.title =="") {
                  this.$Notice.warning({
                    title: '请填写文章标题',
                 });
                return false;
             }else if(this.addnews.abstract ==""){
                    this.$Notice.warning({
                    title: '请填写文章摘要',
                 });
                return false;
             }else if(this.addnews.titlesrc ==""){
                    this.$Notice.warning({
                    title: '请上传封面',
                 });
                return false;
             }else if(this.addnews.content ==""){
                    this.$Notice.warning({
                    title: '请填写文章内容',
                 });
                return false;
             }
          }

        }
};
</script>

