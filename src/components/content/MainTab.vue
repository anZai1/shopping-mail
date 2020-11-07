<template>
  <TebBar>
    <TebBarItem path="/home" col="pink">
      <div slot="icon" class="fa fa-home item-icon"></div>
      <div slot="text">首页</div>
    </TebBarItem>
    <TebBarItem path="/category" col="green">
      <div slot="icon" class="fa fa-th-large item-icon"></div>
      <div slot="text">分类</div>
    </TebBarItem>
    <TebBarItem path="/shopping" col="blue">
      <div slot="icon" class="fa fa-shopping-cart item-icon"></div>
      <div slot="text">购物车</div>
    </TebBarItem>
    <TebBarItem path="/profile" col="yellow">
      <div slot="icon" class="fa fa-user item-icon"></div>
      <div slot="text">我的</div>
    </TebBarItem>
  </TebBar>
</template>

<script>
    import TebBarItem from"../common/tebBar/TebBarItem"
    import TebBar from"../common/tebBar/TebBar"
    export default {
        name: "MainTab",
        components :{
            TebBarItem,
            TebBar
        }
    }
</script>

<style scoped>
  .item-icon{
    font-size: 30px;
  }
</style>