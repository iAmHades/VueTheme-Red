<!-- 验证码组件 
Taoxin 2016-05-20
-->

<template>
    <div style="height:300px;">

        <input id="inputCode" type="text"/>

        <span id="code" class="mycode"></span>
<button @click="verify">222</button>

        <input id="inputCode2" type="text"/>

        <span id="code2" class="mycode"></span>
    </div>
</template>

<script >
module.exports = {
    ready(){},
    methods: {

        verify(){

        const inp = document.getElementById('inputCode');
            const code = document.getElementById('code');
            const inp2 = document.getElementById('inputCode2');
            const code2 = document.getElementById('code2');
            const c = new VerifyCode({
                len: 4,
                chars: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
                   'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                     'Y', 'Z'
                ],
                question:false,
                copy: false,
                bgColor:'',
                bgImg:'bg.jpg',
                randomBg : false,
                inputArea: inp,
                codeArea: code,
                click2refresh: true,
                false2refresh: true,
                validateEven : 'blur',
                validateFn(result, code222){
                    if (result) {
                        alert('验证成功');
                    } else {
                        alert('验证失败');
                    }
                 }
            });

        }
    }
};
</script>
<style>
        
    </style>