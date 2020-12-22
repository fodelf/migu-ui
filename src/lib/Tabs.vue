<template>
  <div class="migu-tabs">
    <div class="migu-tabs-nav" ref="container">
      <div
        class="migu-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="migu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="migu-tabs-content">
      <component
        class="migu-tabs-content-item"
        v-for="(c, index) in defaults"
        :class="{ selected: c.props.title === selected }"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from "./Tab.vue";
import { onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs内标签必须是Tab!");
      }
    });
    onMounted(() => {
      watchEffect(() => {
        console.log('watchEffect执行了');
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      },{flush:'post'});
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, select, selectedItem, indicator, container };
  },
};
</script>

<style lang='scss'>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.migu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>