<template>
<div class="navbar navbar-fixed-top">
      <div class="container navborder-red">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" @click="showMenu">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand hidden-sm" href="">VueTheme-Red</a>
        </div>
        <div class="navbar-collapse" style="height: 1px;" :class="{collapse:isShow}">
          <ul class="nav navbar-nav navbar-right">
            <li class="hidden-sm hidden-md"><a href="#">菜单1</a></li>
            <li><a href="#">菜单2</a></li>
            <li><a href="#">菜单3</a></li>
            <li><a href="#">菜单4</a></li>
            <li><a href="#">菜单5</a></li>
            <li><a href="#">菜单6</a></li>
            <li class="hidden-sm"><a href="#">关于</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
               isShow:true
            }
        },
        created() { 
           
        },
        methods: {
           showMenu() {
              this.isShow=!this.isShow
           }

        }
    }

</script>
<style type="text/css">

.navborder-red {
  border-bottom: 1px red solid;
}
.navborder-red .icon-bar {
  background-color: #888;
}

</style>