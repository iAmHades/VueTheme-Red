<!-- 搜索组件
Taoxin   2016-05-19
 -->

 <template>
     <div class="search-bar">
        <div class="dropdown-search-bar">
        <nav role="navigation">
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a tabindex="-1" data-toggle="tab">店铺</a></li>
          <li role="presentation"><a tabindex="-1" data-toggle="tab">商品</a></li>
          <!-- <li role="presentation"><a tabindex="-1" data-toggle="tab">shang j</a></li> -->
        </ul>
        </nav>
    </div>
    <input class="form-control input-search-bar" placeholder="🔍" v-model="value"/>
    <button class="btn-search-bar" @click="search">搜索</button>
    </div>
 </template>
<script>
  module.exports = {
    props: {
      value: {
        type: String,
        required: false,
        twoWay: true
      },
      placeholder: {
        type: String,
        required: false,
        twoWay: false
      }
    },
    data() {
      return {
        isactive: false
      };
    },
    compiled(){
    },
    methods: {
      search(){
          this.$parent.search();
      }
    }
  };
</script>

 <style type="text/css">
 .search-bar{
    width: 600px;
    height:200px;
    float: left;
 }
 .dropdown-search-bar{
    float: left;
    width: 400px;
 }
 .btn-search-bar{
    float: left;
    width: 100px;
    height: 35px;

 }
.input-search-bar{
    width: 400px;
    float: left;
    height: 35px;
    border-radius: 0px;
}
.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    outline: none;
    background-color: #eee;
}
.nav>li>a {
    position: relative;
    display: block;
    padding: 4px 15px;
}
.nav-tabs>li {
    float: left;
    margin-bottom: 0px;
    height: 28px;
}


 </style>

