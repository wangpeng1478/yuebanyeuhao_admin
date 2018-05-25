<style lang="less">
   .addlst{
      .selectsNmae{
    .ivu-select-not-found{
      display:none
    }
   }
      .spanLeft{
      	float:left;
      	font-weight: 100;
      	cursor: pointer;
      	&:hover{
      		opacity: 0.7;
      	}
      }
      .ivu-input[disabled], fieldset[disabled] .ivu-input{
      	 color: #6b6767;
      }
      .Cardtop{
      	margin-bottom:15px;
      }
      .ivu-form-item{
      	margin:5px 0;
      }
      hr{
        margin:5px 0;
        border: none;
        border-top: 1px dashed #ddd;
      }
      .reds{
        input{
          color: red;
          font-weight: 600;
        }
      }

   }
</style>

<template>
  <div class="addlst">
  <pre>{{data}}</pre>
  <pre>{{file}}</pre>
  <Row>
  	  <Col :xs="24" :sm="24" :md="24" :lg="24">
	    <Card class='cf'>
	     <p slot="title" style="text-align:center">
	     <span @click='historys' class='spanLeft'> <Icon type="ios-arrow-left"></Icon> 返回</span>
            编辑成交报告
         </p>
         <div v-if="loading111">
        <Form :model="data" :label-width="100">
           <Card class="Cardtop">
            <p slot="title">基本信息</p>
            <Row>
            <Col :xs="24" :sm="24" :md="8" :lg="5">
             <FormItem label="签单日期">
              <DatePicker style="width:100%" v-model="data.SignTime" type="date" placeholder="请选择" ></DatePicker>
             </FormItem>
            </Col>
              <Col :xs="24" :sm="24" :md="8" :lg="5">
             <FormItem label="签约人">
               <Input v-model="data.SignRen" disabled></Input>
             </FormItem>
            </Col>
              <Col :xs="24" :sm="24" :md="8" :lg="5">
             <FormItem label="报单日期">
               <DatePicker style="width:100%" v-model="data.SignTimes" type="date" placeholder="请选择" ></DatePicker>
             </FormItem>
            </Col>
            </Row>
           </Card>

           <Card class="Cardtop">
            <p slot="title">
            成交楼盘信息
             <RadioGroup style='position: absolute; top: 12px;left: 115px' 
             v-model="data.type" 
             type="button" 
             @on-change='RadioGroups' 
             size="small">
                <Radio label="传统办公"></Radio>
                <Radio label="共享办公"></Radio>
            </RadioGroup>
            </p>

             <Row v-show='data.Radios'>
            

               <Col :xs="24" :sm="24" :md="8" :lg="5">
               <FormItem label="成交楼盘" class="ivu-form-item-required">
      <!--           <Select 
                    v-model="data.Properties" 
                    class="selectsNmae" 
                    filterable
                    clearable
                    remote
                    :remote-method="remoteMethod"
                    @on-change="regionDta2"
                    placeholder = '请搜索楼盘'>
                      <Option v-for="(option, index) in optionsName" :value="option.value" :key="index">{{option.label}}</Option>
                  </Select> -->
                  <Input v-model="data.Properties" disabled></Input>

               </FormItem>
               </Col>
              <Col :xs="24" :sm="24" :md="8" :lg="5">
               <FormItem label="成交房源" class="ivu-form-item-required">
 <!--                 <Select v-model="data.housing">
                    <Option v-for="item in cityListsss" :value="item.value" :key="item.length">{{ item.label }}</Option>
                </Select> -->
                <Input v-model="data.housing" disabled></Input>
               </FormItem>
               </Col> 
                  <Col :xs="24" :sm="24" :md="8" :lg="5">
               <FormItem label="面积">
                 <Input v-model="data.acreage">
                  <span slot="append">m²</span>
                 </Input>
               </FormItem>
               </Col>    
             </Row>


             <Row v-show='!data.Radios'>
                <Col :xs="24" :sm="24" :md="8" :lg="5">
                    <FormItem label="品牌" class="ivu-form-item-required">
                     <!--   <Select v-model="data.brand" filterable @on-change="regionDta5">
                    <Option v-for="item in metross" :value="item.value" :key="item.length">{{ item.label }}</Option>
                    </Select> -->
                     <Input v-model="data.brand" disabled></Input>
                </Select>
                 </FormItem>
                 </Col>
                  <Col :xs="24" :sm="24" :md="8" :lg="5">
                 <FormItem label="网点" class="ivu-form-item-required">
     <!--                <Select v-model="data.Dot" filterable  @on-change="regionDta6">
                      <Option v-for="item in housings" :value="item.value" :key="item.length">{{ item.label }}</Option>
                    </Select> -->
                    <Input v-model="data.Dot" disabled></Input>
                 </FormItem>
                 </Col>
                    <Col :xs="24" :sm="24" :md="8" :lg="5">
                 <FormItem label="工位" class="ivu-form-item-required">
       <!--              <Select v-model="data.Station">
                    <Option v-for="item in housingss" :value="item.value" :key="item.length">{{ item.label }}</Option>
                </Select> -->
                 <Input v-model="data.Station" disabled></Input>
                 </FormItem>
                 </Col>
             </Row>
              
             <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="15">
                  <FormItem label="成交物业地址">
                     <Input v-model="data.address"  disabled></Input>
                  </FormItem>
                </Col>
             </Row>

             <Row>

              <Col :xs="24" :sm="12" :md="10" :lg="5">
               <FormItem label="月租金">               
                   <Input v-model="data.Monthly">
                       <span slot="append">元</span>
                      </Input>
               </FormItem>
               </Col>  
                 <Col :xs="24" :sm="12" :md="10" :lg="5">
                 <FormItem label="免租期">
                      <Input v-model="data.freePeriod">
                        <Select v-model="data.Company" slot="append" style='width:50px;'>
                            <Option value="月">月</Option>
                            <Option value="天">天</Option>
                        </Select>
                    </Input>
                 </FormItem>
                 </Col> 
               
                <Col :xs="24" :sm="12" :md="10" :lg="5">
               <FormItem label="开始租期">
                   <DatePicker style="width:100%" v-model="data.startTime" type="date" placeholder="请选择" ></DatePicker>
               </FormItem>
               </Col> 

                <Col :xs="24" :sm="12" :md="10" :lg="5">
               <FormItem label="结束租期">
                   <DatePicker style="width:100%" v-model="data.EndTime" type="date" placeholder="请选择" ></DatePicker>
               </FormItem>
               </Col> 


             </Row>

             <Row>
              <Col :xs="24" :sm="12" :md="10" :lg="5">
               <FormItem label="应收佣金" class="ivu-form-item-required reds">               
                  <Input v-model="data.Commission" @on-change="calculationall">
                       <span slot="append">元</span>
                      </Input>
               </FormItem>
               </Col> 

                <Col :xs="24" :sm="12" :md="10" :lg="10">
               <FormItem label="发票">               
                   <RadioGroup size="small" style="float:left;margin-right:5px;" v-model="data.invoice" type="button" @on-change="RadioGroupbutton">
                      <Radio label="开票"></Radio>
                      <Radio label="未开票"></Radio>
                  </RadioGroup>

                   <Input size="small" placeholder="税率" v-if='data.invoice !=="未开票"' v-model="data.taxRate" style='width:70px;margin-top: 0;top: 4px;' @on-change="RadioGroupbutton2">
                       <span slot="append">%</span>
                   </Input>
               </FormItem>
               </Col> 

             </Row>

             <Row>
              <Col :xs="24" :sm="24" :md="10" :lg="11">
               <FormItem label="介绍人">
                  <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="10">
                      <Input v-model="data.introduce.vlu_1" placeholder="请输入..."></Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="4">
                      <Input v-model="data.introduce.vlu_2" placeholder="姓名"></Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="8">
                      <Input v-model="data.introduce.vlu_3" placeholder="电话"></Input>
                    </Col>
                  </Row>             
               </FormItem>
               </Col>

               <Col :xs="24" :sm="24" :md="10" :lg="12">
               <FormItem label="回扣情况">               
                    <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="10" :sm="10" :md="10" :lg="5" class="reds">
                       <Input v-model="data.introduce.vlu_4" @on-change="calculation">
                         <span slot="append">￥</span>
                       </Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="10" :md="8" :lg="4" class="reds">
                      <Input v-model="data.introduce.vlu_5" readonly>
                         <span slot="append">%</span>
                       </Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="4" :md="4" :lg="4">
                       <Button @click="data.introduce.vlu_6 = !data.introduce.vlu_6" 
                       :type="data.introduce.vlu_6?'error':'dashed'" 
                       size="small" style="margin-left:3px">{{data.introduce.vlu_6?'隐藏':'已隐藏'}}</Button>

                    </Col>
                  </Row>   
               </FormItem>
               </Col>
             </Row>
             <hr />

              <Row>
              <Col :xs="24" :sm="24" :md="10" :lg="11">
               <FormItem label="产权人">
                  <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="10">
                      <Input v-model="data.Property.vlu_1" placeholder="请输入..."></Input>
                    </Col>

                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="4">
                      <Input v-model="data.Property.vlu_2" placeholder="姓名"></Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="8">
                      <Input v-model="data.Property.vlu_3" placeholder="电话">
                         <Button @click="addProperty()" slot="append" icon="plus-round"></Button>
                      </Input>
                    </Col>
                  </Row>             
               </FormItem>
               </Col>

               <Col :xs="24" :sm="24" :md="10" :lg="12">
               <FormItem label="回扣情况">               
                    <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="10" :sm="10" :md="10" :lg="5" class="reds">
                       <Input v-model="data.Property.vlu_4" @on-change="calculation1">
                         <span slot="append">￥</span>
                       </Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="10" :md="8" :lg="4" class="reds">
                      <Input v-model="data.Property.vlu_5" readonly>
                         <span slot="append">%</span>
                       </Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="4" :md="4" :lg="4">
                       <Button @click="data.Property.vlu_6 = !data.Property.vlu_6" 
                       :type="data.Property.vlu_6?'error':'dashed'" 
                       size="small" style="margin-left:3px">{{data.Property.vlu_6?'隐藏':'已隐藏'}}</Button>

                    </Col>
                  </Row>   
               </FormItem>
               </Col>
             </Row>
            
            <!-- addProperty -->
             <Row v-for="(item, index) in data.Property.add" :key="item.length">
              <Col :xs="24" :sm="24" :md="10" :lg="11">
               <FormItem label="">
                  <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="10">
                      
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="4">
                      <Input v-model="item.vlu_2" placeholder="姓名"></Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="8">
                      <Input v-model="item.vlu_3" placeholder="电话">
                         <Button @click="removeProperty(index)" slot="append" icon="minus-round"></Button>
                      </Input>
                    </Col>
                  </Row>             
               </FormItem>
               </Col>
               <Col :xs="24" :sm="24" :md="10" :lg="12">
               <FormItem label="">               
                    <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="10" :sm="10" :md="10" :lg="5">
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="10" :md="8" :lg="4">
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="4" :md="4" :lg="4">                 
                    </Col>
                  </Row>   
               </FormItem>
               </Col>
             </Row>
             <!-- addProperty -->
             <hr />


              <Row>
              <Col :xs="24" :sm="24" :md="10" :lg="11">
               <FormItem label="承租方">
                  <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="10">
                      <Input v-model="data.Rental.vlu_1" placeholder="请输入..."></Input>
                    </Col>

                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="4">
                      <Input v-model="data.Rental.vlu_2" placeholder="姓名"></Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="8">
                      <Input v-model="data.Rental.vlu_3" placeholder="电话">
                         <Button @click="addRental()" slot="append" icon="plus-round"></Button>
                      </Input>
                    </Col>
                  </Row>             
               </FormItem>
               </Col>

               <Col :xs="24" :sm="24" :md="10" :lg="12">
               <FormItem label="回扣情况">               
                    <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="10" :sm="10" :md="10" :lg="5" class="reds">
                       <Input v-model="data.Rental.vlu_4" @on-change="calculation2">
                         <span slot="append">￥</span>
                       </Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="10" :md="8" :lg="4" class="reds">
                      <Input v-model="data.Rental.vlu_5" readonly>
                         <span slot="append">%</span>
                       </Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="4" :md="4" :lg="4">
                       <Button @click="data.Rental.vlu_6 = !data.Rental.vlu_6" 
                       :type="data.Rental.vlu_6?'error':'dashed'" 
                       size="small" style="margin-left:3px">{{data.Rental.vlu_6?'隐藏':'已隐藏'}}</Button>

                    </Col>
                  </Row>   
               </FormItem>
               </Col>
             </Row>
            
            <!-- addRental -->
             <Row v-for="(item, index) in data.Rental.add" :key="item.length">
              <Col :xs="24" :sm="24" :md="10" :lg="11">
               <FormItem label="">
                  <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="10">
                      
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="4">
                      <Input v-model="item.vlu_2" placeholder="姓名"></Input>
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="24" :sm="24" :md="24" :lg="8">
                      <Input v-model="item.vlu_3" placeholder="电话">
                         <Button @click="removeRental(index)" slot="append" icon="minus-round"></Button>
                      </Input>
                    </Col>
                  </Row>             
               </FormItem>
               </Col>
               <Col :xs="24" :sm="24" :md="10" :lg="12">
               <FormItem label="">               
                    <Row>
                    <Col style='padding: 2px 2px 2px 0;' :xs="10" :sm="10" :md="10" :lg="5">
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="10" :md="8" :lg="4">
                    </Col>
                    <Col style='padding: 2px 2px 2px 0;' :xs="5" :sm="4" :md="4" :lg="4">                 
                    </Col>
                  </Row>   
               </FormItem>
               </Col>
             </Row>
             <!-- addRental -->
             <hr />

            <Row>
               <Col :xs="24" :sm="12" :md="10" :lg="5">
               <FormItem label="实收佣金">               
                   <Input v-model="data.SCommission" class="ivu-form-item-required reds" readonly>
                       <span slot="append">元</span>
                    </Input>
               </FormItem>
               </Col>
               <Col :xs="24" :sm="12" :md="10" :lg="10">
               <FormItem label="是否进账">               
                  <RadioGroup size="small" v-model="data.Houston" type="button">
                      <Radio label="进账"></Radio>
                      <Radio label="未进账"></Radio>
                  </RadioGroup>
               </FormItem>
               </Col>
            </Row>
             <Row>
                <Col :xs="24" :sm="24" :md="20" :lg="10">
                  <FormItem label="备注">
                     <Input v-model="data.Remarks"  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                  </FormItem>
                </Col>
             </Row>

           </Card>

           <Card class="Cardtop">
            <p slot="title">成交楼盘信息</p>

             <Row>
                <Col :xs="12" :sm="8" :md="8" :lg="6">
                  <FormItem label="业务主成交人">
                      <Input v-model="data.Major" disabled></Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="7" :md="7" :lg="4">
                  <FormItem label="业绩">
                       <Input v-model="data.MajorY" @on-change="sum1(data.MajorY,data.SCommission)">
                        <span slot="append">%</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="8" :md="8" :lg="5">
                  <FormItem label="金额" class="reds">
                       <Input v-model="data.MajorJ" @on-change="sum(data.MajorJ,data.SCommission)">
                        <span slot="append">元</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="1" :md="1" :lg="1">
                </Col>
             </Row>

             <Row>
                <Col :xs="12" :sm="8" :md="8" :lg="6">
                  <FormItem label="业务合作人">
                     <Select v-model="data.cooperation.cooperationn">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="7" :md="7" :lg="4">
                  <FormItem label="业绩">
                       <Input v-model="data.cooperation.cooperationY" @on-change="sum3(data.cooperation.cooperationY,data.SCommission)">
                        <span slot="append">%</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="8" :md="8" :lg="5">
                  <FormItem label="金额" class="reds">
                       <Input v-model="data.cooperation.cooperationJ" @on-change="sum4(data.cooperation.cooperationJ,data.SCommission)">
                        <span slot="append">元</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="1" :md="1" :lg="1">
                <div class="cf" style="text-align:center">
                 <Button @click="addCooperation" style="margin-top: 10px;" type="primary" shape="circle" icon="plus-round" size="small"></Button>
                 </div>
                </Col>
             </Row>
               <!-- add -->
             <Row v-for="(item, index) in data.cooperation.add" :key="item.length">
                <Col :xs="12" :sm="8" :md="8" :lg="6">
                  <FormItem label="业务合作人">
                     <Select v-model="item.cooperationn">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="7" :md="7" :lg="4">
                  <FormItem label="业绩">
                       <Input v-model="item.cooperationY" @on-change="sum33(data.cooperation.add[index].cooperationY,data.SCommission,index)">
                        <span slot="append">%</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="8" :md="8" :lg="5">
                  <FormItem label="金额" class="reds">
                       <Input v-model="item.cooperationJ" @on-change="sum44(data.cooperation.add[index].cooperationJ,data.SCommission,index)">
                        <span slot="append">元</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="1" :md="1" :lg="1">
                <div class="cf" style="text-align:center">
                 <Button @click="removeCooperation(index)" style="margin-top: 10px;" type="error" shape="circle" icon="minus-round" size="small"></Button>
                 </div>
                </Col>
             </Row>
              <!-- add -->

               <Row>
                <Col :xs="12" :sm="8" :md="8" :lg="6">
                  <FormItem label="房源归属人">
                     <Select v-model="data.ascription">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="7" :md="7" :lg="4">
                  <FormItem label="业绩">
                        <Select v-model="data.ascriptionY" @on-change="jsuadnsd(0)">
                        <Option value="5">5%</Option>
                        <Option value="10">10%</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="8" :md="8" :lg="5">
                  <FormItem label="金额" class="reds">
                       <Input v-model="data.ascriptionJ" readonly>
                        <span slot="append">元</span>
                       </Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="1" :md="1" :lg="1">
                </Col>
             </Row>

              <Row>
                <Col :xs="12" :sm="8" :md="8" :lg="6">
                  <FormItem label="照片归属人">
                     <Select v-model="data.imgs">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="7" :md="7" :lg="4">
                  <FormItem label="业绩">
                        <Select v-model="data.imgsY" @on-change="jsuadnsd(1)">
                        <Option value="5">5%</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="8" :md="8" :lg="5">
                  <FormItem label="金额" class="reds">
                       <Input v-model="data.imgsJ" readonly>
                        <span slot="append">元</span>
                       </Input>
                  </FormItem>
                  <!-- :on-blur="Performance" -->
                </Col>
                <Col :xs="12" :sm="1" :md="1" :lg="1">
                </Col>
             </Row>

     <!--   <div style="margin: 5px 0;max-width: 63%;">
               <Alert :type="xiangjias==100?'success':'error'" show-icon>
                  <h3 v-if="xiangjias==100">业绩 <b>100%</b> 可以提交</h3>
                  <h3 v-else>业绩不是 <b>100%</b> 无法提交</h3>
                  <span slot="desc">
                     <p>业务主成交人业绩(<b>{{data.MajorY}}%</b>)  </p>
                     <p>业务合作人1业绩(<b>{{data.cooperation.cooperationY}}%</b>)</p>
                     <p v-for="(item, index) in data.cooperation.add" :key="item.length">业务合作人{{index+2}}业绩(<b>{{item.cooperationY}}%</b>)</p>
                     <p>房源归属人业绩(<b>{{data.ascriptionY}}%</b>)</p>
                     <p>照片归属人业绩(<b>{{data.imgsY}}%</b>)</p>
                     <p>共(<b>{{xiangjias}}%</b>)</p>
                  </span>
              </Alert>
        </div> -->

           </Card>

           <Card class="Cardtop">
            <p slot="title">成交楼盘相关文件</p>
            <div class="cf">
              
              <Row>
                 <Col :xs="24" :sm="24" :md="16" :lg="16">
                  <Alert closable>请上传 客户营业执照、房东营业执照、产权证、身份证、委托书、意向书、定金协议、合同 等相关资料</Alert>
                   <Uploads ref="file"></Uploads>
                </Col>
              </Row>

            </div>
           </Card>
           <Card>
             <Button type="success" long :loading="loading" @click="subjioa">修改</Button>
           </Card>
        </Form>
        </div>

        <Card v-else>加载中</Card>

        </Card>
        </Col>
        </Row>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';
