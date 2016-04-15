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
            <li v-for="menu in menus"><a href="#">{{menu.text}}</a></li>
            <li class="hidden-sm"><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
 import { getMenus } from './../vuex/actions'

 module.exports = {
   vuex: {
     getters: {
       menus: state => state.menu.menus
     },
     actions: {
       getMenus
     }
   },
   data() {
     return {
        isShow:true
     }
   },
   created() {
     this.getMenus()
   },
   methods: {
     showMenu(){
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