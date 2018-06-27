<style lang="less" scoped>
// scoped
.add{
   .tables{
    width:100%;
    empty-cells: show;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 4px;
    border: 1px solid #ddd;
    border-collapse: separate;
    border-left: 0;
    th{
      padding: 0;
      font-size: 12px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      line-height: 20px;
      word-break: break-all;
      text-align: center ;
      background-color: #f0f0f0;
       cursor: pointer;
      span{
        display:block;
        padding:10px;
      }
      &:hover{
        opacity: 0.9;
      }
    }
    td{
      padding: 0;
      font-size: 12px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      text-align: center;
      line-height: 1.2;
      word-break: break-all;
      cursor: pointer;
      span{
        display:block;
        padding:10px;
      }
      &:hover{
        opacity: 0.9;
      }
    }
  }
  .legao-li{
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
    border: 1px solid #ccc;
    list-style-type: none;
    position:relative;
    .addseright{
      position:absolute;
      top:0;
      right:10px;
      width:320px;
    }
    .ivu-tooltip{
      height:30px;
      line-height:30px;
    }
    li{
      display:inline-block;
      margin: 0 15px;
      i{
        display: block;
        width: 20px;
        height: 20px;
        margin-top: 20px;
        margin-right: 5px;
        float: left;
        border: 1px solid #eee;
      }
    }
  }

    .legao-li .color1 i,
      .color_daiding {
        background-color: #7e7e7e !important;
        border: 1px solid #dcdcdc !important;
        /*待定*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      
      .legao-li .color2 i,
      .color_youxiao {
        background-color: #ffd059 !important;
        border: 1px solid #dcdcdc !important;
        /*黄*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      
      .legao-li .color4 i,
      .color_yishow {
        background-color: #e3f7dd !important;
        border: 1px solid #dcdcdc !important;
        /*绿*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      
      .legao-li .color5 i,
      .color_wuxiao {
        background-color: #ffffff !important;
        border: 1px solid #dcdcdc !important;
        /*无效*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      
      .legao-li .color6 i,
      .color_xinzeng {
        background-color: #fb978c !important;
        border: 1px solid #dcdcdc !important;
        /*红*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      
      .legao-li .color7 i,
      .color_zaitan {
        background-color: #75cfff !important;
        border: 1px solid #dcdcdc !important;
        /*蓝*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      
      .legao-li .color3 i,
      .color_yizu {
        background-color: #d0d0d0 !important;
        border: 1px solid #dcdcdc !important;
        /*有可能重复*/
        position:relative;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
      .color_x{
        background-color: #2d8cf0 !important;
        border: 1px solid #2d8cf0 !important;
        position: relative;
        color: #fff;
         &::after{ 
          content:"";
          display:block;
          position:absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          background:transparent;
          z-index: 9999;
        }
      }
}
     
</style>

<template>
   <div class="add">
   	<Card>
    <pre>{{datas}}</pre>
    <pre>{{Addclasstable}}</pre>
    <div>
      <Tag v-for="(item,index) in Addclasstable" :key="index" type="dot" closable color="blue" @on-close='removeTag(index)'>
        {{item.name}}
      </Tag>
      <Tooltip content="添加未知单元号" placement="top" v-if="!addingNewTag">
          <Button type="dashed" @click="addingNewTag = true">添加未知单元号</Button>
      </Tooltip>
    </div>
    <div>
      
      <div v-if="addingNewTag" style="margin-top:10px;">
        <div class="add-new-tag-con">
            <Col style="display:inline-block; width:100px;">
                <InputNumber :max="100" :min="1" v-model="newTagName" placeholder="请输入单元号" style="width:100px"></InputNumber>                               
            </Col>
            <Col style="display:inline-block; width:50px;margin-left: 10px;">
                <Button size="small" type="primary" @click='addraga'>确定</Button>
            </Col>
            <Col style="display:inline-block; width:50px">
                <Button size="small" type="ghost" @click="addingNewTag = false">取消</Button>
            </Col>
        </div>
        <Alert style="margin-top:10px;">如果遇到单元号未知 请填写楼层 添加未知楼层 自定义单元号可能会重复录入楼盘</Alert>
    </div>

    </div>
    <ul class="legao-li">
    <div class="addseright cf">
    <div style="float: left;">
       <Tooltip content="点击切换数字和字母" placement="top">
             <i-switch v-model="switch1"></i-switch>
             <span>{{switch1?"数字":"字母"}}</span>
        </Tooltip>
   
    </div>
     <div style="float:right;margin:0 5px;">
        <Tooltip content="添加高度" placement="top">
            <Button :disabled="addNubut" type="error" icon="arrow-up-c" @click="adds+=1"></Button>
        </Tooltip>
         <Tooltip content="减少高度" placement="top">
           <Button :disabled="remNubut" type="error" icon="arrow-down-c" @click="adds-=1"></Button>
        </Tooltip>
      </div>

     <div style="float:right;margin:0 5px;">
        <Tooltip content="添加单元号" placement="top">
            <Button :disabled="addNubut" type="primary" icon="plus-round" @click="add+=1"></Button>
        </Tooltip>
         <Tooltip content="减少单元号" placement="top">
           <Button :disabled="remNubut" type="primary" icon="minus-round" @click="add-=1"></Button>
        </Tooltip>
      </div>
     
</div>
    <li class="color1">
      <i></i>待定
      <span>{{lenthsec}}</span>套
      新增
      <span>{{lenthsee}}</span>套
      
    </li>

    <li class="color4">
      <i></i>有效
      <span>{{lenthseg}}</span>套
    </li>

    <li class="color2">
      <i></i>已租
      <span>{{lenthseb}}</span>套
       我租
      <span>{{lenthsed}}</span>套
    </li>

    <li class="color7">
      <i></i>已售
      <span>{{lenthsea}}</span>套
    </li>

    <li class="color6">
      <i></i>无效
      <span>{{lenthsef}}</span>套
    </li>

  </ul>

    <div style="overflow:auto;max-height: 400px;">
    <table class="tables">
    <thead>
      <tr>
        <th>楼层(实际)</th>
        <th v-for="n in add" v-text='switch1? n +"室":zimu[n] +"室"'></th>
     </tr>
    </thead>
    <tbody>
      <tr v-for="n in adds">
        <th class='addse' :name="n+'F-整层'" width="90">
          <span @click='addTbZ(n +"F-整层")' v-text='n +"F-整层"'></span>
        </th>
        <td class='addse' v-for="s in add" :name="n+'F-'+s" :eq="n+'F-'+s">
        <span @click="addTb(n+'F-'+s)">{{n}}F-{{switch1? s>=10? s:'0'+s : zimu[s]}}</span>
        </td>
      </tr>
    </tbody>
	 </table>
  </div>
   	</Card>
   </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'add',
    props:[
        "yiyouCard"
    ],
     data () {
	    return {
        zimu:["","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],         
        add:10,  //宽       
        adds:10,  //高       
        switch1:true,
        addNubut:false,
        newTagName:0,
        addingNewTag: false, // 添加新标签
        remNubut:false,
        datas:{},
        Addclasstable:[],
        lenthsea: 0,//已售
        lenthseb: 0,//已租
        lenthsec: 0,//待定
        lenthsed: 0,//我租
        lenthsee: 0,//新增
        lenthsef: 0,//无效
        lenthseg: 0,//有效     
	    }
	},
  mounted(){
    this.datas = this.yiyouCard;
    let addsee = parseInt(this.datas[0].storey2);
    let adde = this.datas[0].laga2;
    this.adds = addsee; //高
    if (adde == null) {
      this.add = 10
    }else{
      this.add = parseInt(adde)
    }
    // console.log(adde)
    this.addse();
    // console.log("%c 已售: "+this.datas[1]["已售"].length,'color:red;font-size:2em')
    // console.log("%c 已租: "+this.datas[1]["已租"].length,'color:red;font-size:2em')
    // console.log("%c 待定: "+this.datas[1]["待定"].length,'color:red;font-size:2em')
    // console.log("%c 我租: "+this.datas[1]["我租"].length,'color:red;font-size:2em')
    // console.log("%c 新增: "+this.datas[1]["新增"].length,'color:red;font-size:2em')
    // console.log("%c 无效: "+this.datas[1]["无效"].length,'color:red;font-size:2em')
    // console.log("%c 有效: "+this.datas[1]["有效"].length,'color:red;font-size:2em')
    this.tablese(); //填充颜色

    for (var i = 0; i < this.datas[1]["待定"].length; i++) {
       let e = String(this.datas[1]["待定"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_daiding');
       }) 
    }
    for (var i = 0; i < this.datas[1]["新增"].length; i++) {
       let e = String(this.datas[1]["新增"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_daiding');
       }) 
    }
    for (var i = 0; i < this.datas[1]["有效"].length; i++) {
       let e = String(this.datas[1]["有效"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_yishow');
       }) 
    }
    for (var i = 0; i < this.datas[1]["已租"].length; i++) {
       let e = String(this.datas[1]["已租"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_youxiao');
       }) 
    }
    for (var i = 0; i < this.datas[1]["我租"].length; i++) {
       let e = String(this.datas[1]["我租"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_youxiao');
       }) 
    }
    for (var i = 0; i < this.datas[1]["已售"].length; i++) {
       let e = String(this.datas[1]["已售"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_zaitan');
       }) 
    }
    for (var i = 0; i < this.datas[1]["无效"].length; i++) {
       let e = String(this.datas[1]["无效"][i].name);
       setTimeout(function() {
         $("span:contains("+e+")").parent('td').addClass('color_xinzeng');
       }) 
    }

  },
  methods: {
      tablese(){
        let _this = this;
        _this.lenthsea  =  _this.datas[1]["已售"].length;
        _this.lenthseb  =  _this.datas[1]["已租"].length;
        _this.lenthsec  =  _this.datas[1]["待定"].length;
        _this.lenthsed  =  _this.datas[1]["我租"].length;
        _this.lenthsee  =  _this.datas[1]["新增"].length;
        _this.lenthsef  =  _this.datas[1]["无效"].length;
        _this.lenthseg  =  _this.datas[1]["有效"].length;
      },
      addTb(e){
         let _this = this;
        // $('[name='+e+']').addClass('color_daiding');
        let data = e.split('-');
        let tow = '';
        if (parseInt(data[1])>=10) {
           tow = data[1]
        }else{
           tow = "0"+data[1]
        }
      
        let digital = data[0]+"-"+tow;
        let digitals = data[0]+"-"+_this.zimu[parseInt(data[1])];
        // console.log(digital)
         if (_this.switch1){
            _this.Addclasstable.push({name:digital})
          }else{
            _this.Addclasstable.push({name:digitals})
          }
          this.addse()
      },
      addTbZ(e){
        let _this = this;
         _this.Addclasstable.push({name:e})
      },
      addse(){
        $('.addse').each(function(index, el) {
           $(this).attr('name', $(this).text());
           // console.log($(this).text())
        });
      },
      removeTag(event, name){
          const index = this.Addclasstable.indexOf(name);
          this.Addclasstable.splice(index, 1);
      },
      addraga(){
        this.Addclasstable.push({name:this.newTagName+"F-未知"});
        this.newTagName = 0;
        this.addingNewTag = false;
      }
  },
  watch:{
   add: {
      handler: function (val, oldVal){
        if (val >= 17) {
          this.addNubut = true;
        }else{
          this.addNubut = false;
        }
        if (val <= 1) {
          this.remNubut = true;
        }else{
          this.remNubut = false;
        }
      },
      deep: true
    },
     Addclasstable: {
      handler: function (val, oldVal){
        $(".addse").removeClass('color_x')
        for (var i = 0; i < this.Addclasstable.length; i++){
          $("[name="+this.Addclasstable[i].name+"]").addClass('color_x');
        }
      },
      deep: true
    },
  }

};
</script>
