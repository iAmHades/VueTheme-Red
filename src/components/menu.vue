<template>
    <div class="nav-container">
      <div class="black-navigate"></div>
        <nav class="simple-bar open-nav">
            <div class="container">
                <div class="row nav-menu">
                    <div class="col-md-3 col-sm-3 columns">
                        <!-- <img class="logo logo-light" alt="Logo" src="#"> -->
                    </div>
                    <div class="col-md-9 col-sm-9 columns text-right">
                        <ul class="menu">
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
                </div>
             
            </div>
        </nav>
    </div>
</template>

<script>
</script>

<style type="text/css">
.nav-container{
    background-color: white;
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
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

@media (max-width: 550px) {
  .nav-container{
    display: none;
  }
}

</style>
