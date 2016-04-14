<template>
  <nav class="columns ">
    <div class="column col-3">VueTheme-Red</div>
    <div class="column col-9 text-right">
      <ul class="navmenu inline-block">
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


nav ul.navmenu{
      display: flex;
      justify-content: flex-end;
}

nav ul.navmenu li{
   list-style: none;
   width:100px;
}


</style>
