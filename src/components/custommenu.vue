<template>
  <div class="navbar">
    <div class="menu-main">
      <ul class="left-menu">
        <li v-for="menu in data" class="menu-li" @mouseover="test"><a href="{{menu.url}}">{{menu.text}}</a>
          <div class="menu-child-right">
            <div v-for="child in menu.childItem" class="menu-child"><span>{{child.text}}</span></div>
          </div>
        </li>
      </ul>
      <!--<div class="menu-child-right">-->
        <!--<div v-for="child in data.childItem" class="menu-child"><span>{{child.text}}</span></div>-->
      <!--</div>-->
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
  module.exports = {
    props: ['data'],
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
  ul.left-menu {
    list-style: none;
  }

  ul.left-menu li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px black solid;
  }

  .menu-li {
    text-align: left;
    font-size: 18px;
  }

  .menu-li:hover {
    background: red;
  }

  .menu-main {
    border: 1px solid;
    width:800px;
  }
  .left-menu{
    width:200px;
    border:1px solid yellow;
  }

  .menu-child {
    font-size: 14px;
    /*float: left;*/
  }

  .menu-child-right {
    width: 100px;
    border: 1px solid red;
    float: right;
    height: 134px;
  }
</style>
