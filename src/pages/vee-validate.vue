<template>
  <form>

    <!-- 
      第一部分：自带规则
      ==============================
     -->
    <h1>
      =》自带规则
    </h1>

    <div>
      <label for="alpha">alpha</label>
      <input v-validate="'required|alpha'" name="alpha" type="text" placeholder="字母字符" /> {{errors.first('alpha')}}
    </div>

    <div>
      <label for="alpha_dash">alpha_dash</label>
      <input v-validate="'required|alpha_dash'" name="alpha_dash" type="text" placeholder="字母、数字字符、破折号" /> {{errors.first('alpha_dash')}}
    </div>

    <div>
      <label for="alpha_num">alpha_num</label>
      <input v-validate="'required|alpha_num'" name="alpha_num" type="text" placeholder="字母、数字字符" /> {{errors.first('alpha_num')}}
    </div>

    <div>
      <label for="alpha_spaces">alpha_spaces</label>
      <input v-validate="'required|alpha_spaces'" name="alpha_spaces" type="text" placeholder="字母字符、空格" /> {{errors.first('alpha_spaces')}}
    </div>

    <div>
      <label for="date_format">date_format</label>
      <input v-validate="'required|date_format:DD/MM/YYYY|after: 07/14/2016'" name="date_format" type="text" placeholder="日期格式DD/MM/YYYY|after: 14/07/2016" /> {{errors.first('date_format')}}
    </div>

    <!-- 
      第二部分：自定义规则
      ==============================
     -->
    <h1>
      =》自定义规则
    </h1>

     <div>
      <label for="ruleSelf">ruleSelf</label>
      <input v-validate="'required|ruleSelf'" name="ruleSelf" type="text" placeholder="自定义规则:4到14位数字" /> {{errors.first('ruleSelf')}}
    </div>

    <hr />
    <h1>
      【错误信息】
    </h1>
    {{errors}}
    <hr />
    <input type="button" value="点击查看" @click="doIt()">
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    doIt() {
      console.log(this.errors);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  margin: 1rem;
  input {
    &[type="text"] {
      width: 3rem;
    }
  }
}
</style>
