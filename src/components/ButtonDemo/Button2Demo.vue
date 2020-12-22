<demo>
不同尺寸
</demo>  
<template>
  <div>
    <div class="buttonWrapper">
      <Button size="big">大按钮</Button>
      <Button>默认大小</Button>
      <Button size="small">小按钮</Button>
      <Button size="mini">超小按钮</Button>
    </div>
  </div>
</template>

<script lang='ts'>
import Button from "../../lib/Button.vue";
export default {
    components:{
        Button
    }
};
</script>

<style lang='scss' scoped>
.buttonWrapper{
  vertical-align:baseline;
}
</style>