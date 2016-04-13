<template>
  <nav class="columns ">
    <div class="column col-3">VueTheme-Red</div>
    <div class="column col-9 text-right">
      <ul class="menu inline-block">
        <li>
          <a v-link="#" target="default">菜单1</a>
        </li>
        <li>
          <a v-link="#" target="default">菜单2</a>
        </li>
        <li>
          <a v-link="#" target="default">菜单3</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>

<style type="text/css">


nav ul.menu{
      display: flex;
      justify-content: flex-end;
}

nav ul.menu li{
   list-style: none;
   width:100px;
}

.black-navigate{
     background-color: red;
     width: 0;
     height: 5px;
}

.black-navigate-width{
   width:100%;
   transition:width 2s;
   -moz-transition:width 2s; 
   -webkit-transition:width 2s;
   -o-transition:width 2s;
}

</style>
