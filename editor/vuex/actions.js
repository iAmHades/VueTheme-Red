import service from './service';

export const getMenus = ({
	dispatch,
	state
}) => {
	service.getMenus(menus => dispatch('getMenus', menus));
};

export const getComponentMenus = ({
	dispatch,
	state
}) => {
	service.getComponentMenus(
		menus => dispatch('getComponentMenus', menus)
	);
};

// 设置渲染对象属性
// 设置布局
export const setRenderLayout = ({
	dispatch,
	state
}, type) => {
	service.setRenderLayout(type, menus => dispatch('setRenderLayout', type));
};

// ‘custome’前缀的为生成的组件的状态
export const updateCustomeMenus = ({
	dispatch,
	state
}, editData, actionType) => {
	service.updateCustomeMenus(editData, actionType, () => dispatch('updateCustomeMenus', editData, actionType));
};