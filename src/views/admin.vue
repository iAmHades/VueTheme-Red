<template>
<div class="container-fluid admin-panel">
  <div class="row">
    <div class="col-md-2 leftmenu-borad">
      <leftmenu></leftmenu>
    </div>
    <div class="col-md-10">
      <div class="main-container" >
        <router-view  class="view"  transition="expand" transition-mode="out-in"></router-view>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    import leftmenu from './../components/leftmenu.vue';
    export default {
        components: {
          leftmenu
        },
        data() {
            return {
            };
        },
        compiled() {}
    };
</script>

<style>
.admin-panel{
  background-color: white;
}
.leftmenu-borad{
  border-right: 1px black solid;
  height: 800px;
}
</style>
