const state = {
	menus: []
};

// mutations
const mutations = {
	getMenus(allState, menus) {
		allState.menus = menus;
	}
};

export default {
	state,
	mutations
};