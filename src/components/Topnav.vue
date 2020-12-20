<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-miaologo"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>文档</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu">
      <svg class="iconZhankai" aria-hidden="true">
        <use xlink:href="#icon-zhankai"></use>
      </svg>
    </span>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang='scss' scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    max-height: 10em;
    margin-right: auto;
    .icon {
      width: 35px;
      height: 35px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    border: 2px solid #fff;
    padding: 10px 5px;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
    > li {
      margin: 0 1em;
      font-weight: 700;
      color: #00909d;
    }
  }
  > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    .iconZhankai {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>