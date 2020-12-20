<template>
  <div class="container">
    <Topnav />
    <div class="bannerWrapper">
      <div class="banner">
        <h1>
          咪咕U
          <div class="dotWrapper">
            I
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mao"></use>
            </svg>
          </div>
        </h1>
        <h2>一款卡哇伊的UI框架</h2>
        <div class="actions">
          <a href="https://github.com" class="guide1">GitHub</a>
          <router-link to="/doc" class="guide2">开始</router-link>
        </div>
        <div class="features">
          <ul class="feature-list">
            <li class="vue3-base">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Vue"></use>
              </svg>
              <div class="title">
                <h3>基于Vue3</h3>
                <div>使用了Vue3 Composition API</div>
              </div>
            </li>
            <li class="ts-base">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-typescript2"></use>
              </svg>
              <div class="title">
                <h3>基于Typescript</h3>
                <div>源代码采用Typescript书写</div>
              </div>
            </li>
            <li class="symbol-base">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-CatGrooming"></use>
              </svg>
              <div class="title">
                <h3>代码易读</h3>
                <div>每个组件的源代码都非常简洁</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style scoped lang='scss'>
@media (max-width: 500px) {
  .container {
    .bannerWrapper {
      margin: 0 !important;
    }
  }
}
.container {
  background: rgb(222, 240, 246);
  background: linear-gradient(
    145deg,
    rgba(222, 240, 246, 1) 0%,
    rgba(187, 222, 231, 1) 100%
  );
  min-height: 100vh;
  height: 100%;
  .bannerWrapper {
    margin: 0 100px;
    background: rgb(234, 250, 255);
    background: linear-gradient(
      171deg,
      rgba(234, 250, 255, 1) 0%,
      rgba(254, 254, 254, 1) 100%
    );
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    .banner {
      padding: 100px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
      z-index: 2;
      h1,
      h2 {
        color: #007688;
        background: -webkit-linear-gradient(90deg, #007688, #00b8be);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      h1 {
        font-size: 60px;
        position: relative;
        .dotWrapper {
          display: inline-block;
          margin-left: -17px;
          .icon {
            position: absolute;
            top: -5px;
            right: 0;
            width: 20px;
            height: 20px;
            animation: waving 1s ease-in 0.3s infinite;
          }
        }
      }
      @keyframes waving {
        0% {
          top: -5px;
        }
        20% {
          top: -10px;
        }
        50% {
          top: -15px;
        }
        70% {
          top: 0;
        }
        90% {
          display: none;
        }
        100% {
          display: block;
          top: -5px;
        }
      }
      h2 {
        font-size: 40px;
      }
      > .actions {
        padding: 50px 0;
        font-weight: 700;
        .guide1 {
          margin-right: 30px;
          background: #00bec3;
          display: inline-block;
          color: #fff;
          border-radius: 14px;
          padding: 10px 20px;
          box-shadow: 0 3px 5px #0b7b80;
          transition: all 250ms;
          &:hover {
            transform: scale(1.2);
          }
        }
        .guide2 {
          background: #00bec3;
          display: inline-block;
          color: #fff;
          border-radius: 14px;
          padding: 10px 20px;
          box-shadow: 0 3px 5px #0b7b80;
          transition: all 250ms;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .features {
        margin-top: 100px;
        .feature-list {
          display: flex;
          justify-content: space-around;
          li {
            text-align: center;
            margin: 10px 20px;
            color: #007688;
            background: -webkit-linear-gradient(90deg, #007688, #00b8be);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            .icon {
              width: 45px;
              height: 45px;
            }
          }
          .ts-base {
            .icon {
              background-color: #0096a2;
            }
          }
        }
      }
      @media (max-width: 500px) {
        .feature-list {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>