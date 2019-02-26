<template>
  <ul>
    <li @click='doGet()'>
      最简单的GET请求测试
    </li>
    <li @click='doPost()'>
      最简单的POST请求测试
    </li>
    <li @click='doManyRequest()'>
      一次执行多个请求
    </li>
    <li @click='doConfig()'>
      自定义配置创建axios的新实例
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    doGet: function() {
      axios
        .get("/index.html", {
          // 可选配置
          headers: { "X-Custom-Header": "foobar" }
        })
        .then(function(response) {
          console.warn("开始==================最简单的GET请求测试===响应");
          console.warn(response);
          console.warn("结束==================最简单的GET请求测试===响应");
        })
        .catch(function(error) {
          console.error("开始==================最简单的GET请求测试===错误");
          console.error(error);
          console.error("结束==================最简单的GET请求测试===错误");
        });
    },
    doPost: function() {
      axios
        .post(
          "/index.html",
          {
            param1: "参数一",
            param2: "参数二"
          },
          {
            // 可选配置
            headers: { "X-Custom-Header": "foobar" }
          }
        )
        .then(function(response) {
          console.warn("开始==================最简单的POST请求测试===响应");
          console.warn(response);
          console.warn("结束==================最简单的POST请求测试===响应");
        })
        .catch(function(error) {
          console.error("开始==================最简单的POST请求测试===错误");
          console.error(error);
          console.error("结束==================最简单的POST请求测试===错误");
        });
    },
    doManyRequest: function() {
      axios
        .all([axios.get("index.html"), axios.get("package.json")])
        .then(
          axios.spread(function(data1, data2) {
            //两个请求现已完成
            console.warn("开始==================一次执行多个请求");
            console.warn(data1);
            console.warn(data2);
            console.warn("结束==================一次执行多个请求");
          })
        )
        .catch(function() {
          // 请求存在失败的
        });
    },
    doConfig: function() {
      var instance = axios.create({
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" }
      });

      instance.get("LICENSE").then(function(response) {
        console.warn(
          "开始==================自定义配置创建axios的新实例===响应"
        );
        console.warn(response);
        console.warn(
          "结束==================自定义配置创建axios的新实例===响应"
        );
      });
    }
  }
};
</script>

<style scoped>
li {
  padding: 0.2rem;
  cursor: pointer;
  display: inline-block;
  background-color: rgb(6, 166, 240);
  border-radius: 50%;
  color: white;
}
</style>

