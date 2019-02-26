<template>
  <ul>
    <li @click='doGet()'>
      最简单的GET请求测试
    </li>
    <li @click='doPost()'>
      最简单的POST请求测试
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    doGet: function() {
      axios
        .get("/index.html")
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
        .post("/index.html", {
          param1: "参数一",
          param2: "参数二"
        })
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
    }
  }
};
</script>
