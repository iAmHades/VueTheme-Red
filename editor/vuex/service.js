/**
 *  数据
 *   key:名称
 *   text:显示的名称
 *   type:目录功能类型，分：'layout','back','component'。
 **/
import {
  menuData,
  menuCompData,
  customeMenuData
} from './../util/data';

export default {
  getMenus(cb) {
      cb(menuData);
    },
    getComponentMenus(cb) {
      cb(menuCompData);
    },
    setRenderLayout(type, cb) {
      cb(type);
    },
    updateCustomeMenus(cb) {
      cb();
    },
    updateCustomePages(cb) {
      cb();
    }
};