<template>
  <div class="columns">
    <div class="columns-item" v-for="item in columns">{{item}}</div>
  </div>
</template>

<script>
    export default {
        name: "Columns",
        props:{
            columns:Array
        }
    }
</script>

<style scoped>
  .columns{
    display: flex;
    margin-top: 20px;
    padding: 0px 10px;
  }
  .columns-item{
    flex: 1;
    color: #c0c0c0;
    padding-bottom: 10px;
    border-bottom: 3px solid #ccc;
  }
  .columns-item:last-of-type{
    text-align: right;
  }

</style>