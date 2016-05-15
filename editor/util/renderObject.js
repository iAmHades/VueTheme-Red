/**
 *  页面信息,其中component为对象,包含名称'name'和组件类型'type'
 **/
export const Page = function Page(component) {
	this.components = [];
	if (Array.isArray(component)) {
		this.components = this.components.concat(component);
	} else {
		if (component&& typeof(component) ==='object') {
			this.components.push(component);
		}
	}
};

Page.prototype.addComponent = function addComponent(component) {
	if (Array.isArray(component)) {
		this.components = this.components.concat(component);
	} else {
		this.components.push(component);
	}
};

/**
 *  渲染信息对象，页面布局转换成该对象进行保存，同时其可以逆向成页面布局。
 **/
export const RenderObject = function RenderObject(options) {
	// 布局类型
	this.layoutType = 'left';
	// 菜单数据
	this.menus = [];
	// 页面对象，以菜单id为key，page为value。
	this.pages = {};
	if (options && options.layoutType) {
		this.layoutType = options.layoutType;
	}
	if (options && options.menus) {
		this.menus = options.menus;
	}
	if (options && options.pages) {
		this.pages = options.pages;
	}
};

RenderObject.prototype.addMenu = function addMenu(menu) {
	this.menus.push(menu);
};

RenderObject.prototype.addPage = function addPage(menuid, page) {
	if (page instanceof Page) {
		this.pages[menuid] = page;
	} else {
		throw new Error('this is not PageInfo Object.');
	}
};

// 删除菜单的时候，会把其下对应的page数据一起删除
RenderObject.prototype.removeMenu = function removeMenu(menuid) {
	delete this.pages[menuid];
	for (let i = 0; i < this.menus.length; i++) {
		if (this.menus[i].menuid === menuid) {
			this.menus.splice(i, 1);
		}
	}
};

/**
 *  组件的位置信息
 **/
function Position() {

}