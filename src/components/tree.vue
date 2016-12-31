<!-- item template -->
<template>
	<div>
		<ul id="demo">
			<item class="item" :model="treeData">
			</item>
		</ul>
		
</div>
</template>
<script type="text/javascript">
	// demo data
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

// define the item component
Vue.component('item', {
  template: '#item-template',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
})



</script>
<script type="text/x-template" id="item-template">
	<li>
		<div
			:class="{bold: isFolder}"
			@click="toggle">
			{{model.name}}
			<span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
		</div>
		<ul v-show="open" v-if="isFolder">
			<item class="item" v-for="model in model.children" :model="model">
			</item>
		</ul>
	</li>
</script>
