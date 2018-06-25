<style lang="less">
.alternation {
   .h33 , .toime{
     margin:5px 0;
     color: #495060;
   }
   .timemax{
     margin-bottom: 15px;
     padding-bottom: 15px;
     border-bottom: 1px dashed #ababab;
   }
   .ivu-alert-success {
    border: 1px solid #e7eae9;
    background-color: #f4f4f4;
}
}
</style>
<template>
    <div class="alternation cf">
    <pre>{{time}}</pre>
        <Card class='sere' v-if="loading2">
            <p slot="title">
                <Icon type="ios-time-outline"></Icon>
                客户提醒间隔
            </p>
             <Alert type="success">
                <h3 class="h33">有效客户</h3>
                <span slot="desc">
                    (正在操作,需求明确),系统跳窗提醒,跟进时间为<b style="color:red">{{time.value1}}</b>小时一次,若无跟进24小时后再次跳窗提醒,若当日24点前还是
                    无跟进将自动转为公客
                    <p class="toime">
                        <InputNumber :max="100" :min="1" v-model="time.value1"></InputNumber>
                        <span>小时一次</span>
                    </p>
                </span>
            </Alert>
             <Alert type="success">
                <h3 class="h33">待确认客户</h3>
                <span slot="desc">
                    (有需求,但不明确)<b style="color:red">{{time.value2}}</b>小时跳窗提醒一次,若无跟进24小时后再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。
                    <p class="toime">
                        <InputNumber :max="1000" :min="1" v-model="time.value2"></InputNumber>
                        <span>小时</span>
                    </p>
                </span>
            </Alert>
            <Alert type="success">
                <h3 class="h33">长期维护客户</h3>
                <span slot="desc">

                <div class="timemax">
                   A:半年内有需求的客户,<b style="color:red">{{time.value3}}</b>个月提醒一次,若无跟进24小时后
                   再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。
                    <p class="toime">
                        <InputNumber :max="100" :min="1" v-model="time.value3"></InputNumber>
                        <span>个月</span>
                    </p>
                </div>

                <div class="timemax">
                     B:一年内有需求的客户,<b style="color:red">{{time.value4}}</b>个月提醒一次,若无跟进24小时后
                    再次跳窗提醒,若当日24点前还是无跟进将自动转为公客
                    <p class="toime">
                        <InputNumber :max="100" :min="1" v-model="time.value4"></InputNumber>
                        <span>个月</span>
                    </p>
                </div>

                <div class="timemax">
                     C:二年内有需求的客户,<b style="color:red">{{time.value5}}</b>个月提醒一次,若无跟进24小时后
                    再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。
                    <p class="toime">
                        <InputNumber :max="100" :min="1" v-model="time.value5"></InputNumber>
                        <span>个月</span>
                    </p>
                </div>

                </span>
            </Alert>

             <Alert type="success">
                <h3 class="h33">我成交客户</h3>
                <span slot="desc">
                    我成交,<b style="color:red">{{time.value6}}</b>个月一次跳窗提醒跟进。
                    <p class="toime">
                        <InputNumber :max="100" :min="1" v-model="time.value6"></InputNumber>
                        <span>个月</span>
                    </p>
                </span>
            </Alert>
             <Alert type="success">
                <h3 class="h33">已流失客户</h3>
                <span slot="desc">
                    已流失,<b style="color:red">{{time.value7}}</b>个月提醒一次,若无跟进24小时后再次跳窗提醒,
                    <p class="toime">
                        <InputNumber :max="100" :min="1" v-model="time.value7"></InputNumber>
                        <span>个月</span>
                    </p>
                </span>
            </Alert>
        </Card>
        <Card v-else>加载中</Card>
        <Card style="margin-top:15px;">
            <Button type="success" :loading="loading" long @click="xiugaiyeno">修改</Button>
        </Card>
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'alternation',
    data() {
        return {
            loading:false,
            loading2:false,
            time:{
               value1:48, //有效客户 (小时)
               value2:24, //待确认客户 (小时)
               value3:1, //a (个月)
               value4:3, //b (个月)
               value5:6, //c (个月)
               value6:3, // 我成交客户 (个月)
               value7:6, // 已流失 (个月)
            }
        }
    },
    mounted() {
       this.datase();
    },
    methods: {
       datase(){
             let _this = this;
             _this.loading2 = false
               axios({
                    method: 'post',
                    url: '/api/warnup1',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                   _this.time = res.data.message.time
                   _this.loading2 = true
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
       },
       xiugaiyeno(){
           let _this = this;
             _this.loading = true
               axios({
                    method: 'post',
                    url: '/api/warnup2',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data:{
                        jo:{
                         time:_this.time
                        }
                    }
                })
                .then(function(res) {
                   _this.$Message.success('修改成功');
                   _this.loading = false
                   _this.datase();
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
       }
    }
};
</script>