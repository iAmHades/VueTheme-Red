<template>
<!-- display :初始默认显示的第几个 class : 选中后one 添加的样式 -->
	<switchs :display = "display" customclass = "sle" >
		<div slot="one">
		 	<div >a</div>
		 	<div >b</div>
		 	<div >c</div>
		</div>
		<div slot="two">
			<div>a</div>
			<div>b</div>
			<div>c</div>
		</div>
	</switchs>
</template>
<script type="text/javascript">
	import switchs from './../components/switchs.vue';
	export default{
		components:{
			switchs
		},
		data(){
			return {
				display:1
			};
		}
	};
</script>
<style type="text/css">
	
	[slot="one"] > div{
		float: left;
		border: 1px solid #ccc;
		border-left: none;
		width: 33.333%;
		line-height: 40px

	}

	[slot="one"]{
		background: #E8E8E8;
	    width: 100%;
	    float: left;
	}

	[slot="one"] div:first-child{
		border-left: 1px solid #ccc!important;	
	}
	.sle {
		background: #000;
		color: #fff;
	}
</style>