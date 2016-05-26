<!-- 搜索组件
Taoxin   2016-05-19
 -->

 <template>
     <div class="search-bar">
        <div class="dropdown-search-bar">
        <nav role="navigation">
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a tabindex="-1" data-toggle="tab">Home</a></li>
          <li role="presentation"><a tabindex="-1" data-toggle="tab">Profile</a></li>
          <li role="presentation"><a tabindex="-1" data-toggle="tab">Messages</a></li>
        </ul>
        </nav>
    </div>
    <input class="form-control input-search-bar" />
    <button class="btn-search-bar">搜索</button>
    </div>
 </template>
<script>
  module.exports = {
    props: {
      value: {
        type: String,
        required: false,
        twoWay: false
      },
      placeholder: {
        type: String,
        required: false,
        twoWay: false
      },
      disabled: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      type: {
        type: String,
        required: false,
        twoWay: false
      },
      lazy: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      number: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      debounce: {
        type: Number,
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
 </style>

