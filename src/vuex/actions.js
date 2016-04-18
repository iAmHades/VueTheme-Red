import menu from '../service/menu'
import category from '../service/category'

export const getMenus = ({ dispatch, state }, userType) => {
  menu.getMenus(
    userType, (menus) => dispatch('getMenus', menus)
  )
}

export const getCategory = ({ dispatch, state }) => {
  category.getCategory(
  (category) => dispatch('getCategory', category)
  )
}