<template>
<div>
   <div class="navbar">
      <slot name="top_menu"></slot>
   </div>
   <div class="main-container" >
      <slot name="top_container"></slot>
   </div>
   <div class="footer-container">
     <slot name="top_footer"></slot>
   </div>
</div>   
</template>
<script>
</script>
<style type="text/css">
.main-container .view{
  text-align: center;
}
.footer-container{
  position: absolute;
  width: 100%;
}
</style>