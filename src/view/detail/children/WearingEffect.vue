<template>
  <div class="wearing">
    <h3>穿着效果</h3>
    <div class="wearing-item" v-for="item in wearing">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "WearingEffect",
        props:{
            wearing:Array
        }
    }
</script>

<style scoped>
  .wearing-item{
    width: 100vw;
    margin: 0px auto;
  }
  .wearing-item img{
    width: 100%;
    margin-bottom:10px;
  }
</style>