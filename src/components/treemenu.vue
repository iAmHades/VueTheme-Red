<template>  
  <div class="ui menu">  
    <template v-for="item in leftItems">  
      <a " v-if="!item.children" @click="item.click">  
        <i class="{{ item.icon }} icon" v-if="item.icon"></i>{{item.text}}  
        <div class="ui mini {{item.labelColor }} label" v-if="item.label">  
          {{item.label}}  
        </div>  
      </a>    
      //如果有有children则说明是下拉菜单项，然后递归调用自身  
      <template  v-else="item.children.length > 0">  
        <div class="ui dropdown item">  
          <i class="{{ item.icon }} icon" v-if="item.icon"></i>     
          <div class="text"> {{item.text}}</div>  
          <menubar :items="item.children" ></menubar>  
        </div>  
      </template>  
    </template>  
    //显示在右侧的菜单项，也是递归调用自身  
    <menubar  :items="rightItems" v-if="rightItems.length > 0"></menubar>  
  </div>  
</template> 
<script>
// import * from './../../components/*';
export default{
  components:{
        // *
      },
      data(){
        return{
          menubar:[  
          {id:"a",text:"主页1",icon:"home",tips:"提示",label:"33",labelColor:"red",url:"#"},  
          {id:"b",text:"菜单",icon:"edit",tips:"提示",url:"#",children:[  
          {id:"a",text:"菜单1",click:"test3",icon:"home",url:"#"},  
          {id:"a",text:"菜单2",click:"test3",icon:"home",url:"#"}  
          ]},  
          {id:"bb",text:"编辑",tab:"a",icon:"user",vlink:"#"},  
          {id:"bb",text:"文件",tab:"b",icon:"user",click:"test1"},  
          {id:"bb",text:"帮助",tab:"c",icon:"help",click:"test2"},  
          {id:"bb",text:"工具",icon:"user",url:"www.baidu.com"},  
          {id:"c",text:"设置",icon:"home",tips:"提示",enabled:true,color:"blue",url:"#",right:true,label:"",children:[  
          {id:"bbb",text:"配置",icon:"home",tips:"提示",click:"test3"},  
          {id:"adsd",text:"退出",icon:"home",tips:"提示",vlink:"/workdesk",url:"#"}  
          ]  
        }  
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