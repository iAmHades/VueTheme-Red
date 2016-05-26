<!-- 验证码组件
Taoxin 2016-05-20
-->

<template>
  <div class="verify-class">
    <input id="inputCode" type="text" class="verify-input form-control"/>

    <span id="code" class="verify-span"></span>
    <!-- <button @click="verify">222</button> -->
  </div>
</template>

<script>
  module.exports = {
    props:{
      verifyresult:{
        type:Boolean,
        required: true,
        twoWay:true
      }
    },
    ready(){
      const inp = document.getElementById('inputCode');
      const code = document.getElementById('code');
      const inp2 = document.getElementById('inputCode2');
      const code2 = document.getElementById('code2');
      const c = new VerifyCode({
        inputArea: inp,
        codeArea: code,
        bgColor:'',
        randomBg : true,
        click2refresh: true,
        false2refresh: true,
        validateEven: 'blur',
        validateFn(result){
            this.verifyresult = result;
            alert(this.verifyresult);
            // if (!result) {
            //   alert('验证码输入有误');
            // }
        }
      });
    },
    methods: {
      verify(){
      }
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
