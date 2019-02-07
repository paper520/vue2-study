<template>
  <nav>
    <header>
      》学习和记录vue2.0使用心得的地方，帮助快速开发《
    </header>
    <ul>
      <li>
        <img @click="loadPage('tree.circle.clayjs')" src="./assets/menu/1.png" />
        <label @click="loadPage('tree.circle.clayjs')">clay.js使用测试</label>
        <em>canvas</em>
        <em>tree</em>
        <em>clay.js</em>
        <p>
          绘制一个圆形树，动画展开。
        </p>
        <p>
          基于clay.js系列项目开发，主要测试基本的接口在vue2中的使用情况，包括绘图经验的积累和对clay.js优化的反馈建议。
        </p>
        <hr />
        <p>
          涉及的主要开源项目：
          <ul>
            <li>
              1.clay-core：
              <a :href="clay_core" target="_blank">{{clay_core}}</a>
            </li>
            <li>
              2.clay-2d：
              <a :href="clay_2d" target="_blank">{{clay_2d}}</a>
            </li>
            <li>
              3.clay-chart：
              <a :href="clay_chart" target="_blank">{{clay_chart}}</a>
            </li>
          </ul>
        </p>
      </li>
    </ul>
    <footer>
      心叶 ©2007-2019 走一步，再走一步
    </footer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // 开源项目地址
      clay_core: "https://github.com/yelloxing/clay-core",
      clay_2d: "https://github.com/yelloxing/clay-2d",
      clay_chart: "https://github.com/yelloxing/clay-chart"
    };
  },
  methods: {
    loadPage(url) {
      window.location.href = "#/" + url;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  & > header {
    line-height: 0.5rem;
    background-color: #009688;
    color: #fff;
    user-select: none;
    position: fixed;
    width: 100%;
    top: 0;
    box-shadow: 0px 4px 5px 0px #198d81;
    padding-left: calc(50vw - 5rem);
  }
  & > footer {
    width: 10rem;
    margin: auto;
    line-height: 1rem;
    font-size: 0.14rem;
    color: #43515a;
  }
  & > ul {
    width: 10rem;
    margin: auto;
    margin-top: 0.7rem;
    & > li {
      overflow: hidden;
      background-color: #fff;
      padding: 0.2rem;
      margin-top: 0.2rem;
      & > img {
        width: 3.5rem;
        float: right;
        padding-right: 0.2rem;
        cursor: pointer;
      }
      & > label {
        line-height: 2em;
        color: #5c9287;
        cursor: pointer;
      }
      & > em {
        font-size: 12px;
        border: 1px solid gray;
        border-radius: 1em;
        padding: 0.01rem 0.05rem;
        color: gray;
        float: right;
        margin-right: 0.1rem;
      }
      & > p {
        text-indent: 2em;
        line-height: 1.6em;
        font-size: 0.14rem;
      }
    }
  }
}
</style>