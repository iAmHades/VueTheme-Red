<template>
  <div class="navbar">
      <div class="">
           <ul class="left-menu" >
             <li v-for="menu in menus">{{menu.text}}</li>
           </ul>
      </div>
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" @click="showMenu">
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
          </button>
        </div>
  </div>
</template>
<script>
 import { getLeftMenus } from './../vuex/actions';

 module.exports = {
   vuex: {
     getters: {
       menus: state => state.leftmenus
     },
     actions: {
       getLeftMenus
     }
   },
   data() {
     return {
       isShow: false
     };
   },
   created() {
     this.getLeftMenus();
   },
   methods: {
     showMenu() {
       this.isShow = !this.isShow;
     }
   }
 };
</script>
<style type="text/css">
ul.left-menu{
  list-style: none;
}
ul.left-menu li{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px black solid;
}

</style>