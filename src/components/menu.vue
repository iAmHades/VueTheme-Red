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
        <div v-el:menu class="navbar-collapse" style="height: 1px;" :class="{showbyopacity:isShow}">
          <ul class="nav navbar-nav navbar-right" :class="{showtranslate:isShow}">
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
        isShow:false
     }
   },
   created() {
     this.getMenus()
   },
   methods: {
     showMenu(){
        this.isShow=!this.isShow
        // this.$els.menu.style
     }
   }
 }

</script>
<style type="text/css">


.navbar-fixed-top .navbar-toggle{
  z-index: 1;
}
.navbar-brand{
  font-size: 25px;
  padding-top: 21px;
  color: black;
  font-weight: bold;
}

.navbar-right{
  background-color: white;
}

.navborder-red {
  border-bottom: 1px red solid;
}
.navborder-red .icon-bar {
  background-color: #888;
}

.navbar-nav>li>a{
    font-family: "Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #777777;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    padding-bottom: 40px;
    padding-top: 30px;
    display: inline-block;
    line-height: 14px;
    cursor: pointer;
    width: 100%;
}

.navbaranimal{
    transform:translateY(100px);
    transition: -webkit-transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
    background-color: rgb(255, 255, 255);
  }

.showbyopacity{
  opacity:1!important;
}

.showtranslate{
  transform: translate3d(0px, 0px, 0px)!important;
}

@media (max-width: 780px) {
  .navbar-nav>li>a{
    padding-bottom: 15px;
    padding-top: 15px;
  }

  .navbar-collapse {
    opacity:0;
    transition: opacity 800ms cubic-bezier(0.39, 0.575, 0.565, 1) 300ms;
  }  

  .navbar-collapse .navbar-right{
    transform: translate3d(0px, -40px, 0px);
    transition: -webkit-transform 500ms cubic-bezier(0, 1, 1, 0.73) 300ms;
  }
  
}

</style>