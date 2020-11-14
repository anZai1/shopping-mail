<template>
  <div id="home">
    <HomeTopBar></HomeTopBar>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <Swiper>
          <SwiperItem v-for="item in banner">
            <img :src=item.image alt="">
          </SwiperItem>
        </Swiper>
        <HomeRecommed :recommed="recommend"></HomeRecommed>
        <WeekPopular/>
        <TitleBar :titles="['流行','新款','精选']" @ItemClick="itemClick"></TitleBar>
        <Goods :goods="goods[titles[correntsIndex]]" @Add="add"></Goods>
      </div>
    </div>
    <BackTop :isShow="isShow" @backTop="homeBackTop"></BackTop>
  </div>
</template>

<script>
  //导入公共组件
    import {request} from "@/network/axios/index";
    import {Swiper, SwiperItem} from "../../components/swiper/index"
    import BettersScroll from "better-scroll"

    //导入私有组件
    import HomeTopBar from "./children/HomeTopBar"
    import HomeRecommed from "./children/HomeRecommed"
    import WeekPopular from "./children/WeekPopular"
    import TitleBar from "@/components/content/titleBar/TitleBar"
    import Goods from "@/components/content/goods/Goods"
  import BackTop from "@/components/content/backTop/BackTop"

    // import {getHomeMultidata} from "../../network/home/index";


    export default {
        name: "Home",
        components: {
            HomeTopBar,
            HomeRecommed,
            WeekPopular,
            TitleBar,
            Goods,
            BackTop,

            Swiper,
            SwiperItem
        },
        data() {
            return {
                banner: [],
                recommend: [],
                goods:{
                    pop:{
                        title:"流行",
                        id:0,
                        list:[]
                    },
                    news:{
                        title:"新款",
                        id:0,
                        list:[]
                    },
                    sell:{
                        title:"爆款",
                        id:0,
                        list:[]
                    }
                },
                titles:["pop","news","sell"],
                correntsIndex:0,
                scroll,
                isShow:false

            }
        },
        methods: {
            getHomeMultidata() {
                request({
                    url: "/home/multidata"
                }).then(res => {
                    this.banner = res.data.data.banner.list
                    this.recommend = res.data.data.recommend.list
                })
            },
            getHomeGoodsInfo(title,id){
                request({
                    url:"/home/"+title,
                    params:{
                        id:id
                    }
                }).then(res=>{
                    this.goods[title].list.push(...res.data.data.list)
                    this.goods[title].id++
                    this.$nextTick(() => {
                        const scroll = new BettersScroll(this.$refs.wrapper, {
                            click:true,
                            probeType:3,
                            pullUpLoad:true
                        })
                        this.scroll=scroll
                        this.scroll.on("pullingUp",()=>{
                            this.getHomeGoodsInfo(this.titles[this.correntsIndex],this.goods[this.titles[this.correntsIndex]].id+1)
                        })

                        this.scroll.on("scroll",(position)=>{
                            if(position.y < -800){
                                this.isShow=true
                            }else {
                                this.isShow=false
                            }
                        })
                    })
                })
            },
            itemClick(index){
                this.correntsIndex=index
                this.scroll.refresh()
            },
            homeBackTop(){
                this.scroll.scrollTo(0,0,2000)
            },
            add(){
                console.log(1);
            }
        },
        created() {
            this.getHomeMultidata()
            this.getHomeGoodsInfo("pop",this.goods.pop.id+1)
            this.getHomeGoodsInfo("news",this.goods.news.id+1)
            this.getHomeGoodsInfo("sell",this.goods.sell.id+1)
        },
        // mounted() {
        //     this.$nextTick(() => {
        //         this.scroll = new BettersScroll(this.$refs.wrapper, {})
        //     })
        // }

    }
</script>

<style scoped>
  #home{
    margin-bottom: 70px;
  }
  .wrapper{
    height:calc(100vh - 50px - 44px);
    overflow: hidden;
  }
</style>