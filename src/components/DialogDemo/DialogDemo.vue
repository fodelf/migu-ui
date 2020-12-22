<template>
  <h1>Dialog示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang='ts'>
import Demo from "../Demo.vue";
import Dialog1Demo from "./Dialog1Demo.vue";
import Dialog2Demo from "./Dialog2Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
  },
};
</script>

<style lang='scss' scoped>
h1 {
  color: #007d8d;
}
</style>