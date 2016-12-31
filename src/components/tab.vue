<template>
	<div>
		<div>
			<slot >
				<button v-for="btn in btns" @click="switchBtn(btn.value)">{{btn.text}}</button>
			</slot>
		</div>
		<div>
			<slot name="tab_body">
			</slot>
		</div>
	</div>
</template>
<script>
	export default{
		props:['btns', 'value'],
		data(){
			return{
			};
		},
		ready(){
		},
		watch:{
		},
		computed:{
		},
		methods:{
			switchBtn(val){
				this.value = val;
			}
		}
	};
</script>