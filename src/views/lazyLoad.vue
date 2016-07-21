<template>
	<div class="addddd">
		<div>
			<img src1="http://placeholder.qiniudn.com/466x466/4CD964/fff" s="1"/>
		</div>
		<div>
			<img src1="http://placeholder.qiniudn.com/466x466/4CD964/fff" s="1" />
		</div>
		<div>
			<img src1="http://placeholder.qiniudn.com/178x178/007AFF/fff" s="1" />
		</div>
		<div>
			<img src1="http://placeholder.qiniudn.com/466x466/4CD964/fff" s="1" />
		</div>
		<div>
			<img src1="http://placeholder.qiniudn.com/754x754" s="1"/>
		</div>
	</div>
</template>
<script type="text/javascript">
	import lazyload from './../components/lazyload.vue';
	export default{
		components:{
			lazyload
		},
		data(){
			return {
				daq:'1'
			};
		},
		ready(){
			window.onscroll = () => {
				this.loa();
			};
			window.onresize = () => {
				this.loa();
			};
			const img = document.querySelectorAll('img');
				const len = img.length;
			for (let i = 0; i<len; i++){
				img[i].setAttribute('src', 'http://temp.im/288x288/FF9500/000');
			}
			this.loa();
		},
		methods:{
			load(topqdom, topw){
					const topq = topqdom.getBoundingClientRect().top;
					const offse = topqdom.offsetHeight;
					if (topq < (20+topw) && topq > -offse){
						console.log('topw', topw);
						console.log('topq', topq);
						const src1 = topqdom.getAttribute('src1');
						const src2 = topqdom.getAttribute('src2');
						topqdom.setAttribute('src', src1);
					}
				},
			loa(){
				const img = document.querySelectorAll('img');
				const topw = document.documentElement.clientHeight;
				const len = img.length;
				const self = this;
				for (let i = 0; i<len; i++){
					self.load(img[i], topw);
				}
			}
		}
	};
</script>
<style type="text/css">
	.addddd > div{
		min-height: 400px;
		margin-bottom: 10px;
	}
</style>