<template>
  <nav>
    <header>
      》学习和记录vue2使用心得的地方，帮助快速开发《
    </header>
    <ul>
      <li v-for='(value, key, index) in pages' :key='index' @click="loadPage(key)">
        <label>
          {{value.title}}
        </label>
        <p v-for='(item, index) in value.info' :key='index'>
          {{item}}
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
      pages: {
        clayjs: {
          title: "数据可视化之clay.js",
          info: ["测试vue2环境下通过包管理的方式使用clay.js绘制图形！"]
        },
        veevalidate: {
          title: "表单校验之vee-validate",
          info: ["基于vee-validate测试表单校验相关功能！"]
        },
        datepicker: {
          title: "自定义指令测试之日历datepicker",
          info: ["测试在全局中注册和使用自定义指令相关事项！"]
        },
        numberChinese: {
          title: "中文大写过滤器numberChinese",
          info: ["测试自定义过滤器参数等基本问题！"]
        },
        original: {
          title: "自身规则",
          info: ["vue2自身的指令，过滤器等测试使用！"]
        },
        axios: {
          title: "axios",
          info: ["发送请求，和服务器交流测试！"]
        }
      }
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
      cursor: pointer;
      overflow: hidden;
      background-color: #fff;
      padding: 0.2rem;
      margin-top: 0.2rem;
      & > label {
        line-height: 2em;
        color: #5c9287;
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