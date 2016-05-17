const state = {
	menus: [],
	leftmenus: [],
  custommenus: []
};

// mutations
const mutations = {
	getMenus(allState, menus) {
		allState.menus = menus;
	},
	getLeftMenus(allState, menus) {
		allState.leftmenus = menus;
	},
  getCustomMenus(allState, menus) {
    allState.custommenus = menus;
  }

};

export default {
	state,
	mutations
};
