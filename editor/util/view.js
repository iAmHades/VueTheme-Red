/**
 *  视图切换的渲染和解析
 **/

function View(type) {
	this.components = [];

}

View.prototype.editForm = function(dom) {

};

View.prototype.editMenu = function(dom) {

};

export const parseHtmlToComponent = function parseHtmlToComponent(dom) {
	const comps = dom.children;
	const components = [];
	for (let i = 0; i < comps.length; i++) {
		components.push({
			name: comps[i].getAttribute('componentname'),
			type: comps[i].getAttribute('module'),
			x: comps[i].getAttribute('data-col'),
			y: comps[i].getAttribute('data-row'),
			width: comps[i].getAttribute('data-sizex'),
			height: comps[i].getAttribute('data-sizey')
		});
	}
	return components;
};

// draggable对象，gridster对象
export const compiledComponentToHtml = function compiledComponentToHtml(components, draggable, gridster) {
	for (let i = 0; i < components.length; i++) {
		const vueDom = draggable.createVueDom(components[i].type);
		console.info('vueDom');
		// gridster.add_widget(vueDom, components[i].width, components[i].height, components[i].x, components[i].y);
		draggable.addWidget(vueDom, components[i].width, components[i].height, 1, 1);
	}
};