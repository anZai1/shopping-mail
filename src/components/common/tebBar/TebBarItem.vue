<template>
  <div class="teb-bar-item" @click="itemClick" :style="{color:changeColor}">
   <slot name="icon"></slot>
   <slot name="text"></slot>
  </div>
</template>

<script>
    export default {
        name: "TebBarItem",
        props:{
            path:String,
            col:{
                type:String,
                default:"red"
            }
        },
        computed:{
            isActive(){
                return  this.$route.path.indexOf(this.path) !==-1
            },
            changeColor(){
                return this.isActive ? this.col : ""
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
  .teb-bar-item{
    flex: 1;
    margin-top: 5px;
  }
</style>