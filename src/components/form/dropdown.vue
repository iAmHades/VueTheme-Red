<!-- 下拉组件 
Taoxin  2016-05-19
-->

<template>
  <div class="dropdown">
    <div >
    </div>
  </div>
</template>
<script>
  module.exports = {
    props: [
        'data',
        'bottomnav'
    ],
    methods: {
      showMenu() {
        this.isShow = !this.isShow;
      },
      test() {
      }
    }
  };
</script>
<style type="text/css">

</style>
