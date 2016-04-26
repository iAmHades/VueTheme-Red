const state = {
	menus: [],
	leftmenus: []
};

// mutations
const mutations = {
	getMenus(allState, menus) {
		allState.menus = menus;
	},
	getLeftMenus(allState, menus) {
		allState.leftmenus = menus;
	}
};

export default {
	state,
	mutations
};