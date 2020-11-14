<template>
  <div class="services">
    <div class="services-item" v-for="item in services" :key="item.name">
      <img :src="item.icon" alt="">
      {{item.name}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "Services",
        props:{
            services:Array
        }
    }
</script>

<style scoped>
  .services{
    display: flex;
    padding: 0;
    margin:0;
    margin-top: 10px;
  }
  .services-item{
    flex: 1;
    font-size: 10px;
    text-align: center;
  }
  .services-item img{
    width: 10px;
    height: 10px;
  }

</style>