<style lang="less" scoped>
 .home-main{
    .body_s{
      min-height: 500px;  
    }
    .Tabs{
        .ivu-tabs-tabpane{
            background: #f0f0f0;
            padding: 10px;
        }
    }
 }
</style>
<template>

    <div class="home-main">
        <Row :gutter="10" class="body_s">
       <!--  <Button @click="tuideng">退出登录</Button> -->
          <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                <Card>
                    <Row>
                      <Col :xs="24" :sm="24" :md="24" :lg="24">
                       <Tabs value="0" :animated="false" class="Tabs" @on-click="TabsVis">
                          <TabPane label="房源跟进" name="0">
                              <visite-volume0 class="cf" v-if="indexs ==0"></visite-volume0>
                          </TabPane>
                          <TabPane label="企业名录" name="1">
                              <visite-volume1 class="cf" v-if="indexs ==1"></visite-volume1>
                          </TabPane>
                          <TabPane label="工作提醒" name="2">
                              <visite-volume2 class="cf" v-if="indexs ==2"></visite-volume2>
                          </TabPane>
                          <TabPane label="工作总结" name="3">
                              <visite-volume3 class="cf" v-if="indexs ==3"></visite-volume3>
                          </TabPane>
                       </Tabs>
                      </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
import visiteVolume0 from './components/visiteVolume0.vue';
import visiteVolume1 from './components/visiteVolume1.vue';
import visiteVolume2 from './components/visiteVolume2.vue';
import visiteVolume3 from './components/visiteVolume3.vue';
import Cookies from 'js-cookie';
import icons from '../main-components/icon.vue';
export default {
    name: 'home',
    components: {
        visiteVolume0,
        visiteVolume1,
        visiteVolume2,
        visiteVolume3,
        icons
    },
    data () {
        return {
            time: new Date().toLocaleString(),
            indexs:0,
            count: {
                createUser: 0,
                visit: 0,
                collection: 0,
                transfer: 0
            }
        };
    },
    beforeMount:function(){
      var _this = this;
    },
    mounted: function(){
       var _this = this;
       this.$Message.destroy()//关闭
       this.$Message.success({content: `欢迎登录悦办越好`,duration: 5});
    },
    computed: {
        avatorPath () {
            console.log(localStorage.avatorImgPath);
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        times (){
         console.log(Cookies.set('times'))
        },
        TabsVis(e){
         this.indexs= e;
        },
    }
};
</script>
