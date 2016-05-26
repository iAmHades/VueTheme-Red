<template>

<div class="container-fluid admin-panel">
  <div class="row">
    <div class="col-md-2 leftmenu-borad">
      <slot name="left_menu"></slot>
    </div>
    <div class="col-md-10">
      <div class="main-container" >
        <slot name="left_container"></slot>
      </div>
    </div>
  </div>
</div>
</template>
<style type="text/css">
.admin-panel{
  background-color: white;
}
.leftmenu-borad{
  border-right: 1px black solid;
  height: 800px;
}
</style>