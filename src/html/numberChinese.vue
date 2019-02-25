<template>
  <div>
    类型一：{{num|numberChinese(true)}}
    <br /> 类型二：{{num|numberChinese}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1234567
    };
  }
};
</script>
