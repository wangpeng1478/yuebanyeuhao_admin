
<style lang="less">
 .floorss{
   .el-vue-amap-container{
     height:500px;
   }
 }
</style>

<template>
   <div class="floorss cf">

    <Card style="height:2000px;">
          <Affix :offset-top="100">
        <span class="demo-affix">Fix the position at the top of 100px at the top</span>
    </Affix>
    </Card>

   </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'floorss',
      data () {
          return {
             
          }
        },
        mounted(){
            // axios.get(this.$api()+'/laravel/public/wx/index?cate=indexadd').then((res) => {
            //     //res 为成功回调的响应
            //         console.log(res);
            // }); 
        },
        methods:{
           

        }
};
</script>

