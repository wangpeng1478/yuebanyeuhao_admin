
<style lang="less">
 .bespoke{
   .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
   .cacas{
    width:100%;
   }
 }
</style>

<template>
   <div class="bespoke cf">
   <pre>{{screens}}</pre>
      <Card style="margin-bottom:15px;">
         <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            客户预约列表
        </p>
         <Form :model="screens" :label-width="80">
            <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="预约时间">
                   <DatePicker v-model="screens.time" :options="options2" class="cacas" type="daterange" placement="bottom-start" placeholder="预约时间"></DatePicker>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="跟进时间">
                   <DatePicker v-model="screens.time2" :options="options2" class="cacas" type="daterange" placement="bottom-start" placeholder="跟进时间"></DatePicker>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="状态">
                   <RadioGroup v-model="screens.type" type="button">
                      <Radio label="未跟进"></Radio>
                      <Radio label="跟进中"></Radio>
                      <Radio label="已结束"></Radio>
                  </RadioGroup>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="6">
               <FormItem label="跟进人">
                   <Select v-model="screens.estate" filterable clearable>
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
              </FormItem>
            </Col>
            </Row>

             <Row>
             <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align:center">
               <Button size="small" @click='screenss' type="primary" icon="ios-search">查询</Button>
               <Button size="small" @click='reson' type="ghost" icon="reply">重置</Button>
             </Col>
          </Row>
         </Form>
      </Card>
       <Card style="margin-bottom:15px;">
        <Table height="600" :columns="columns" :data="userTables" :loading="loading1" border></Table>
        <div class="cf">
          <Page class="pages" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total show-elevator></Page>
        </div>
      </Card>

   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'bespoke',
      data () {
          return {
             totals: 50, //总页数
             pageSize: 20, //每页显示
             loading1:false,
             screens:{

             },
             cityList:[],
             options2: {
                    shortcuts: [
                        {
                            text: '一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
             columns:[
                {
                    title: 'ID',
                    key: 'id',
                    width: 100
                },
                {
                    title: '来源',
                    key: 'quarry'
                },
                {
                    title: '预约时间',
                    key: 'time'
                },
                {
                    title: '楼盘',
                    key: 'lou'
                },
                {
                    title: '房源',
                    key: 'fang'
                },
                {
                    title: '最新跟进',
                    key: 'minute'
                },
                {
                    title: '跟进人',
                    key: 'minuter'
                },
                {
                    title: '状态',
                    key: 'estate'
                },
                {
                    title: '操作',
                    key: 'iden',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        let query = { deal_id: params.row.id};
                                            this.$router.push({
                                             name: 'bespokels',
                                             query: query
                                            });
                                    }
                                }
                            }, '跟进')
                        ]);
                    }
                }
            ],
             userTables:[{
                id:'100',
                quarry:"来源",
                time:"预约时间",
                lou:"楼盘",
                fang:"房源",
                minute:"最新跟进",
                minuter:"跟进人",
                estate:"状态",
             }],
          }
        },
        mounted(){
            this.adminname();
        },
        methods:{
          adminname() {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/adminname',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
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
                .catch(function(err) {
                    _this.$Notice.error({ title: '人员错误' });
                })
        },
          screenss(){

          },
          reson(){

          },
          changepage(page){
           console.log(page)
         }
        }
};
</script>

 