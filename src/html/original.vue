<template>
  <div>

    <!-- v-else-if -->
    <input type="text" v-model.number="flag" placeholder="自动将用户的输入值转为数值类型" />
    <span v-if='flag<10'>flag&lt;10</span>
    <span v-else-if='flag>10 && flag<100'>10&lt;flag&gt;100</span>
    <span v-else-if='flag>100 && flag<1000'>100&lt;flag&gt;1000</span>
    <span v-else>其它值</span>

    <hr />

    <!-- v-for -->
    <span v-for='(value,key) in item' v-bind:key="key">{{value}}</span>

    <hr />

    <!-- 复选框 -->
    <input type="checkbox" value="one" id="one" v-model="checkbox_num">
    <label for="one">第一个</label>
    <input type="checkbox" value="two" id="two" v-model="checkbox_num">
    <label for="two">第二个</label>
    <input type="checkbox" value="three" id="three" v-model="checkbox_num">
    <label for="three">第三个</label>
    {{checkbox_num}}

    <hr />

    <!-- 单选按钮 -->
    <input type="radio" value="r-one" id='r-one' v-model="radio_flag" />
    <label for="r-one">r-one</label>
    <input type="radio" value="r-two" id='r-two' v-model="radio_flag" />
    <label for="r-two">r-two</label>

  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0,
      item: ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
      checkbox_num: [],
      radio_flag: "r-one"
    };
  }
};
</script>
