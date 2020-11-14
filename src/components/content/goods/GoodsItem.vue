<template>
  <div class="goods-item" @click="detailData">
    <img :src="item.show.img" alt="">
    <p class="goods-title">{{item.title}}</p>
    <p class="goods-price">
      <span class="price">￥{{item.price}}</span>
      <img src="@/assets/img/common/collect.svg" alt="">
      <span>{{item.cfav}}</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
            item:Object
        },
        methods:{
            detailData(){
                this.$router.push({
                    path:"/detail",
                    query:{
                        id:this.item.iid
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .goods-item{
    width: 45%;
    margin-bottom: 20px;
  }
  .goods-item>img {
    width: 100%;
  }
  .goods-item p img{
    width: 15px;
    vertical-align: middle;
    margin-left: 15px;
  }
  .goods-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-item p{
    line-height: 26px;
  }
  .price{
    color: #f00;
  }
</style>