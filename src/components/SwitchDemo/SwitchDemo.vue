<template>
  <div>
    <h1>Switch开关</h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import Switch1Demo from "./Switch1Demo.vue";
import Switch2Demo from "./Switch2Demo.vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>

<style lang='scss' scoped>
h1 {
  color: #007d8d;
}
</style>