<template>
    <div class="taotao">
    <!-- zoomlevel: 放大系数 最好小于展示图片 实际尺寸最大值 大于80 实际等于遮罩层的大小 -->

     <tao :zoomlevel = "200">
     </tao>
    </div>
</template>
<script>
import tao from './../components/tao.vue';
 export default{
 	components:{
 		tao
 	},
 	methods:{
 	}
 };
</script>
<style >
	.taotao{
		width: 385px;
	}
</style>
