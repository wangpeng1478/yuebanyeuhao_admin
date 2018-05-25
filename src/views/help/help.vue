
<style lang="less">
 .help{
 }
</style>

<template>
   <div class="help cf">
       <Card>
          <p slot="title">
              <Icon type="help-circled"></Icon>
              帮助中心
          </p>
          <Row class="margin-top-10 conimg">
              <Table highlight-row ref="currentRowTable" :columns="columns1" :data="data1"></Table>
               <Modal
                  v-model="modal1"
                  width="70%"
                  :styles="{top: '0'}"
                  :title="titles" style="text-align:center">
                  <a target="_blank" :href="conimg" style="margin-bottom: 10px;">
                 <Icon type="arrow-expand" style="font-size: 20px;vertical-align: top;margin-right: 5px;"></Icon>全屏查看</a>
                 <img :src="conimg" :alt="titles" :title="titles" style="width:100%;height:auto;">
              </Modal>
          </Row>
      </Card>
   </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'help',
      data () {
          return {
             modal1: false,
             titles:'',
             conimg:'',
             columns1: [
                  {
                      type: 'index',
                      width: 60,
                      align: 'center'
                  },
                  {
                      key: 'name',
                      title: 'Q&A',
                      render: (h, params) => {
                            const row = params.row;
                            return h('a', {
                                props: {
                                   href: 'javascript:;'
                                },
                                on: {
                                    click: () => {
                                      this.imgShow(row.name,row.img)
                                    }
                                  }
                            }, row.name);
                        }
                  }
                ],
                data1: [
                    {
                      name: '如何添加楼盘?',
                      img:'http://47.98.155.165/image/vueAdmin/qqaa.gif'
                    },
                    {
                      name: '如何添加房源',
                      img:'http://47.98.155.165/image/vueAdmin/qqaa.gif'
                    }
                ]
          }
        },
        mounted(){
          
        },
        methods:{
          imgShow(a,b){
             this.titles = a;
             this.conimg = b
             this.modal1 = true
          }
        }
};
</script>

