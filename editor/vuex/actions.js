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