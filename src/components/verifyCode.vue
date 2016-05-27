<!-- 验证码组件
Taoxin 2016-05-20
-->

<template>
  <div class="verify-class">
    <input id="inputCode" type="text" class="verify-input form-control"/>
    <span id="code" class="verify-span"></span>
  </div>
</template>

<script>
  module.exports = {
    props:{
      verify:{
        type:Boolean,
        required: false,
        twoWay:true
      }
    },
    ready(){
      const self = this;
      const inp = document.getElementById('inputCode');
      const code = document.getElementById('code');
      const c = new VerifyCode({
        inputArea: inp,
        codeArea: code,
        bgColor:'',
        randomBg : true,
        click2refresh: true,
        false2refresh: true,
        validateEven: 'blur',
        validateFn(result){
          self.verify = result;
        }
      });
    },
    methods: {
    }
  };
</script>
<style>
  .verify-class {
    height: 200px;
    width: 300px;
  }

  .verify-input {
    width: 100px;
    height: 30px;
    float: left;
  }

  .verify-span {
    width: 100px;
    height: 30px;
    float: left;
  }
</style>
