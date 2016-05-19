<template>
  <div class="navbar">
    <div class="menu">
      <ul class="nav-menu">
        <li v-for="menu in data"><a href="{{menu.url}}">{{menu.text}}</a>
          <ul class="subs" v-if="menu.childItem">
            <li  v-for="child in menu.childItem">
              <div class="subs-content">
                <div class="subs-title"><img src="http://temp.im/24x24">{{child.text}}</div>
                 <a v-for="sub in child.subItems" class="subs-text-a" style="border:none;float:left;width:auto;" href="http://www.baidu.com" target="_blank">{{sub.text}}</a>
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
  .menu {
    position:relative;
    background:#ffffff;
    width:180px;
    /*height:160px;*/
    /*border:1px #000 solid;*/
    margin:20px auto;
    padding:15px;
    border-radius:3px;
    -moz-border-radius:3px;
    -webkit-border-radius:3px;
  }

  /* main menu styles */

  .nav-menu,.nav-menu ul {
    list-style:none;
    margin:0;
    padding:0;
  }

  .nav-menu {
    /*position:relative;*/
    border: 1px solid red;
  }

  .nav-menu ul {
    height:0;
    left:164px;
    overflow:hidden;
    position:absolute;
    top:15px;
  }

  .nav-menu li {
    /*float:left;*/
    /*position:relative;*/
  }

  .nav-menu li a {
    -moz-transition:0.5s;
    -o-transition:0.5s;
    -webkit-transition:0.5s;
    /*background-color:#7770B4;*/
    border:1px solid #E8E8E8;
    color:#000000;
    display:block;
    font-size:16px;
    line-height:35px;
    padding:5px 20px;
    text-decoration:none;
    transition:0.5s;
  }

  .nav-menu li:hover > a {
    background:#E8E8E8;
    border:1px solid #6E67A6;
    color:#fff;
  }

  .nav-menu li:hover ul.subs {
    height:93%;
    width:600px;
    text-align: left;
    border:1px solid red;
  }

  .nav-menu ul li {
    -moz-transition:0.1s;
    -o-transition:0.1s;
    -webkit-transition:0.1s;
    opacity:0;
    transition:0.1s;
    width:100%;
  }

  .nav-menu li ul li {
    -moz-transition-delay:0s;
    -o-transition-delay:0s;
    -webkit-transition-delay:0s;
    transition-delay:0s;
  }

  .nav-menu li:hover ul li {
    opacity:1;
    -moz-transition-delay:0.1s;
    -o-transition-delay:0.1s;
    -webkit-transition-delay:0.1s;
    transition-delay:0.1s;
  }

  /*.nav-menu ul li a {
    background:#7770B4;
    border-color:#ffffff;
    color:#fff;
    line-height:1px;
    -moz-transition:1.5s;
    -o-transition:1.5s;
    -webkit-transition:1.5s;
    transition:1.5s;
  }

  .nav-menu li:hover ul li a {
    line-height:35px;
  }

  .nav-menu ul li a:hover {
    background:#8CCA33;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 95%, from(rgba(255, 255, 255, 0.5)), to(rgba(255, 255, 255, 0)));
    background-image: -moz-linear-gradient(-90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    background-image: -o-linear-gradient(-90deg,rgba(255,255,255,0.5),rgba(255,255,25,0));
  }*/
  .subs-content{
    /*margin-left: 30px;*/
    /*border: 1px solid red;*/
    height: 80px;
  }
  .subs-title{
    border-bottom: 1px solid;
    width: 100%;
    margin-left: 30px;
  }
  .subs-text-a{
    /*border:none;*/
    /*float: left;*/
  }
  .menu-bottom-nav{
    width: 150px;
    background: red;
    height: 32px;
    margin-left: auto;;
    margin-right: auto;
    font-size: 16px;
    padding: 5px;
    font-weight: bolder;
  }
</style>
