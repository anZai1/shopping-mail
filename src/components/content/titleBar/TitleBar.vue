<template>
  <div>

  </div>
</template>

<script>
    export default {
        name: "TitleBar",
        props:{
            titles:{
                type:Array,
                default(){
                    return["流行","新款","精选"]
                }
            }
        }
    }
</script>

<style scoped>

</style>