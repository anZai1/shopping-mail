<template>
  <div class="shopping-info">
    <p>{{shoppingInfo.title}}</p>
    <h2>
      <span class="price">{{shoppingInfo.price}} </span>
      <span class="old-price">{{shoppingInfo.oldPrice}}</span>
      <span class="dasc">{{shoppingInfo.desc}}</span>
    </h2>
  </div>
</template>

<script>
    export default {
        name: "DetailShoppingInfo",
        props:{
            shoppingInfo:Object
        }
    }
</script>

<style scoped>
  .shopping-info{
    padding: 0 10px;
  }
  p{
    margin: 10px 0;
    font-size: 18px;
  }

  .price{
    color: hotpink;
  }
  .old-price{
    font-size: 16px;
    text-decoration:line-through;
    color: #c0c0c0;
  }
  .dasc{
    font-size: 12px;
    color: #fff;
    border: 1px solid #ccc;
    background: hotpink;
    padding:3px 5px;
    border-radius: 5px;
  }
</style>