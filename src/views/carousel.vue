<template>
<div>
<!-- switchType: 切换类型 1:左右位移 2:明暗切换 默认1, autoplay:是否自动切换 1:是 2:不是 默认1, after-change:切换前触发  exhibition:首次显示那个 从零计数-->
	<carousel switch-type="1" :exhibition='exhibition' autoplay="2" :after-change='onchange' > 
	  <div>
	  	<img src="https://dn-placeholder.qbox.me/456x123">
	  </div>
	  <div>
	    <img src="https://dn-placeholder.qbox.me/456x123">
	  </div>
	  <div>
	    <img src="https://dn-placeholder.qbox.me/456x123">
	  </div>
	</carousel>
</div>
</template>
<script >
	import carousel from './../components/carousel.vue';
	export default{
		components:{
			carousel
		},
		data(){
			return {
				exhibition:2
			};
		},
		methods:{
		 	onchange(){
		 		alert(1);
		 	},
		}
	};
</script>
