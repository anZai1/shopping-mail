<template>
  <div class="shopDesc">
    <div class="desc-left"></div>
    <p>{{shopDesc}}</p>
    <div class="desc-right"></div>
  </div>
</template>

<script>
    export default {
        name: "ShopDesc",
        props:{
            shopDesc:String
        }
    }
</script>

<style scoped>
  .shopDesc{
    padding: 0 10px ;

  }
  .shopDesc>div{
    width: 150px;
    height: 0;
    border: 1px #cccccc solid;
    background: #cccccc;
  }
  .shopDesc .desc-right{
    float: right;
  }
  p{
    margin: 20px 0;
    font-size: 16px;
    color: #666666;
  }

</style>