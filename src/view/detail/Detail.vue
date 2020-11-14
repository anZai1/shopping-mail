<template>
  <div id="detail">
    <topBar bgCol="#fff">
      <div slot="left">
        <img src="@/assets/img/common/back.svg" alt="" @click="backHome">
      </div>
      <div slot="center" class="item-center">
        <div class="ti-item"
             v-for="(item,index) in topTitles"
             :key="item"
             @click="changeIndex(index)"
             :class="{active:currentsIndex==index?true:false}"
        >{{item}}</div>
      </div>
    </topBar>
    <div class="banner">
      <Swiper>
        <SwiperItem v-for="(item,index) in detailGoods.bannerImage" :key="index">
          <img :src="item" alt="">
        </SwiperItem>
      </Swiper>
    </div>
    <DetailShoppingInfo :shopping-info="detailGoods.shoppingInfo"></DetailShoppingInfo>
    <Columns :columns="detailGoods.colums"></Columns>
    <Services :services="detailGoods.services"></Services>
    <ShopInfo :shopInfo="detailGoods.shopInfo"></ShopInfo>
    <div class="shop-in">
      <button>进店逛逛</button>
    </div>

    <shopDesc :shop-desc="detailGoods.desc"></shopDesc>
    <WearingEffect :wearing="detailGoods.detailInfo"></WearingEffect>
  </div>
</template>

<script>
  import {request} from "../../network/axios";
  import topBar from "@/components/common/topbar/Topbar"
  import {Swiper,SwiperItem} from "@/components/swiper/"
  import DetailShoppingInfo from  "./children/DetailShoppingInfo"
  import Columns from  "./children/Columns"
  import Services from  "./children/Services"
  import ShopInfo from  "./children/ShopInfo"
  import shopDesc from "./children/ShopDesc"
  import WearingEffect from "./children/WearingEffect"

  export default {
        name: "Detail",
      data(){
            return {
                detailGoods:{
                        bannerImage:[],
                        shoppingInfo:{
                            title:"",
                            price:"",
                            oldPrice:"",
                            desc:""
                        },
                        colums:[],
                        services:[],
                        shopInfo:{},
                        desc:"",
                        detailInfo:[],
                        itemParams:{},
                        rate:[]
                },
                topTitles:["商品","参数","评论","推荐"],
                currentsIndex:0
            }
      },
      components:{
          topBar,
          Swiper,
          SwiperItem,
          DetailShoppingInfo,
          Columns,
          Services,
          ShopInfo,
          shopDesc,
          WearingEffect
      },
      methods:{
            getDetailData(id){
                request({
                    url:"/detail",
                    params:{
                        goodsId:id
                    }
                }).then(value=>{
                    var da=value.data.result
                    this.detailGoods.bannerImage=da.itemInfo.topImages
                    this.detailGoods.shoppingInfo.title=da.itemInfo.title
                    this.detailGoods.shoppingInfo.price=da.itemInfo.price
                    this.detailGoods.shoppingInfo.oldPrice=da.itemInfo.oldPrice
                    this.detailGoods.shoppingInfo.desc=da.itemInfo.discountDesc
                    this.detailGoods.colums.push(da.columns[0],da.columns[1],da.shopInfo.services[da.shopInfo.services.length-1].name)
                    this.detailGoods.services=da.shopInfo.services
                    this.detailGoods.services.pop()
                    this.detailGoods.shopInfo=da.shopInfo
                    this.detailGoods.desc=da.itemInfo.desc
                    this.detailGoods.detailInfo=da.detailInfo.detailImage[0].list
                    this.detailGoods.itemParams=da.itemParams
                    this.detailGoods.rate=da.rate.list
                    console.log(this.detailGoods);
                })
            },
             backHome(){
                this.$router.push("/home")
          },
              changeIndex(index){
                this.currentsIndex=index
              }
      },
      created(){
            // this.id=this.$route.query.id
          this.getDetailData(this.$route.query.id)
      }
    }
</script>

<style scoped>
  .item-center{
    display: flex;
  }
  img {
    margin-top: 10px;
  }
  .ti-item{
    flex: 1;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
  }
  .banner{
    height: 300px;
    overflow: hidden;
  }
  .active{
    color:red;
  }
  #detail{
    margin-bottom: 100px;
  }
  .shop-in button{
    width: 250px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
    background: #cccccc;
    display: block;
    margin: 10px auto;
    font-size: 18px;
    font-weight: bold;
  }

</style>