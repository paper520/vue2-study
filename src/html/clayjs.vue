<template>
  <canvas id='tree_circle'>非常抱歉，您的浏览器不支持canvas!</canvas>
</template>
<script>
// 获取数据
import data from "../assets/data/program.json";

// 获取绘图工具
import { $$ } from "clay-core";
import { $canvas } from "clay-2d";
import { tree } from "clay-chart";

export default {
  mounted() {
    const canvas_size = 700;

    /**
     * 1.准备画布和绘图对象
     * ------------------
     */
    // 准备画布
    let canvas = $$("#tree_circle")
      .attr("width", canvas_size)
      .attr("height", canvas_size);

    // 画笔、文字和贝塞尔
    let painter = canvas.painter(),
      text = $canvas
        .text(painter)
        .setAlign("left", "middle")
        .setColor("gray")
        .setSize(7),
      bezier = $canvas
        .bezier(painter)
        .setType(canvas_size * 0.5 - 1, canvas_size * 0.5 - 1, "circle")
        .setL(50);

    /**
     * 2.建立树图表对象
     * ------------------
     */
    let treeChart = tree({
      //  图形类型
      type: "circle",

      // 图形半径
      radius: canvas_size * 0.5 - 50,

      // 圆心位置
      cx: canvas_size * 0.5,
      cy: canvas_size * 0.5,

      // 配置数据结构
      root: initTree => initTree,
      child: parentTree => parentTree.children,
      id: treedata => treedata.name
    });

    /**
     * 3.启动绘图
     * ------------------
     */
    var result = treeChart(data);
    (function drawer(pid) {
      $$.loop(result.node, function(data, id, index) {
        // 启动定时执行
        window.setTimeout(function() {
          // 绘制连线
          if (data.pid)
            bezier
              .config({
                strokeStyle: "gray"
              })(
                result.node[data.pid].left,
                result.node[data.pid].top,
                data.left,
                data.top
              )
              .stroke();

          // 绘制结点
          painter.beginPath();
          painter.fillStyle = "rgb(234, 119, 158)";
          painter.moveTo(data.left + 2, data.top);
          painter.arc(data.left, data.top, 2, 0, Math.PI * 2);
          painter.fill();

          // 文字
          text(data.left, data.top, "    " + data.id, data.deg);
        }, index * 50);
      });
    })(result.root);
  }
};
</script>