### 开始使用
请先[安装](#/doc/install)本组件库。

然后在main.js中引入样式文件

```
import {Button, Tabs, Switch, Dialog} from "migu-ui"
```

#### Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "migu-ui"
export default {
  components: {Button}
}
</script>
```