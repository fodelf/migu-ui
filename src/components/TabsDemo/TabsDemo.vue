<template>
  <h1>Tabs示例</h1>
  <Demo :component="Tabs1Demo"></Demo>
</template>

<script lang='ts'>
import Tabs1Demo from './Tabs1Demo.vue'
import Demo from '../Demo.vue'
export default {
  components:{
    Demo
  },
  setup(){
    return {Tabs1Demo}
  }
}
</script>

<style lang='scss' scoped>
h1 {
  color: #007d8d;
}
</style>