import Uploads from './Upload/Upload.vue';

export default {
    name: 'addlst',
    components:{Uploads},
    data () {
        return {
           shulv:'',
           id:'',
           xiangjias:'',
           loading:false,
           loading111:false,
           options1:[], //成交楼盘data
           housings:[], //成交楼盘data
           housingss:[], //成交楼盘data
           cityList:[],
           optionsName:[],
           cityListsss:[],
           metross:[],
           file:[],
           data:{
            SignTime: '',//签单日期
            SignRen: Cookies.set('user'),//签单人
            SignTimes: new Date().toLocaleString(), //报单日期
            acreage: '', //面积
            Properties: '', //成交楼盘
            housing: '', //成交房源
            type: '传统办公', //类型
            Radios: true, //传统 、共享
            address:'',//成交物业地址
            brand:'', //品牌
            Dot:'', //网点
            Station:'', //工位
            Monthly :'', //月租金
            startTime :'', //开始租期
            EndTime :'', //结束租期
            freePeriod :'', //免租期
            Company :'月', //免租期单位
            Commission :'', //应收佣金
            invoice :'未开票', //发票
            taxRate :'', //税率
            introduce :{
               vlu_1 :'',
               vlu_2 :'', //姓名
               vlu_3 :'', //电话
               vlu_4 :'', //回款
               vlu_5 :'', //%
               vlu_6 :true,
            }, //介绍人
            Property:{
               vlu_1 :'',
               vlu_2 :'',
               vlu_3 :'',
               vlu_4 :'',
               vlu_5 :'',
               vlu_6 :true,
               add:[]
             },//产权人
            Rental:{
               vlu_1 :'',
               vlu_2 :'',
               vlu_3 :'',
               vlu_4 :'',
               vlu_5 :'',
               vlu_6 :true,
               add:[]
             },//承租方
             SCommission:'',//实收佣金
             Houston:'进账',//进账
             Remarks:'',//备注
             Major:Cookies.set('user'),//主成交姓名
             MajorY:'',//主成交业绩
             MajorJ:'',//主成交金额
             cooperation:{
              cooperationn:'',//合作人姓名
              cooperationY:'',//合作人业绩
              cooperationJ:'',//合作人金额
              add:[]
             },//合作人
             ascription:'',//房源归属人姓名
             ascriptionY:'',//房源归属人业绩
             ascriptionJ:'',//房源归属人金额
             imgs:'',//照片归属人姓名
             imgsY:'',//照片归属人业绩
             imgsJ:'',//照片归属人金额
           }
        }
    },
    mounted(){
      this.id = this.$route.query.deal_id
      this.adminname();
      this.ajaxName();
      this.datiename();
      this.datae();
    },
    methods: {
      datae(){
        let _this = this;
        _this.loading111 = false
          axios({
              method: 'post',
              url: '/api/dealup1?deid1='+_this.id,
              headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
          })
          .then(function(res){
              // console.log(res.data.message.data)
             _this.data = res.data.message.data
             _this.loading111 = true
          })
          .catch(function(err) {
              _this.$Notice.error({ title: '错误' });
          })
      },
      xiangjia(){
        let a = this.data.MajorY
        let b = this.data.cooperation.cooperationY
        let c = this.data.ascriptionY
        let d = this.data.imgsY
        let add = 0;
         for (var i = 0; i < this.data.cooperation.add.length; i++) {
            add += Number(this.data.cooperation.add[i].cooperationY)
         }
        this.xiangjias = Number(a)+Number(b)+Number(c)+Number(d)+Number(add)
      },
      RadioGroupbutton(value){
          this.shulv = ""
          this.data.taxRate = ""
          this.data.introduce.vlu_4 = ''
          this.data.introduce.vlu_5 = ''
          this.data.Property.vlu_4 = ''
          this.data.Property.vlu_5 = ''
          this.data.Rental.vlu_4 = ''
          this.data.Rental.vlu_5 = ''
          // console.log(this.data.invoice)
          let a = this.data.Commission //应收佣金
          if (a == '') {
            this.$Message.warning('请填写应收佣金');
          }else{
             if (this.data.invoice == '开票') {
                 this.$Message.warning('请填写税率');
             }else{
               this.data.SCommission = this.data.Commission
             }
          }
         
          // data.invoice
      },
      RadioGroupbutton2(value){
          this.data.introduce.vlu_4 = ''
          this.data.introduce.vlu_5 = ''
          this.data.Property.vlu_4 = ''
          this.data.Property.vlu_5 = ''
          this.data.Rental.vlu_4 = ''
          this.data.Rental.vlu_5 = ''
           let a = this.data.Commission //应收佣金
          
          if (a == '') {
            this.$Message.warning('请填写应收佣金');
          }else{
            this.shulv = Number(this.data.Commission) - ((Number(this.data.Commission)*Number(this.data.taxRate))/100)
            this.data.SCommission = Number(this.data.Commission) - ((Number(this.data.Commission)*Number(this.data.taxRate))/100);
            // console.log( Number(this.data.Commission) - ((Number(this.data.Commission)*Number(this.data.taxRate))/100) )
          }
         
          // data.invoice

      },
      calculationall(){
        this.shishou()
        this.reqinsghU()
      },
      calculation(){
        // this.shishou()
         let a = this.data.Commission //应收佣金
         let b = this.data.introduce.vlu_4 //应收佣金
         let c = this.data.introduce.vlu_5 //应收佣金
         var ad  = Number(this.data.introduce.vlu_4)+Number(this.data.Property.vlu_4)+Number(this.data.Rental.vlu_4)
         console.log(ad)
         let shu = this.shulv 
         if(a == ''){
            this.$Message.warning('请填写应收佣金');
         }else{
            if (this.data.invoice == '未开票') {
               this.data.introduce.vlu_5 = this.GetPercent(Number(b),Number(a))
               this.data.SCommission = Number(a) - ad
             }else{
               this.data.introduce.vlu_5 = this.GetPercent(Number(b),Number(shu))
               this.data.SCommission = Number(shu) - ad
             }
            
         }
      },
       calculation1(){
         let a = this.data.Commission //应收佣金
         let b = this.data.Property.vlu_4 //应收佣金
         let c = this.data.Property.vlu_5 //应收佣金
          var ad  = Number(this.data.introduce.vlu_4)+Number(this.data.Property.vlu_4)+Number(this.data.Rental.vlu_4)
          let shu = this.shulv 
         if(a == ''){
            this.$Message.warning('请填写应收佣金');
         }else{
               if (this.data.invoice == '未开票') {
                this.data.Property.vlu_5 = this.GetPercent(Number(b),Number(a))
                this.data.SCommission = Number(a) - ad
              }else{
                this.data.Property.vlu_5 = this.GetPercent(Number(b),Number(shu))
                this.data.SCommission = Number(shu) - ad
              }
         }
      },
       calculation2(){
         let a = this.data.Commission //应收佣金
         let b = this.data.Rental.vlu_4//应收佣金
         let c = this.data.Rental.vlu_5 //应收佣金
          var ad  = Number(this.data.introduce.vlu_4)+Number(this.data.Property.vlu_4)+Number(this.data.Rental.vlu_4)
          let shu = this.shulv 
         if(a == ''){
            this.$Message.warning('请填写应收佣金');
         }else{
             if (this.data.invoice == '未开票') {
             this.data.Rental.vlu_5 = this.GetPercent(Number(b),Number(a))
             this.data.SCommission = Number(a) - ad
          }else{
             this.data.Rental.vlu_5 = this.GetPercent(Number(b),Number(shu))
             this.data.SCommission = Number(shu) - ad
          }
         }
      },
      shishou(){
          this.data.introduce.vlu_4 = ''
          this.data.introduce.vlu_5 = ''
          this.data.Property.vlu_4 = ''
          this.data.Property.vlu_5 = ''
          this.data.Rental.vlu_4 = ''
          this.data.Rental.vlu_5 = ''

          let a = this.data.Commission //应收佣金
          let b = this.data.introduce.vlu_4 //应收佣金
          let c = this.data.Property.vlu_4 //应收佣金
          let d = this.data.Rental.vlu_4//应收佣
          let e = Number(a) - Number(b) - Number(c) - Number(d)
          if(isNaN(e)){ 
              this.data.SCommission = a
            }else{
              this.data.SCommission = e
            }
          
      },
      sum(r,a){
        if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
           this.data.MajorY = this.GetPercent(Number(r),Number(a))
           this.xiangjia()
        }
      },
      sum1(r,a){
        if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
          this.data.MajorJ = (Number(r)*Number(a)) /100.00
          this.xiangjia()
        }
      },
      sum3(r,a){
        if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
           this.data.cooperation.cooperationJ = (Number(r)*Number(a)) /100.00
           this.xiangjia()
        }
      },
      sum33(r,a,p){
        if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
           this.data.cooperation.add[p].cooperationJ = (Number(r)*Number(a)) /100.00
           this.xiangjia()
        }
      },
      sum44(r,a,p){
        if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
           this.data.cooperation.add[p].cooperationY = this.GetPercent(Number(r),Number(a))
           this.xiangjia()
        }
      },
      sum4(r,a){
        if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
          this.data.cooperation.cooperationY = this.GetPercent(Number(r),Number(a))
          this.xiangjia()
        }
      },
      jsuadnsd(e){
        let a = this.data.SCommission
        let r = this.data.ascriptionY
        let rt = this.data.imgsY
        this.xiangjia()
       if(a == ''){
           this.$Message.warning('请填写应收佣金');
        }else{
           if (e ==0) {
              this.data.ascriptionJ = (Number(r)*Number(a)) /100.00
           }else{
              this.data.imgsJ = (Number(rt)*Number(a)) /100.00
           }
        }
      },
      reqinsghU(){
             this.data.MajorY = ''//主成交业绩
             this.data.MajorJ = ''//主成交金额
             this.data.cooperation = {
                cooperationn:'',//合作人姓名
                cooperationY:'',//合作人业绩
                cooperationJ:'',//合作人金额
                add:[]
             }//合作人
             this.data.ascriptionY = ''//房源归属人业绩
             this.data.ascriptionJ = ''//房源归属人金额
             this.data.imgsY = ''//照片归属人业绩
             this.data.imgsJ = ''//照片归属人金额
      },
      GetPercent(num, total) {
          let a =  Math.round(num / total * 10000) / 100.00
            if(isNaN(a)){ 
              return ('');// 小数点后两位百分比
            }else{
               return (a);// 小数点后两位百分比
            }
      }, 
       lounamems(e){
           let _this = this;
            axios({
                method:'post',
                url:'/api/dotx3?fname='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
               // console.log(res.data.message)
               _this.data.address = res.data.message
            })
            .catch(function (err) {
                _this.$Notice.error({title: '成交物业地址错误'});
            })
       },
       datiename(){
            let _this = this;
            axios({
                method:'post',
                url:'/api/sharename',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              let data = res.data.message;
              let metros = [];
                for (var i in data) {
                    let nea = {
                       value: data[i],
                       label: data[i]
                      }
                  metros.push(nea)
               }
               _this.metross = metros
            })
            .catch(function (err) {
                _this.$Notice.error({title: '品牌名字错误'});
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
      adminname(){
        let _this = this;
        axios({
              method:'post',
              url:'/api/adminname',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.metrosda = data;
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cityList = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '人员错误'});
          })
      },
        regionDta2(value){
          this.lounamems(value)
          let _this = this;
          axios({
              method:'post',
              url:'/api/need1?fname='+value,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.cityListsss = [];
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cityListsss = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })
         },
         regionDta5(value){
             let _this = this;
              axios({
                  method:'post',
                  url:'/api/dotx1?name='+value,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                let data = res.data.message;
                _this.housings = [];
                let metros = [];
                  for (var i in data) {
                      let nea = {
                         value: data[i],
                         label: data[i]
                        }
                    metros.push(nea)
                 }
                 _this.housings = metros;
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '网点错误'});
              })

         }, 
         regionDta6(value){
             this.lounamems(value)
             let _this = this;
              axios({
                  method:'post',
                  url:'/api/dotx2',
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
                  data:{
                    pname:_this.data.brand,
                    fname:value
                  }
               })
              .then(function (res) {
                 _this.housingss = res.data.message;
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '网点错误'});
              })

         },
       historys(){
       	 window.history.go(-1)
       },
      RadioGroups(e){
          this.data.acreage = ''; //面积
          this.data.Properties = ''; //成交楼盘
          this.data.housing = ''; //成交房源
          this.data.address ='';//成交物业地址
          this.data.brand =''; //品牌
          this.data.Dot =''; //网点
          this.data.Station =''; //工位
          if (e == '传统办公') {
            this.data.Radios = true
          }else if(e == '共享办公'){
            this.data.Radios = false
          }
        },
      removeProperty(e){
        //删除产权人
        this.data.Property.add.splice(e,1)
      },
      addProperty(){
        //添加产权人
        this.data.Property.add.push({
              vlu_2 :'',
              vlu_3 :''
        })
      },
      removeRental(e){
        //删除承租方
        this.data.Rental.add.splice(e,1)
      },
      addRental(){
        //添加承租方
        this.data.Rental.add.push({
              vlu_2 :'',
              vlu_3 :''
        })
      },
      addCooperation(){
         //添加合作人
        this.data.cooperation.add.push({
              cooperationn:'',//合作人姓名
              cooperationY:'',//合作人业绩
              cooperationJ:''//合作人金额
        })
      },
      removeCooperation(e){
        //删除合作人
        this.data.cooperation.add.splice(e,1)
      },
      subjioa(){
             if (this.data.type =="传统办公") {
                  if (this.data.housing == "") {
                      this.$Notice.warning({
                        title: '请选择成交房源',
                      });
                       return false;
                  }
             }else if(this.data.type =="共享办公"){
                  if (this.data.Station == "") {
                      this.$Notice.warning({
                        title: '请选择成交工位',
                      });
                       return false;
                  }
             }
             if (this.data.Commission =="") {
                this.$Notice.warning({
                        title: '请填写应收佣金',
                      });
                       return false;
             }
             if (this.data.MajorY =="") {
                this.$Notice.warning({
                        title: '请填写业务主成交人业绩',
                      });
                       return false;
             }
             if (this.data.MajorJ =="") {
                this.$Notice.warning({
                        title: '请填写业务主成交人金额',
                      });
                       return false;
             }
             if (this.data.ascription =="") {
                this.$Notice.warning({
                        title: '请填写房源归属人',
                      });
                       return false;
             }
             if (this.data.ascriptionY =="") {
                this.$Notice.warning({
                        title: '请填写房源归属人业绩',
                      });
                       return false;
             }
             if (this.data.ascriptionJ =="") {
                this.$Notice.warning({
                        title: '请填写房源归属人金额',
                      });
                       return false;
             }
             if (this.data.imgs =="") {
                this.$Notice.warning({
                        title: '请填写照片归属人',
                      });
                       return false;
             }
             if (this.data.imgsY =="") {
                this.$Notice.warning({
                        title: '请填写照片归属人业绩',
                      });
                       return false;
             }
             if (this.data.imgsJ =="") {
                this.$Notice.warning({
                        title: '请填写照片归属人金额',
                      });
                       return false;
             }
             // if (this.xiangjias !==100) {
             //    this.$Notice.warning({
             //            title: '业绩不是 100% 无法提交',
             //          });
             //           return false;
             // }

             // return false;
             let _this = this;
             _this.loading = true;
              axios({
                  method:'post',
                  url:'/api/dealup2?deid1='+_this.id,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
                  data:{'jo':{
                    data:_this.data,
                    fi:_this.$refs.file.data
                  }}
               })
              .then(function (res) {
                _this.$Message.success('编辑成功');
                  _this.loading = false;
                 let query = { deal_id: _this.id };
                  _this.$router.push({
                      name: 'Deal_Looke',
                      query: query
                  });
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '错误'});
              })


      }
    }
};
</script>
