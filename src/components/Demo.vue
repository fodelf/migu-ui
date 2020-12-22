<template>
  <h2>{{ component.__sourceCodeTitle }}</h2>
  <div class="demo">
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions" @click="toggleCode">
      <span>查看代码</span>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template> 

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  components: {
    Button,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const toggleCode = () => (codeVisible.value = !codeVisible.value);
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #00bec3;
h2 {
  margin-top: 20px;
  color: #007d8d;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 4px;
  transition: all 250ms;
  &:hover {
    box-shadow: 0px 0px 3px rgb(155, 129, 129);
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-align: center;
    color: #40a7bb;
    transition: all 250ms;
    &:hover{
      background-color: #95c7ca;
      color:#31a8ac
    }
  }
  &-code {
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: rgb(221, 240, 245,.1);
    }
  }
}
</style>