<template>
    <div id="teb-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TebBar"
    }
</script>

<style scoped>

  #teb-bar{
    position: fixed;
    bottom:0px;
    left: 0px;
    right: 0px;
    height: 55px;
    display: flex;
    text-align: center;
    font-size: 14px;
    background: #ccc;
  }

</style>