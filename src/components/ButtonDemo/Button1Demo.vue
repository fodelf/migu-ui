<demo>
常规使用
</demo>  
<template>
  <div class="buttonWrapper">
    <Button>普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="info">信息按钮</Button>
    <Button theme="danger">危险按钮</Button>
  </div>
</template>

<script lang='ts'>
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang='scss' scoped>
  .buttonWrapper{
    display: flex;
    flex-wrap: wrap;
    .migu-button{
      margin: 10px;
    }
  }
</style>