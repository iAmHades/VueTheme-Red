import menu from '../service/menu';
import category from '../service/category';
import imgblog from '../service/imgblog';
import card from '../service/card';

export const getMenus = ({
	dispatch, state
}, userType) => {
	menu.getMenus(
		userType, menus => dispatch('getMenus', menus)
	);
};

export const getLeftMenus = ({
	dispatch, state
}, userType) => {
	menu.getLeftMenus(
		userType, menus => dispatch('getLeftMenus', menus)
	);
};


export const getCategory = ({
	dispatch
}) => {
	category.getCategory(
		categoryData => dispatch('getCategory', categoryData)
	);
};

export const selectCategory = ({
	dispatch
}, key) => {
	category.selectCategory(
		key, categoryData => dispatch('selectCategory', categoryData)
	);
};

export const getInitImgBlogs = ({
	dispatch
}) => {
	imgblog.getInitImgBlogs(
		imgblogData => dispatch('getInitImgBlogs', imgblogData)
	);
};

export const getInitCard = ({
	dispatch
}) => {
	card.getInitCard(
		cardData => dispatch('getInitCard', cardData)
	);
};

export const getCustomMenus = ({
  dispatch, state
  }, userType) => {
  menu.getCustomMenus(
    userType, menus => dispatch('getCustomMenus', menus)
  );
};
