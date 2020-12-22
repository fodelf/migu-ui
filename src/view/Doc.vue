<template>
  <div>
    <div class="layout">
      <Topnav class="nav" />
      <div class="content">
        <aside ref="asiden">
          <h2>文档列表</h2>
          <ol>
            <li><router-link to="/doc/intro">介绍</router-link></li>
            <li><router-link to="/doc/install">安装</router-link></li>
            <li><router-link to="/doc/get-started">快速上手</router-link></li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li><router-link to="/doc/switch">Switch组件</router-link></li>
            <li><router-link to="/doc/button">Button组件</router-link></li>
            <li><router-link to="/doc/dialog">Dialog组件</router-link></li>
            <li><router-link to="/doc/tabs">Tabs组件</router-link></li>
          </ol>
        </aside>
        <main @click="closeMenu">
          <div class="mainWrapper">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, onMounted, provide, ref, Ref, watch, watchEffect } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const asiden = ref<HTMLDivElement>(null);
    const width = window.innerWidth;
    provide("asiden", asiden);
    const closeMenu = () => {
      if (menuVisible.value && width <= 900) {
        menuVisible.value = !menuVisible.value;
        asiden.value.style.transform = `translateX(-280px)`;
      }
    };
    onMounted(() => {
      if (menuVisible.value) {
        asiden.value.style.transform = `translateX(0px)`;
      }
    });
    return { menuVisible, closeMenu, asiden, width };
  },
};
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: rgb(222, 240, 246);
  background: linear-gradient(
    145deg,
    rgba(222, 240, 246, 1) 0%,
    rgba(187, 222, 231, 1) 100%
  );
  > .nav {
    flex-shrink: 0;
    z-index: 11;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 260px;
    @media (max-width: 900px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  background: rgb(221, 240, 245);
  background: linear-gradient(
    180deg,
    rgba(221, 240, 245, 1) 0%,
    rgba(190, 224, 232, 1) 100%
  );
  main {
    max-width: 100%;
    padding: 16px;
    flex: 1;
    border: 1px solid #ccc;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    .mainWrapper {
      max-width: 800px;
      margin: auto;
    }
  }
}
@media (min-width:900px) {
  main{
    margin: 30px 100px 0;
  }
}
aside {
  background: lightblue;
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-280px);
  transition: all 250ms;
  > h2 {
    line-height: 22px;
    margin-bottom: 4px;
    padding: 10px;
    color: #333;
    font-weight: 700;
    font-size: 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 13px 0 13px 20px;
        color: #444;
        font-size: 14px;
        text-decoration: none;
      }
      .router-link-active {
        background: linear-gradient(
          145deg,
          rgba(222, 240, 246, 1) 0%,
          rgba(187, 222, 231, 1) 100%
        );
      }
    }
  }
  main {
    overflow: auto;
  }
}
</style>