<template>
<div class="container">
  <div class="projects-container column-projects" style="position: relative; height: 630px;">
    
    <div class="col-md-4 col-sm-6 project development image-holder" >
      <div class="background-image-holder" style="background: url(&quot;http://temp.im/300x300&quot;) 50% 0%;">
        <img class="background-image" alt="Background Image" src="http://temp.im/300x300" style="display: none;">
      </div>
      <div class="hover-state">
        <div class="align-vertical" style="padding-top: 100.261px;">
          <h3 class="text-white"><strong>MS10</strong> UX</h3>
          <a href="project-single.html" class="btn btn-primary btn-white">See Project</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4 col-sm-6 project branding image-holder" >
      <div class="background-image-holder" style="background: url(&quot;http://temp.im/300x300&quot;) 50% 0%;">
        <img class="background-image" alt="Background Image" src="http://temp.im/300x300" style="display: none;">
      </div>
      <div class="hover-state">
        <div class="align-vertical" style="padding-top: 100.261px;">
          <h3 class="text-white"><strong>Medium</strong> Blog Platform</h3>
          <a href="project-single.html" class="btn btn-primary btn-white">See Project</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4 col-sm-6 project print image-holder" >
      <div class="background-image-holder" style="background: url(&quot;http://temp.im/300x300&quot;) 50% 0%;">
        <img class="background-image" alt="Background Image" src="http://temp.im/300x300" style="display: none;">
      </div>
      <div class="hover-state">
        <div class="align-vertical" style="padding-top: 100.261px;">
          <h3 class="text-white"><strong>Identity</strong> Mockup</h3>
          <a href="project-single.html" class="btn btn-primary btn-white">See Project</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4 col-sm-6 project print image-holder" >
      <div class="background-image-holder" style="background: url(&quot;http://temp.im/300x300&quot;) 50% 0%;">
        <img class="background-image" alt="Background Image" src="http://temp.im/300x300" style="display: none;">
      </div>
      <div class="hover-state">
        <div class="align-vertical" style="padding-top: 100.261px;">
          <h3 class="text-white"><strong>Aurora</strong> App Icons</h3>
          <a href="project-single.html" class="btn btn-primary btn-white">See Project</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4 col-sm-6 project branding image-holder" >
      <div class="background-image-holder" style="background: url(&quot;http://temp.im/300x300&quot;) 50% 0%;">
        <img class="background-image" alt="Background Image" src="http://temp.im/300x300" style="display: none;">
      </div>
      <div class="hover-state">
        <div class="align-vertical" style="padding-top: 100.261px;">
          <h3 class="text-white"><strong>Sketchbook</strong> Logo Mockup</h3>
          <a href="project-single.html" class="btn btn-primary btn-white">See Project</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4 col-sm-6 project development image-holder" >
      <div class="background-image-holder" style="background: url(&quot;http://temp.im/300x300&quot;) 50% 0%;">
        <img class="background-image" alt="Background Image" src="http://temp.im/300x300" style="display: none;">
      </div>
      <div class="hover-state">
        <div class="align-vertical" style="padding-top: 100.261px;">
          <h3 class="text-white"><strong>Muzik</strong> Home Screen</h3>
          <a href="project-single.html" class="btn btn-primary btn-white">See Project</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
    },
    ready() {
    }
  }
</script>

<style>
  .column-projects {
    margin-bottom: 80px;
}
.column-projects .project.col-md-4 {
    overflow: hidden;
}
.column-projects .project {
    height: 300px;
    margin-bottom: 15px;
}
.column-projects .project.col-md-4 .background-image-holder {
    width: 100% !important;
}
.column-projects .project .background-image-holder {
    left: 15px;
}

@media (max-width: 780px) {
   .column-projects .project .background-image-holder {
    left: 0;
   }
}

.background-image-holder, .foreground-image-holder {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-size: cover !important;
    z-index: 0;
    background-position: 50% 50% !important;
}
.projects-wrapper {
    text-align: center;
}
.project img {
    width: 100%;
}
img {
    max-width: 100%;
}
.project .hover-state {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: rgba(44, 62, 80, 0.9);
    text-align: center;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    opacity: 0;
    padding-right: 15px;
}
.hover-state .align-vertical {
    -webkit-transform: translate3d(0, 200px, 0);
    -moz-transform: translate3d(0, 200px, 0);
    transform: translate3d(0, 200px, 0);
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    opacity: 0;
}
.hover-state h3 {
    margin-bottom: 24px;
}
.project .hover-state h3 {
    font-size: 18px;
    margin-bottom: 8px;
}

.btn-primary {
    border-radius: 25px;
    display: inline-block;
    padding: 14px 28px 13px 28px;
    line-height: 1;
    border: 2px solid #3498db;
    font-family: "Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #3498db;
  }
  .btn-white {
    border-color: #fff;
    color: #fff;
}

</style>
