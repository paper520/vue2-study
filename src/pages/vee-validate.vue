<template>
  <form>
    <div>
      <label for="email">邮箱</label>
      <input v-validate v-model="email" data-rules="required|email" name="email" type="text" />
    </div>
    <hr /> {{errors.first('email')}}
    <hr />
    <input type="button" value="点击查看" @click="doIt()">
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
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
}
</style>
