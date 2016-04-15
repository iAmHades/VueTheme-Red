import menu from '../service/menu'

export const getMenus = ({ dispatch, state }, userType) => {
  menu.getMenus(
    userType, (menus) => dispatch('getMenus', menus)
  )
}