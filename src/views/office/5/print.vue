<style lang="less">
   .print{
.tables{
    width:100%;
    margin:0 auto;
    empty-cells: show;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 4px;
    border: 1px solid #ddd;
    border-collapse: separate;
    border-left: 0;
    th{
      padding: 7px;
      font-size: 15px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      line-height: 20px;
      word-break: break-all;
          text-align: left;
      font-weight:bold
    }
    td{
      padding: 7px;
      font-size: 15px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
          text-align: left;
      line-height: 20px;
      word-break: break-all;
    }
  }
  .adJdas{
     text-align:left;
     padding: 10px 0;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
    -webkit-box-pack: space-evenly;-ms-flex-pack: space-evenly;justify-content: space-evenly;
    li{
      list-style-type: none;
      display:inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: bold;
    }
  }
  .panel-header{
    position: relative;
    border: 1px solid #ddd;
    border-bottom-width: 2px;
    background-color: #f5f5f5;
    padding:15px;
    .solidarity{
        position: absolute;
        right: 15px;
        top: 17px;
        background: #ed1f24;
        color: #fff;
        font-size: 17px;
        padding: 2px 5px;
        font-weight: 100;
    }
  }
  .seee{
    .ivu-card-body{
        padding:10px 16px;
    }
   }      
}


@media print {
        #pdfDom{
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 999 !important;
        }
        #main .sidebar-menu-con , #main .main-header-con{
         display:none !important
        }
       #main #pdfDom{
         display:block !important 
       }

    }

    
</style>

<template>
   <div class="print">
    <pre>{{TableData}}</pre>
    <Row>
        <Col :xs="24" :sm="24" :md="24" :lg="20" style="padding:5px;">
        <!--startprint-->
        <Card id="pdfDom" style="border-color:#fff;background:#fff">
            <div class="panel-header">
                <h2>德御商业地产</h2>
                <div class="solidarity">感恩·品德·团队</div>
            </div>
            <table class="tables">
                <tbody>
                    <tr>
                        <th colspan="4" style="border-top: 1px solid #ddd;">
                            <ul class="adJdas">
                                <li>大厦名称：{{name}}</li>
                                <li>姓名：</li>
                                <li>名片：</li>
                                <li>电话：</li>
                                <li>经理签字：</li>
                                <li>日期：</li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th width="120">单元号</th>
                        <th>公司名称</th>
                        <th>电话</th>
                        <th>最新记录</th>
                    </tr>
                    <tr v-for="n in TableData" :key="n.gname">
                        <th>{{n.hnumber}}</th>
                        <td>{{n.gname}}</td>
                        <td>{{n.man}}</td>
                        <td>{{n.biko}}</td>
                    </tr>
                </tbody>
            </table>
        </Card>
        <!--endprint-->  
        </Col>
          <Col :xs="24" :sm="24" :md="24" :lg="4" style="padding:5px;">
            <Card class="seee">
              <p slot="title">
                <Icon type="navicon"></Icon>
                打印导出
              </p>
                <Button style='margin:5px' type="primary" icon="image" @click="exportImage">导出表格为图片</Button>
                <!-- <Button style='margin:5px' type="primary" icon="image" @click="getPdf()">导出表格为PDF</Button> -->
                <Button style='margin:5px' type="primary" icon="printer" @click="printer">打印</Button>
                <div id="showImage" style="display: none;">
                    <img id="exportedImage" />
                </div>
            </Card>
        </Col>
    </Row>
</div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import html2canvas from 'html2canvas';
export default {
    name: 'print',
    data () {
        return {
            id:'',
            name:'',
            imageName: '企业名录打印',
            htmlTitle:"qwerdf",//这个是pdf文件的名字
            TableData:[]
        };
    },
     mounted(){
        this.id = this.$route.query.deal_id; //id
        this.name = this.$route.query.name; //id
        this.imageName = this.$route.query.name; //id
        this.htmlTitle = this.$route.query.name; //id
        this.showHide()
     },
    methods: {
     showHide(){
          //展开 收缩
          var _this = this;
            axios({
                  method:'post',
                  url:'/api/india?ofid='+_this.id,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')}
               })
              .then(function(res){
                _this.TableData = res.data.message
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '名录错误'});
              })

        },
        exportImage () {
            let vm = this;
            let table = document.getElementById('pdfDom');
            /* 这部分代码用来解决生成的图片不清晰的问题 */
            let tableWidth = table.offsetWidth;
            let tableHeight = table.offsetHeight;
            let canvas = document.createElement('canvas');
            canvas.width = tableWidth * 2;
            canvas.height = tableHeight * 2;
            canvas.style.width = tableWidth + 'px';
            canvas.style.height = tableHeight + 'px';
            document.body.appendChild(canvas);
            var context = canvas.getContext('2d');
            context.scale(2, 2);
            /* 这部分代码用来解决生成的图片不清晰的问题 */
            html2canvas(table, {
                // canvas: canvas,
                onrendered (image){
                    var url = image.toDataURL();
                    document.getElementById('exportedImage').src = url;
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = vm.imageName ? vm.imageName : '未命名';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    // document.body.removeChild(canvas);
                }
            });
        },
        printer(){
            window.print();   
        }
    }
};
</script>