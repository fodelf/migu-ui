<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script>
import md from '../markdown/get-started.md'
export default {
  data(){
    return {
      md
    }
  },
  setup(){
    console.log(md);
  }
};
</script>

<style>
</style>