/**
 *  数据
 *   key:名称
 *   text:显示的名称
 *   type:目录功能类型，分：'layout','back','component'。
 **/
export const menuData = [{
	id: 21,
	text: '上下布局',
	type: 'layout',
	key: 'toplayout',
	url: '#'
}, {
	id: 22,
	text: '左右布局',
	type: 'layout',
	key: 'leftlayout',
	url: '#'
}];

export const menuCompData = [{
	id: 99,
	text: '后退',
	type: 'back',
	key: 'back',
	url: '#'
}, {
	id: 31,
	text: '表单',
	type: 'component',
	key: 'from',
	url: '#',
	submenu:[{
		id: 311,
		text: 'text',
		type: 'text',
		key: 'from'
	}, {
		id: 312,
		text: 'textarea',
		type: 'textarea',
		key: 'from'
	}, {
		id: 313,
		text: 'date',
		type: 'date',
		key: 'from'
	}, {
		id: 314,
		text: 'select',
		type: 'select',
		key: 'from'
	}]
}, {
	id: 32,
	text: '表格',
	type: 'component',
	key: 'grid',
	url: '#'
}];

export const customeMenuData = [{
	id: '123abcef',
	text: '菜单一',
	url: '#'
}, {
	id: '123abceg',
	text: '菜单二',
	url: '#'
}, {
	id: '123abcej',
	text: '菜单三',
	url: '#'
}];