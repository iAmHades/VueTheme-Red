/**
 *  dragEls Object 对象
 *  dom  需要被拖动的document对象
 *  elementType 指定拖拽的阴影图像显示类型，默认是不需要设置的，可用来区分是否来源左侧菜单。
 **/

function Draggable(dragEls, gridster, options) {
	this.dragEls = [];
	// 被拖拽元素
	// 多个
	if (Array.isArray(dragEls)) {
		if (dragEls.length > 0) {
			dragEls.forEach((object) => {
				// 指定左侧菜单ui的类型
				object.dom.elementType = object.elementType;
				this.dragEls.push(object.dom);
			});
		} else {
			return;
		}
		// 单个
	} else {
		this.dragEls.push(dragEls);
	}
	// 被拖拽进的区域元素
	this.gridster = gridster;
	this.defaults = {
		dragImage: '', // 拖拽元素跟随鼠标移动的模型
		dragText: '',
		effectAllowed: 'move',
		shadowClass: 'shadow', // 当前目标区域中的拖拽对象的投影样式
		dragDomWidth: 0, // 当前拖拽元素的宽度
		dragDomHeight: 0 // 当前拖拽元素的高度
	};
	this.options = this.extend(this.defaults, options);
	// 父级关系不同，起offeset位置也不同，默认为left_container层级开始计算
	// 当前dragEl的坐标
	this.vueInstance = null;
	this.state = 'init';
	// 初始化
	this.init();
}
window.Draggable = Draggable;

// 绑定事件
// dragstart(drag元素) -> drag(drag元素) -> dragenter(drop元素) -> dragover(drop元素) -> dragleave(drop元素) -> drop(drop元素) -> dragend(drag元素)
Draggable.prototype.bindEvent = function bindEvent() {
	// 被拖拽的元素可以是多个，但是目标只能为一个。
	for (let i = 0; i < this.dragEls.length; i++) {
		const dragEl = this.dragEls[i];
		this.bindDragEvent(dragEl);
	}
};

// 被拖拽产品
Draggable.prototype.bindDragEvent = function bindDragEvent(dragEl) {
	dragEl.addEventListener('dragstart', (e) => {
		this.state = 'dragstart';
		const type = dragEl.elementType;
		const dom = this.createDragImage(type, e.target);
		e.dataTransfer.effectAllowed = this.options.effectAllowed;
		e.dataTransfer.setData('text', dom.innerHTML);
		e.dataTransfer.setDragImage(dom, 0, 0);
		this.onDragStart(e);
	});
	// ondragstart 事件触发后，直到拖放事件结束，会一直触发 ondrag 事件
	dragEl.addEventListener('drag', (e) => {
		this.state = 'drag';
	});
	// 拖拽结束，去掉shadow，同时将拖拽目标移动到新的位置
	dragEl.addEventListener('dragend', (e) => {
		this.state = 'dragend';
		e.dataTransfer.clearData('text');
		const vueDom = this.createVueDom(dragEl.elementType);
		this.addWidget(vueDom);
		this.onDragEnd(e);
	});
};

Draggable.prototype.extend = (source, target) => {
	if (target && Object.prototype.toString.call(target) === '[object Object]') {
		Object.keys(target).forEach((key) => {
			source[key] = target[key];
		});
	}
	return source;
};

Draggable.prototype.init = function() {
	// 绑定事件;
	this.bindEvent();
};

Draggable.prototype.createDragImage = function createDragImage(type, dragDom) {
	if (!type) return dragDom;
	const dom = document.createElement('img');
	switch (type) {
		case 'from':
			dom.src = 'http://temp.im/400x600';
			dom.style.width = 400 + 'px';
			dom.style.height = 600 + 'px';
			break;
		case 'grid':
			dom.src = 'http://temp.im/700x500';
			dom.style.width = 700 + 'px';
			dom.style.height = 500 + 'px';
			break;
		case 'menu':
			dom.src = 'http://temp.im/300x800';
			dom.style.width = 300 + 'px';
			dom.style.height = 800 + 'px';
			break;
		default:
			dom.src = 'http://temp.im/300x300';
			dom.style.width = 300 + 'px';
			dom.style.height = 300 + 'px';
	}
	return dom;
};

// 如果需要vue的编译，则注入
Draggable.prototype.initVue = function initVue(vueInstance) {
	this.vueInstance = vueInstance;
};

Draggable.prototype.createVueDom = function createVueDom(type) {
	const div = document.createElement('DIV');
	div.setAttribute('draggable', 'true');
	div.setAttribute('module', type);
	div.setAttribute('componentname', new Date().getTime());
	div.style.width = '100%';
	const dom = document.createElement('partial');
	switch (type) {
		case 'grid':
			dom.setAttribute('name', 'red-grid');
			break;
		case 'from':
			dom.setAttribute('name', 'red-from');
			break;
		default:
	}
	div.appendChild(dom);
	this.vueInstance.$compile(div);
	return div;
};

Draggable.prototype.addWidget = function addWidget(vueDom) {
	const type = vueDom.getAttribute('module');
	switch (type) {
		case 'grid':
			this.gridster.add_widget(vueDom, 30, 6, 1, 1);
			break;
		case 'from':
			// this.gridster.add_widget(vueDom, 50, 50, 1, 1);
			break;
		default:
	}
	this.onAddWidgetEnd(vueDom);
};

// 追加
Draggable.prototype.addDrag = function addDrag(dragDom) {
	this.bindDragEvent(dragDom);
};
// 事件钩子
Draggable.prototype.onDragStart = (e) => {};
Draggable.prototype.onDrag = (e) => {};
Draggable.prototype.onDragEnter = (e) => {};
Draggable.prototype.onDragOver = (e) => {};
Draggable.prototype.onDragLeave = (e) => {};
Draggable.prototype.onDrop = (e) => {};
Draggable.prototype.onDragEnd = (e) => {};
Draggable.prototype.onAddWidgetEnd = (dom) => {};