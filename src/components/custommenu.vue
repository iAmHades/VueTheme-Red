<template>
  <div class="navbar">
    <div class="menu">
      <ul class="nav-menu">
        <li v-for="menu in data"><a href="{{menu.url}}" @click="test">{{menu.text}}</a>
          <ul class="subs" id="sub_"+'$index' v-if="menu.childItem && show">
            <li  v-for="child in menu.childItem">
              <div class="subs-content">
                <div class="subs-title"><img src="http://temp.im/24x24">{{child.text}}</div>
              </div>
            </li>
          </ul>
        </li>

      </ul>
      <div class="menu-bottom-nav">
        <!-- <img src="http://temp.im/154x64"> -->
        <a href="{{bottomnav.url}}" style="color:#ffffff;">{{bottomnav.text}}</a>
    </div>
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
    props: [
        'data',
        'bottomnav'
    ],
    data(){
      return {
        show:false
      };
    },
    methods: {
      showMenu() {
        this.isShow = !this.isShow;
      },
      test() {
        this.show = !this.show;
      }
    }
  };
</script>
<style type="text/css">
.nav-menu{
  border: 1px solid;
  text-align: center;
}
.nav-menu li{
  list-style: none;
  height: 40px;
  border-bottom: 1px solid;
}
</style>
