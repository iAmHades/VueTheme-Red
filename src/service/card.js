/**
 * Mocking client-server processing
 */
const cards = [{
  _id: 'xxx',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '2123',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '41241',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '234234',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '32423',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}];

export default {
  getInitCard(cb) {
    setTimeout(() => cb(cards), 100);
  },
};