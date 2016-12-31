<template>
	<div>
		<tab :btns="btnss" :value.sync="value">
			<div slot="tab_body">
			<table class="table">
				<thead>
					<th>id</th>
					<th>name</th>
				</thead>
				<tbody>
					<tr v-for="data in datas | filterBy value in 'type'">
						<td>{{data.id}}</td>
						<td>{{data.name}}</td>
					</tr>
				</tbody>
			</table>
			</div>
		</tab>
		<hr/>

	</div>
</template>
<script>
import tab from './../components/tab.vue';
export default{
    components:{
        tab
    },
    data(){
        return{
        	btnss:[
				{ text:'用户', value:1 },
				{ text:'商铺', value:2 },
				{ text:'其他', value:3 },
			],
			value:1,
			datas:[
			{ id:'1', name:'lulu', type:1 },
			{ id:'2', name:'lulu', type:1 },
			{ id:'3', name:'lulu', type:2 },
			{ id:'4', name:'lulu', type:1 },
			{ id:'5', name:'lulu', type:1 },
			{ id:'6', name:'lulu', type:2 },
			{ id:'7', name:'lulu', type:1 },
			{ id:'8', name:'lulu', type:2 },
			{ id:'9', name:'lulu', type:1 },
			{ id:'10', name:'lulu', type:2 },
			]
         };
    },
    ready(){
    },
    watch:{
    },
    computed:{
   },
    methods:{
    }
};
</script>