<template>
  <div class="navbar">
      <div class="">
           <ul class="left-menu" >
             <li v-for="menu in data">
                <a v-if="!menu.child" @click="goto(menu.url)">{{menu.text}}</a>
                <div v-else @click="showSubMenu(menu.id)">{{menu.text}}</div>
                <ul v-if="menu.child" v-show="activeindex==menu.id">
                  <li v-for="submenu in menu.child"><a @click="goto(submenu.url)">{{submenu.text}}</a></li>
                </ul>
             </li>
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
 module.exports = {
   props: ['data', 'activeindex'],
   methods: {
     showMenu() {
       this.isShow = !this.isShow;
     },
     showSubMenu(id) {
       if (this.activeindex === id) {
         this.activeindex = 0;
       } else {
         this.activeindex = id;
       }
     },
     goto(urlObject) {
       if (typeof(urlObject) === 'string') {
         window.router.go({
           path: urlObject
         });
       } else {
         window.router.go(urlObject);
       }
     }
   }
 };
 </script>
<style type="text/css">
ul.left-menu{
  list-style: none;
}
ul.left-menu li{
    min-height: 40px;
    line-height: 40px;
    border-bottom: 1px black solid;
}

</style>