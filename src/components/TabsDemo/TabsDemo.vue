<template>
  <div>Tabs示例</div>
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

<style>

</style>