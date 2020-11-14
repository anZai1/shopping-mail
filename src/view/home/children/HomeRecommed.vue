<template>
  <div class="home-recommed">
    <div class="recommed-item" v-for="item in recommed" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommed",
        props:{
            recommed:Array
        }
    }
</script>

<style scoped>
  .home-recommed{
    display: flex;
  }
  .recommed-item{
    flex: 1;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 8px solid #ccc;
  }
  .recommed-item img{
    width: 60px;
  }
  a{
    font-size: 12px;
    color: #333;
  }

</style>