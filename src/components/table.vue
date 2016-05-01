<template>
<div class="row" draggable="true">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th v-for="key in columnsname" class="thead_th">{{key}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="record in data" @click="rowClick($index)">
                <td class="grid_td" v-for="key in columnskey" v-gridcell="record[key]"></td>
            </tr>
        </tbody>
        <tfoot>
          <tr class="col-xs-3">
            <td>
              <div class="dataTables_info">
                第{{pageCurrent+1}} /{{pageTotal}}页 每页{{pagesize}}条/共{{total?total:0}}条记录
              </div>
            </td>  
          </tr>
          <tr class="col-xs-8">
            <td>
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
            var pagesizetotal = this.getpagenationsize(this.total?this.total:this.data.length, pagesize);
            if (pagesizetotal <= 10) {
                isshow = false;
                shownums = pagesizetotal;
            }
            var columnObject = this.translateColumns(this.columns);
            return {
                columnsname: columnObject[0],
                columnskey: columnObject[1],
                isshow: isshow,
                startnums: 1,
                shownums: shownums,
                rownumstart: 0,
                rownumend: 0,
                pageCurrent: 0,
                showProAndShopState: this.$parent.showProAndShopState,
                showProductThead: this.$parent.showProductThead,
                isTicketDetail: this.$parent.isTicketDetail,
                activePage:0
            };
        },
        computed: {
            columns: {
                get: function() {
                    return this.$parent.columns;
                },
                set: function(newValue) {
                    var columnObject = this.translateColumns(newValue);
                    this.columnsname = columnObject[0];
                    this.columnskey = columnObject[1];
                }
            },
            total: {
                get: function() {
                    return this.$parent.total;
                },
                set: function(newValue) {
                    var pagesize = this.pagesize ? this.pagesize : 10;
                    var pagesizetotal = this.getpagenationsize(newValue ? newValue : this.total, pagesize);
                    if (pagesizetotal <= 10) {
                        this.isshow = false;
                        this.shownums = pagesizetotal;
                    } else {
                        this.shownums = 10;
                        this.isshow = true;
                    }
                    let self = this;
                    self.pageCurrent = 0;
                }
            },
            pageTotal: {
                get: function() {
                    return this.getpagenationsize(this.total, this.pagesize);
                }
            }
        },
        directives: {
            'gridcell': function(html) {
                var cell = document.createElement('DIV');
                cell.innerHTML = html;
                this.vm.$compile(cell);
                this.el.innerHTML = '';
                this.el.appendChild(cell);
            }
        },
        methods: {
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
                        if (self.$parent.translateHtml) {
                            if (!self.$parent.isTicketDetail) {
                                self.$parent.translateHtml(data.data.records, data.data.start);
                            } else {
                                self.$parent.translateHtml(data.data, data.start);
                            }
                        }
                        if (!self.$parent.isTicketDetail) {
                            self.$parent.gridData = data.data.records;
                        } else {
                            self.$parent.gridData = data.data;

                        }
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
                for (var key in columnsMap) {
                    columnsname.push(columnsMap[key]);
                    columnskey.push(key);
                }
                return [columnsname, columnskey];
            },
            rowClick(index) {
                if (this.$parent.rowClick && this.$isFunc(this.$parent.rowClick)) {
                    this.$parent.rowClick(index);
                }
            },
            edit(id) {
                if (this.$parent.edit && this.$isFunc(this.$parent.edit)) {
                    this.$parent.edit(id);
                }
            },
            add(id) {
                if (this.$parent.add && this.$isFunc(this.$parent.add)) {
                    this.$parent.add(id);
                }
            },
            del(id) {
                if (this.$parent.del && this.$isFunc(this.$parent.del)) {
                    this.$parent.del(id);
                }
            },
            custome(id) {
                if (this.$parent.custome && this.$isFunc(this.$parent.custome)) {
                    this.$parent.custome(id);
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
