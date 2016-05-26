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
  url: '#'
}, {
  id: 3,
  text: 'Admin',
  url: '/admin'
}, {
  id: 4,
  text: 'Components',
  url: '#',
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
  url: '/admin/layout'
}, {
  id: 2,
  text: 'Form',
  url: '/admin/form'
}, {
  id: 3,
  text: 'Table',
  url: '/admin/table'
}, {
  id: 4,
  text: 'Modal',
  url: '/admin/modal'
}, {
  id: 5,
  text: 'Carousel',
  url: '/admin/carousel'
}, {
  id: 6,
  text: 'Thumbnail',
  url: '/admin/thumbnail'
}, {
  id: 6,
  text: 'Tao',
  url: '/admin/tao'
}, {
  id: 7,
  text: 'Progress',
  url: '/admin/progress'
}, {
  id: 8,
  text: 'Switchs',
  url: '/admin/switchs'
}, {
  id: 9,
  text: 'ScrollMonitor',
  url: '/admin/scrollmonitor'
}, {
  id: 10,
  text: 'lazyLoad',
  url: '/admin/lazyLoad'
}, {
  text: 'Datepicker',
  url: '/admin/datepicker'
}, {
  id: 6,
  text: 'Dropdown',
  url: '/admin/dropdown'
}, {
  id: 7,
  text: 'Upload',
  url: '/admin/upload'
}];
const custommenu = [{
  id: 1,
  text: '服装',
  childItem: [{
    id: 11,
    text: '男装',
    subItems: [{
      id: 111,
      text: '西装'
    }]
  }, {
    id: 12,
    text: '女装',
    subItems: [{
      id: 111,
      text: '西装'
    }]
  }]
}, {
  id: 1,
  text: '烟酒',
  childItem: [{
    id: 11,
    text: '名烟',
    subItems: [{
      id: 111,
      text: '黑兰州'
    }]
  }, {
    id: 12,
    text: '名酒',
    subItems: [{
      id: 111,
      text: '女儿红'
    }, {
      id: 111,
      text: '竹叶青'
    }, {
      id: 111,
      text: '女儿红'
    }, {
      id: 111,
      text: '竹叶青'
    }, {
      id: 111,
      text: '女儿红'
    }, {
      id: 111,
      text: '竹叶青'
    }, {
      id: 111,
      text: '女儿红'
    }, {
      id: 111,
      text: '竹叶青'
    }]
  }]
}, {
  id: 1,
  text: '箱包',
  childItem: [{
    id: 11,
    text: '旅行箱',
    subItems: [{
      id: 111,
      text: '万向轮'
    }, {
      id: 111,
      text: '登机箱'
    }]
  }, {
    id: 12,
    text: '双肩包',
    subItems: [{
      id: 121,
      text: '小米双肩包'
    }, {
      id: 121,
      text: '瑞士军刀'
    }]
  }]
}, {
  id: 1,
  text: '家电',
  childItem: [{
    id: 11,
    text: '彩电',
    subItems: [{
      id: 111,
      text: 'TCL'
    }]
  }, {
    id: 11,
    text: '洗衣机',
    subItems: [{
      id: 111,
      text: '海尔'
    }]
  }, {
    id: 12,
    text: '冰箱',
    subItems: [{
      id: 111,
      text: '雪雪'
    }]
  }]
}, {
  id: 2,
  text: '鞋子',
  childItem: [{
    id: 21,
    text: '男鞋',
    subItems: [{
      id: 111,
      text: '西装'
    }]
  }, {
    id: 22,
    text: '女鞋',
    subItems: [{
      id: 111,
      text: '西装'
    }]
  }]
}, {
  id: 3,
  text: '数码',
  childItem: [{
    id: 31,
    text: '笔记本',
    subItems: [{
      id: 111,
      text: '西装'
    }, {
      id: 111,
      text: '西装'
    }]
  }, {
    id: 32,
    text: '一体机',
    subItems: [{
      id: 111,
      text: '西装'
    }]
  }]
}, {
  id: 3,
  text: '娱乐',
  childItem: [{
    id: 31,
    text: '电影',
    subItems: [{
      id: 111,
      text: '电影院'
    }, {
      id: 111,
      text: '电影票'
    }]
  }, {
    id: 32,
    text: '游戏',
    subItems: [{
      id: 111,
      text: 'LOL'
    }, {
      id: 111,
      text: 'WOW'
    }, {
      id: 111,
      text: 'DNF'
    }, {
      id: 111,
      text: 'CF'
    }]
  }]
}, {
  id: 3,
  text: '珠宝',
  childItem: [{
    id: 31,
    text: '项链',
    subItems: [{
      id: 111,
      text: '珍珠'
    }, {
      id: 111,
      text: '玛瑙'
    }]
  }, {
    id: 32,
    text: '戒指',
    subItems: [{
      id: 111,
      text: '扳指'
    }, {
      id: 111,
      text: '指环'
    }, {
      id: 111,
      text: '对戒'
    }, {
      id: 111,
      text: '扳指'
    }, {
      id: 111,
      text: '指环'
    }, {
      id: 111,
      text: '对戒'
    }]
  }]
}, {
  id:9,
  text:'ScrollMonitor',
  url:'/admin/scrollmonitor'
}, {
  id:10,
  text:'lazyLoad',
  url:'/admin/lazyLoad'
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
    }
};