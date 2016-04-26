const state = {
	card: []
};

// mutations
const mutations = {
	getInitCard(allState, data) {
		allState.card = data;
	}
};

export default {
	state,
	mutations
};