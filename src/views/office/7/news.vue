
<style lang="less">
 .news{
   .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
 }
</style>

<template>
   <div class="news cf">
      <Card style="margin-bottom:15px;">
       <Button type="primary" shape="circle" @click="addxiwne" icon="ios-plus-outline">添加新闻</Button>
      </Card>
       <Card style="margin-bottom:15px;">
         <p slot="title">
            <Icon type="ios-keypad-outline"></Icon>
            新闻列表
        </p>
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
    name: 'news',
      data () {
          return {
             id:'',
             totals: 50, //总页数
             pageSize: 20, //每页显示
             loading1:false,
             columns:[
               {
                    title: 'ID',
                    key: 'id',
                    width: 100
                },
                {
                    title: '标题',
                    key: 'name',
                },
                {
                    title: '分类',
                    key: 'type'
                },
                {
                    title: '时间',
                    key: 'time'
                },
                {
                    title: '状态',
                    align: 'center',
                    render: (h, params) => {
                        const row = params.row;
                        // const text = row.activ == 'on' ? true : false;
                        return h('i-switch', {
                            props: {
                                size: 'large',
                                value: row.activ
                            },
                            on: {
                                'on-change': (value) => {
                                    this.id = params.row.id
                                    // this.activating(value);
                                }
                            }
                        }, [
                            h('span', {
                                slot: 'open'
                            }, "上架"),
                            h('span', {
                                slot: 'close'
                            }, "下载")
                        ]);
                    }
                },
                {
                    title: '操作',
                    key: 'iden',
                    width: 100,
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
                                        this.id = params.row.id
                                        // this.useredit(params.row.id)
                                    }
                                }
                            }, '编辑')
                        ]);
                    }
                }
            ],
             userTables:[
                 {
                  id:2,
                  name:'222222',
                  type:'222222',
                  time:'222222',
                  activ:true,
                 },
                 {
                  id:2,
                  name:'222222',
                  type:'222222',
                  time:'222222',
                  activ:false,
                 },
             ],
          }
        },
        mounted(){
            
        },
        methods:{
           changepage(page){
             console.log(page)
           },
           addxiwne(){
             this.$router.push({
                 name: 'news_add'
                });
           }

        }
};
</script>

