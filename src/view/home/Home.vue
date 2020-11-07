<template>
  <div>
    <h1>首页</h1>
  </div>
</template>

<script>
  import Vue from "vue"
  import VueAwesomeSwiper from "vue-awesome-swiper"
  import 'swiper/swiper-bundle.css'
  Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    export default {
        name: "Home",
        data(){
          return{
             banner:[],
              recommend:[]
          }
        },
        components:{
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        created() {
            let xml=new XMLHttpRequest();
            xml.open("get","http://192.168.1.179:3000/home/multidata");
            xml.send();
            xml.onreadystatechange=()=>{
                if (xml.readyState == 4 && xml.status == 200) {
                    this.banner=JSON.parse(xml.response).data.banner.list
                    this.recommend=JSON.parse(xml.response).data.recommend.list
                }
                console.log(this.banner);
            }
        }
    }
</script>

<style scoped>

</style>