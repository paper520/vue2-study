<template>
  <nav>
    <header>
      》学习和记录vue2.0使用心得的地方，帮助快速开发《
    </header>
    <ul>
      <li>
        <img @click="loadPage('clayjs/canvas2d/cgxxzlsjt')" src="./assets/menu/1.png" alt="数据可视化 / canvas2d" />
        <label>采购信息总览数据图</label>
        <em>canvas</em>
        <em>region</em>
        <em>layer</em>
        <em>clay.js</em>
        <p>
          本用例用于实验在vue2.js环境中，如何更好的使用clay.js实现web端2d数据可视化，为clay.js的改进工作提供一定的经验支持。
        </p>
        <p>
          基于clay.js系列项目开发，主要涉及canvas 2d相关技术，重点是图层、区域、绘图和布局等的使用。
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
        float: left;
        padding-right: 0.2rem;
        cursor: pointer;
      }
      & > label {
        line-height: 2em;
        color: #5c9287;
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