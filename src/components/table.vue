<template>
<div class="row">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th v-for="key in columnsname" class="thead_th" :style="{width:columnswidth[key]}">{{key}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="record in data" @click="rowClick($index)">
                <td class="grid_td" v-for="key in columnskey" v-gridcell="record[key]"></td>
            </tr>
        </tbody>
        <tfoot>
          <tr >
            <td style="width:100px;">
              <div class="dataTables_info">
                第{{pageCurrent+1}} /{{pageTotal}}页 每页{{pagesize}}条/共{{total?total:0}}条记录
              </div>
            </td>  
          </tr>
          <tr>
            <td style="width:500px;">
                <ul class="pagination">
                    <li v-on:click="clickToPrev()" v-show="isshow" class="paginate_button previous">
                        <a>上一页</a>
                    </li>
                    <li v-on:click="clickToPage(index+startnums-1)" v-for="index in shownums" class="paginate_button">
                        <a id="clickToPage_{{$index}}" :class="{paginate_active:activePage==index}">{{index+startnums}}</a></li>
                        <li v-on:click="clickToNext()" v-show="isshow" class="paginate_button next ">
                            <a>下一页</a>
                    </li>
                </ul>
            </td>
           </tr>
        </tfoot>
    </table>
</div>
</template>
<script type="text/ecmascript-6">
    module.exports = {
        props: ['data', 'url', 'total', 'pagesize', 'columns'],
        inherit: true,
        data() {
            var isshow = true;
            var shownums = 10;
            var pagesize = this.pagesize ? this.pagesize : 10;
            var pagesizetotal = this.getpagenationsize(this.total ? this.total : this.data.length, pagesize);
            if (pagesizetotal <= 10) {
                isshow = false;
                shownums = pagesizetotal;
            }
            var columnObject = this.translateColumns(this.columns);
            return {
                columnsname: columnObject[0],
                columnskey: columnObject[1],
                columnsrender: columnObject[2],
                columnswidth: columnObject[3],
                isshow: isshow,
                startnums: 1,
                shownums: shownums,
                rownumstart: 0,
                rownumend: 0,
                pageCurrent: 0,
                activePage: 0
            };
        },
        computed: {
            pageTotal: {
                get() {
                    return this.getpagenationsize(this.total, this.pagesize);
                }
            }
        },
        watch: {
            data(values) {
               this.renderHtml(values);
            },
            columns(value) {
                const columnObject = this.translateColumns(value);
                this.columnsname = columnObject[0];
                this.columnskey = columnObject[1];
                this.columnsrender = columnObject[2];
                this.columnswidth = columnObject[3];
            },
            total(value) {
                let pagesize = this.pagesize ? this.pagesize : 10;
                let pagesizetotal = this.getpagenationsize(value ? value : this.total, pagesize);
                if (pagesizetotal <= 10) {
                    this.isshow = false;
                    this.shownums = pagesizetotal;
                } else {
                    this.shownums = 10;
                    this.isshow = true;
                }
                this.pageCurrent = 0;
            }
        },
        directives: {
            gridcell(html) {
                let cell = document.createElement('DIV');
                cell.innerHTML = html;
                this.vm.$compile(cell);
                this.el.innerHTML = '';
                this.el.appendChild(cell);
            }
        },
        compiled(){
            this.renderHtml(this.data);
        },
        methods: {
            renderHtml(values) {
               values.forEach((value) => {
                    Object.keys(this.columnsrender).forEach((key) => {
                        if(this.columnsrender[key]){
                          value[key] = this.columnsrender[key](value[key]);
                        }
                    });
                });
            },
            clickToPage(index) {
                var arr = [];
                this.activePage = index - this.startnums + 1;
                var params = this.$parent.params ? this.$parent.params : {};
                for (var name in params) {
                    arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(params[name]));
                }
                var url = this.$parent.url + '?start=' + index * (this.pagesize ? this.pagesize : 10) + '&limit=' + this.pagesize;
                if (arr.length > 0) {
                    url = url + "&" + arr.join("&");
                }
                this.rownumstart = index * (this.pagesize ? this.pagesize : 10);
                this.rownumend = parseInt((index + 1) * this.pagesize);
                this.pageCurrent = index;
                var self = this;
                this.$http.post(url, function(data) {
                    if (data.code == 100) {
                        self.$parent.gridData = data.data.records;
                    }
                });
            },
            clickToNext() {
                var nextPageIndex = this.startnums + 10;
                var pagesizetotal = this.getpagenationsize(this.total, this.pagesize);
                if (nextPageIndex <= pagesizetotal) {
                    if ((nextPageIndex + 10) >= pagesizetotal) {
                        this.startnums = nextPageIndex;
                        this.shownums = pagesizetotal - this.startnums + 1;
                    } else {
                        this.startnums = nextPageIndex;
                        this.shownums = 10;
                    }
                    this.clickToPage(nextPageIndex - 1);
                }
            },
            clickToPrev() {
                var prevPageIndex = this.startnums - 10;
                if (prevPageIndex >= 0) {
                    this.shownums = 10;
                    this.startnums = prevPageIndex;
                    this.clickToPage(prevPageIndex - 1);
                }
            },
            getpagenationsize(total, pagesize) {
                if (!total) {
                    return 1;
                }
                if (total <= pagesize) {
                    return 1;
                }
                if (parseInt(total % pagesize) == 0) {
                    return parseInt(total / pagesize);
                } else {
                    return parseInt(total / pagesize) + 1;
                }
            },
            translateColumns(columnsMap) {
                var columnsname = [];
                var columnskey = [];
                var columnsrender = {};
                var columnswidth={};
                for (var key in columnsMap) {
                    if (typeof(columnsMap[key]) === 'string') {
                        columnsname.push(columnsMap[key]);
                        columnswidth[key]='100px';
                    } else {
                        columnsname.push(columnsMap[key].text);
                        columnsrender[key] = columnsMap[key].render;
                        columnswidth[columnsMap[key].text]=columnsMap[key].width;
                    }
                    columnskey.push(key);
                }
                return [columnsname, columnskey, columnsrender, columnswidth];
            },
            rowClick(index) {
                if (this.$parent.rowClick && this.$isFunc(this.$parent.rowClick)) {
                    this.$parent.rowClick(index);
                }
            },
            edit() {
                if (this.$parent.edit && this.$isFunc(this.$parent.edit)) {
                    this.$parent.edit.apply(this, arguments);
                }
            },
            add() {
                if (this.$parent.add && this.$isFunc(this.$parent.add)) {
                    this.$parent.add.apply(this, arguments);
                }
            },
            del() {
                if (this.$parent.del && this.$isFunc(this.$parent.del)) {
                    this.$parent.del.apply(this, arguments);
                }
            },
            custome() {
                if (this.$parent.custome && this.$isFunc(this.$parent.custome)) {
                    this.$parent.custome.apply(this, arguments);
                }
            }
        }
    }
</script>
<style type="text/css">
    .dataTables_info{
       margin-top: 20px;
    }
    .thead_th{
        text-align: center;
    }
    .paginate_active{
      border: 1px red solid!important;
      border-radius: 5px;
      z-index: 2;
    }
</style>
