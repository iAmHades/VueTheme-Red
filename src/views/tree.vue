<template>
	<div>
		<div id="div1">
			<p>请输入内容...</p>
		</div>
	</div>
</template>
<script>
	export default{
		ready(){
			const editor = new wangEditor('div1');
			editor.create();
		}
	};
</script>
