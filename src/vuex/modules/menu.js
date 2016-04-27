const state = {
	menus: [],
	leftmenus: [],
	childmenus:[]
};

// mutations
const mutations = {
	getMenus(allState, menus) {
		allState.menus = menus;
	},
	getLeftMenus(allState, menus) {
		allState.leftmenus = menus;
	},
	getChildMenus(allState, menus){
		allState.childmenus = menus;
	}
};

export default {
	state,
	mutations
};