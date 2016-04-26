/**
 * Mocking client-server processing
 */
const imgblog = [{
  _id: 'xxx',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  key: 'BRANDING',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '2123',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  key: 'BRANDING',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '41241',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  key: 'DEVELOPMENT',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '234234',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  key: 'PRINT',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}, {
  _id: '32423',
  url: 'http://www.baidu.com',
  pic: 'http://temp.im/300x300',
  title: 'xxxxxxxx',
  key: 'DESIGN',
  desc: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
  createDate: '2015-05-14'
}];

export default {
  getInitImgBlogs(cb) {
    setTimeout(() => cb(imgblog), 100);
  }
};