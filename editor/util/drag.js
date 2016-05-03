/**
 *  dragEls Object 对象
 *  dom  需要被拖动的document对象
 *  elementType 指定拖拽的阴影图像显示类型，默认是不需要设置的，可用来区分是否来源左侧菜单。
 **/

function Draggable(dragEls, dropEl, options) {
	this.dragEls = [];
	// 被拖拽元素
	// 多个
	if (Array.isArray(dragEls)) {
		dragEls.forEach((object) => {
			// 指定左侧菜单ui的类型
			object.dom.elementType = object.elementType;
			this.dragEls.push(object.dom);
		});
		// 单个
	} else {
		// dragEls.dom.elementType = dragEls.elementType;
		// dragEls.dom.notCreate = true;
		this.dragEls.push(dragEls);
	}
	// 被拖拽进的区域元素
	this.dropEl = dropEl;
	this.defaults = {
		dragImage: '', // 拖拽元素跟随鼠标移动的模型
		dragText: '',
		effectAllowed: 'move',
		shadowClass: 'shadow', // 当前目标区域中的拖拽对象的投影样式
		dragDomWidth: 0, // 当前拖拽元素的宽度
		dragDomHeight: 0 // 当前拖拽元素的高度
	};
	this.dragTimer = null;
	this.dropTimer = null;
	this.options = this.extend(this.defaults, options);
	// 父级关系不同，起offeset位置也不同，默认为left_container层级开始计算
	this.fixedLeft = dropEl.offsetParent.offsetLeft;
	this.fixedHeight = 0;
	// 当前dragEl的坐标
	this.currentX = 0;
	this.currentY = 0;
	this.vueInstance = null;
	this.state = 'init';
	// 初始化
	this.init();
}
window.Draggable = Draggable;

// 绑定事件
// dragstart(drag元素) -> drag(drag元素) -> dragenter(drop元素) -> dragover(drop元素) -> dragleave(drop元素) -> drop(drop元素) -> dragend(drag元素)
Draggable.prototype.bindEvent = function() {
	// 被拖拽的元素可以是多个，但是目标只能为一个。
	for (let i = 0; i < this.dragEls.length; i++) {
		const dragEl = this.dragEls[i];
		this.bindDragEvent(dragEl);
	}
	this.bindDropEvent();
};

// 被拖拽产品
Draggable.prototype.bindDragEvent = function(dragEl) {
	dragEl.addEventListener('dragstart', (e) => {
		this.state = 'dragstart';
		const type = dragEl.elementType;
		const dom = this.createDragImage(type, e.target);
		this.setDragWH(type, dom, e.target);
		e.dataTransfer.effectAllowed = this.options.effectAllowed;
		e.dataTransfer.setData('text', dom.innerHTML);
		e.dataTransfer.setDragImage(dom, 0, 0);
		this.onDragStart(e);
	});
	// ondragstart 事件触发后，直到拖放事件结束，会一直触发 ondrag 事件
	dragEl.addEventListener('drag', (e) => {
		this.state = 'drag';
		this.dragThrottle(() => {
			this.onDrag(e);
		}, 100);
	});
	// 拖拽结束，去掉shadow，同时将拖拽目标移动到新的位置
	dragEl.addEventListener('dragend', (e) => {
		this.state = 'dragend';
		clearTimeout(this.dropTimer);
		e.dataTransfer.clearData('text');
		const shadow = this.dropEl.querySelector('.' + this.options.shadowClass);
		if (shadow) {
			shadow.remove();
		}
		this.dragElMove(e);
		this.onDragEnd(e);
	});
};

