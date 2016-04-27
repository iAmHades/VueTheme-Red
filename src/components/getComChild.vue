<template>
  <div class="navbar">
      <div class="">
           <ul class="left-menu" >
             <li v-for="menu in menus" @click=""><a href="{{menu.url}}">{{menu.text}}</a></li>
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
 import { getChildMenus } from './../vuex/actions';

 module.exports = {
   vuex: {
     getters: {
       menus: state => state.childmenus
     },
     actions: {
       getChildMenus
     }
   },
   data() {
     return {
       isShow: false
     };
   },
   created() {
     this.getChildMenus();
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