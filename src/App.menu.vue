<template>
  <nav>
    <header>
      》学习和记录vue2使用心得的地方，帮助快速开发《
    </header>
    <ul>
      <li>
        <label @click="loadPage('clayjs')">
          数据可视化之clay.js
        </label>
        <p>
          测试vue2环境下通过包管理的方式使用clay.js绘制图形！
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
      & > label {
        line-height: 2em;
        color: #5c9287;
        cursor: pointer;
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