// 拖拽到的目标
Draggable.prototype.bindDropEvent = function() {
	// 当被拖动元素进入可放置的元素时
	this.dropEl.addEventListener('dragenter', (e) => {
		this.state = 'dragenter';
		this.onDragEnter(e);
	});
	// 当被拖拽元素在目标元素上移动时
	this.dropEl.addEventListener('dragover', (e) => {
		this.state = 'dragover';
		this.currentX = e.clientX;
		this.currentY = e.clientY;
		this.dropThrottle(() => {
			const shadow = this.createShadow();
			if (shadow) {
				this.dropEl.appendChild(shadow);
			}
			this.onDragOver(e);
		}, 100);
		e.preventDefault();
	});
	// 当被拖动元素离开可放置元素的一瞬间
	this.dropEl.addEventListener('dragleave', (e) => {
		this.state = 'dragleave';
		this.onDragLeave(e);
	});
	// 松开鼠标并且被拖拽元素正好在可放置元素上时
	this.dropEl.addEventListener('drop', (e) => {
		this.state = 'drop';
		this.onDrop(e);
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

// 被拖拽元素进入指定区域后的背景阴影
Draggable.prototype.createShadow = function() {
	// this.currentX = this.computedY(x);
	// this.currentY = this.computedY(y);
	if (this.state !== 'dragend') {
		let shadow = this.dropEl.querySelector('.' + this.options.shadowClass);
		if (shadow) {
			shadow.style.top = this.computedY(this.currentY) + 'px';
			// 修正位置
			shadow.style.left = this.computedX(this.currentX) + 'px';
		} else {
			shadow = document.createElement('DIV');
			// 如果有引入样式，则用样式，不用默认的
			shadow.style.width = this.options.dragDomWidth + 'px';
			shadow.style.height = this.options.dragDomHeight + 'px';
			shadow.style.top = this.computedY(this.currentY) + 'px';
			shadow.style.left = this.computedX(this.currentX) + 'px';
			// shadow.style.backgroundColor = 'red';
			shadow.style.border = '1px red solid';
			shadow.style.position = 'absolute';
			shadow.className = this.options.shadowClass;
			return shadow;
		}
	}
};

Draggable.prototype.createDragImage = function(type, dragDom) {
	if (!type) return dragDom;
	const dom = document.createElement("img");
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

// 纠正X坐标
Draggable.prototype.computedX = function(x) {
	return (x - this.fixedLeft);
};
// 纠正Y坐标
Draggable.prototype.computedY = function(y) {
	return y;
};

Draggable.prototype.dragThrottle = function(fn, delay) {
	if (!this.dragTimer) {
		this.dragTimer = setTimeout(() => {
			fn.apply(this);
			clearTimeout(this.dragTimer);
			this.dragTimer = null;
		}, delay);
	}
};
Draggable.prototype.dropThrottle = function(fn, delay) {
	if (!this.dropTimer) {
		this.dropTimer = setTimeout(() => {
			fn.apply(this);
			clearTimeout(this.dropTimer);
			this.dropTimer = null;
		}, delay);
	}
};

Draggable.prototype.dragElMove = function(e) {
	const dragEl = e.target;
	// 左侧菜单元素，不需要移动位置
	if (!dragEl.elementType) {
		// 父级关系不同，起offeset位置也不同，默认为left_container层级开始计算
		dragEl.style.left = this.computedX(this.currentX) + 'px';
		dragEl.style.top = this.computedY(this.currentY) + 'px';
		dragEl.style.position = 'absolute';
		dragEl.style.width = '100%';
		// 而是要构建新的vue组件出来。
	} else {
		if (this.vueInstance) {
			this.dropEl.appendChild(this.createVueDom(dragEl.elementType));
		}
	}
};

// 如果需要vue的编译，则注入
Draggable.prototype.initVue = function(vueInstance) {
	this.vueInstance = vueInstance;
};

Draggable.prototype.createVueDom = function(type) {
	const div = document.createElement('DIV');
	div.setAttribute('draggable', 'true');
	div.setAttribute('module', type);
	const dom = document.createElement('partial');
	switch (type) {
		case 'grid':
			dom.setAttribute('name', 'red-grid');
			break;
		case 'from':
			dom.setAttribute('name', 'red-grid');
			break;
		case 'menu':
			dom.setAttribute('name', 'red-grid');
			break;
		default:
	}
	div.appendChild(dom);
	this.vueInstance.$compile(div);
	this.addDrag(div);
	return div;
};

// 设置被拖动元素的宽高
Draggable.prototype.setDragWH = function(type, createDom, dragDom) {
	if (!type) {
		this.options.dragDomWidth = dragDom.offsetWidth;
		this.options.dragDomHeight = dragDom.offsetHeight;
	} else {
		this.options.dragDomWidth = parseInt(createDom.style.width.replace('px', ''), 10);
		this.options.dragDomHeight = parseInt(createDom.style.height.replace('px', ''), 10);
	}
};

// 追加
Draggable.prototype.addDrag = function(dragDom) {
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