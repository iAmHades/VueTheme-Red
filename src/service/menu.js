/**
 * Mocking client-server processing
 */
const menu = [{
  id: 1,
  text: ' Home Pages',
  url: '/'
}, {
  id: 2,
  text: 'Pages',
}, {
  id: 3,
  text: 'Admin',
  url: '/admin'
}, {
  id: 4,
  text: 'Components',
  child: [{
    id: 41,
    text: 'from'
  }, {
    id: 42,
    text: 'table'
  }, {
    id: 43,
    text: 'tab'
  }, {
    id: 43,
    text: 'modal'
  }]
}, {
  id: 5,
  text: 'Menu',
  url: '/custommenu'
}];

const leftmenu = [{
  id: 1,
  text: 'Layout',
  url: '#/admin/layout'
}, {
  id: 2,
  text: 'Form',
  url: '#/admin/form'
}, {
  id: 3,
  text: 'Table',
  url: '#/admin/table'
}, {
  id: 4,
  text: 'Modal',
  url: '#/admin/modal'
}, {
  id: 5,
  text: 'Datepicker',
  url: '#/admin/datepicker'
}];
const custommenu =[{
  id:1,
  text:'服装',
  childItem:[{
    id:11,
    text:'男装'
  }, {
    id:12,
    text:'女装'
  }]
}, {
  id:2,
  text:'鞋子',
  childItem:[{
    id:21,
    text:'男鞋'
  }, {
    id:22,
    text:'女鞋'
  }]
}, {
  id:3,
  text:'数码',
  childItem:[{
    id:31,
    text:'笔记本'
  }, {
    id:32,
    text:'一体机'
  }]
}];

export default {
  getMenus(userType, cb) {
    setTimeout(() => cb(menu), 100);
  },
  getLeftMenus(userType, cb) {
    cb(leftmenu);
  },
  getCustomMenus(userType, cb) {
    setTimeout(() => cb(custommenu), 100);
  },
};
