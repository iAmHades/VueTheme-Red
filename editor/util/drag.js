function Draggable(dragEl, dropEl, options) {
	// 被拖拽元素
	this.dragEl = dragEl;
	// 被拖拽进的区域元素
	this.dropEl = dropEl;
	this.defaults = {
		dragImage: '', // 拖拽元素跟随鼠标移动的模型
		dragText: '',
		effectAllowed: 'move',
		shadowClass: 'shadow', // 当前目标区域中的拖拽对象的投影样式
		dragDomWidth: 0, // 当前拖拽元素的宽度
		dragDomHeight: 0, // 当前拖拽元素的高度
		currentX: 0, // 当前dragEl的坐标
		currentY: 0
	};
	this.options = this.extend(this.defaults, options);
	// 初始化
	this.init();
}

Draggable.prototype.extend = (source, target) => {
	Object.keys(target).forEach((key) => {
		source[key] = target[key];
	});
	return source;
};

Draggable.prototype.init = () => {

};

// 被拖拽元素进入指定区域后的背景阴影
Draggable.prototype.createShadow = (x, y) => {
	let shadow = this.dropEl.querySelector('.' + this.options.shadowClass);
	if (shadow) {
		shadow.style.top = this.computedY(y) + 'px';
		// 修正位置
		shadow.style.left = this.computedX(x) + 'px';
	} else {
		shadow = document.createElement('DIV');
		shadow.style.width = this.options.dragDomWidth + 'px';
		shadow.style.height = this.options.dragDomHeight + 'px';
		shadow.style.top = this.computedY(y) + 'px';
		shadow.style.left = this.computedX(x) + 'px';
		// shadow.style.backgroundColor = 'red';
		shadow.style.border = '1px red solid';
		shadow.style.position = 'absolute';
		shadow.className = this.options.shadowClass;
		return shadow;
	}
};

// 纠正X坐标
Draggable.prototype.computedX = (x) => (x - 230);
// 纠正Y坐标
Draggable.prototype.computedY = (y) => y;

Draggable.prototype.throttle = (fn, delay) => {
	let timer = null;
	return () => {
		const context = this;
		const args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, delay);
	};
};

// 绑定事件
// dragstart(drag元素) -> drag(drag元素) -> dragenter(drop元素) -> dragover(drop元素) -> dragleave(drop元素) -> drop(drop元素) -> dragend(drag元素)
Draggable.prototype.bindEvent = () => {
	// 拖放事件开始时触发，可以指定拖动的动画
	this.dragEl.addEventListener('ondragstart', (e) => {
		e.dataTransfer.effectAllowed = this.options.effectAllowed;
		e.dataTransfer.setData('text', e.target.innerHTML);
		e.dataTransfer.setDragImage(this.options.dragImage ? this.options.dragImage : e.target, 0, 0);
		this.onDragStart(e);
		return true;
	});
	// ondragstart 事件触发后，直到拖放事件结束，会一直触发 ondrag 事件
	this.dragEl.addEventListener('ondrag', (e) => {
		this.throttle(() => {
			this.onDrag(e);
		}, 1000);
	});
	// 当被拖动元素进入可放置的元素时
	this.dropEl.addEventListener('ondragenter', (e) => {
		this.onDragEnter(e);
	});
	// 当被拖拽元素在目标元素上移动时
	this.dropEl.addEventListener('ondragover', (e) => {
		this.throttle(() => {
			const shadow = this.createShadow(e.clientX, e.clientY);
			if (shadow) {
				this.dropEl.appendChild(shadow);
			}
			this.onDragOver(e);
		}, 1000);
		e.preventDefault();
		return true;
	});
	// 当被拖动元素离开可放置元素的一瞬间
	this.dropEl.addEventListener('ondragleave', (e) => {
		this.onDragLeave(e);
	});
	// 松开鼠标并且被拖拽元素正好在可放置元素上时
	this.dropEl.addEventListener('ondrop', (e) => {
		this.onDrop(e);
	});
	// 拖拽结束，去掉shadow，同时将拖拽目标移动到新的位置
	this.dragEl.addEventListener('ondragend', (e) => {
		e.dataTransfer.clearData('text');
		const shadow = this.dropEl.querySelector('.' + this.options.shadowClass);
		this.dragEl.style.left = this.options.currentX;
		this.dragEl.style.top = this.options.currentY;
		this.dragEl.style.position = 'absolute';
		this.dragEl.style.width = '100%';
		shadow.remove();
		this.onDragEnd(e);
		return false;
	});

};


// 事件钩子
Draggable.prototype.onDragStart = (e) => {};
Draggable.prototype.onDrag = (e) => {};
Draggable.prototype.onDragEnter = (e) => {};
Draggable.prototype.onDragOver = (e) => {};
Draggable.prototype.onDragLeave = (e) => {};
Draggable.prototype.onDrop = (e) => {};
Draggable.prototype.onDragEnd = (e) => {};