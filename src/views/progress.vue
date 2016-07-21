<template>
	<div>
	   <progressBa :step = "step" :complete = "complete">
	   </progressBa>
	</div>
	
</template>
<script type="text/javascript">
	import progressba from './../components/progress.vue';
	export default {
		components:{
			progressba
		},
		data(){
			return {
				step:[
					{ text:'提交订单', img:'http://temp.im/50x50' },
					{ text:'去支付', img:'http://temp.im/50x50' },
					{ text:'完成', img:'http://temp.im/50x50' },
					{ text:'提交订单', img:'http://temp.im/50x50' },
					{ text:'去支付', img:'http://temp.im/50x50' },
					{ text:'完成', img:'http://temp.im/50x50' }
				],
				complete:5
			};
		},
		methods:{
			a(){
   				this.complete ++;
			}
		}
	};
</script>