<!-- 分页组件 -->
<template>
	<div class="btn-group pagination" role="group" aria-label="Pagination">
		<button type="button" class="btn btn-secondary {{btnSize}}" v-bind:disabled="currentPage == 1 " v-on:click.prevent="(currentPage == 1) ? return : currentPage--"><span aria-hidden="true">上一页</span></button>
		<button type="button" class="btn  btn-secondary {{btnSize}} {{ currentPage == 1 ?  'active' : '' }}" v-on:click.prevent="currentPage = 1" v-show="showPrev">1</button>
		<span class="btn btn-secondary {{btnSize}}" v-show="showPrev">...</span>
		<button type="button"
		class="btn {{btnSize}} {{btnVariant($index)}} {{ $index + diff == currentPage ? 'active' : '' }} {{ $index + diff != currentPage ? 'hidden-xs-down' : '' }}"
		v-for="item in pageLinks"
		v-on:click.prevent="currentPage = $index + diff">{{$index + diff}}
	</button>
	<span class="btn btn-secondary {{btnSize}}" v-show="showNext">...</span>
	<button type="button" class="btn btn-secondary {{btnSize}} {{ numberOfPages == currentPage ? 'active' : '' }}" v-show="showNext" v-on:click.prevent="currentPage = numberOfPages">{{numberOfPages}}</button>
	<button type="button" class="btn btn-secondary {{btnSize}}" v-bind:disabled="currentPage == numberOfPages" v-on:click.prevent="(currentPage == numberOfPages) ? return : currentPage++"><span aria-hidden="true">下一页</span></button>
</div>
</template>
<script>
	export default {
		props: {
			currentPage: {
				type: Number,
				default: 1,
			},
			limit: {
				type: Number,
				default: 7,
			},
			perPage: {
				type: Number,
				default: 20,
			},
			totalRows: {
				type: Number,
				default: 20,
			},
			size: {
				type: String,
				default: 'secondary',
			},
			variant: {
				type: String,
				default: '',
			},
		},
		replace: true,
		data() {
			return {
				diff: 1,
				showPrev: false,
				showNext: false
			};
		},
		computed: {
			numberOfPages() {
				const result = Math.ceil(this.totalRows / this.perPage);
				return (result < 1) ? 1 : result;
			},
			btnSize() {
				return !this.size || this.size === 'default' ? '' : 'btn-${this.size}';
			},
			pageLinks() {
				let result = this.limit;
				if (this.currentPage > this.numberOfPages) {
					this.currentPage = 1;
				}
				this.diff = 1;
				this.showPrev = false;
				this.showNext = false;
      			if (this.numberOfPages <= this.limit) {
      				return this.numberOfPages;
      			}
      			if (this.currentPage <= this.limit - 2) {
      				this.diff = 1;
      				this.showNext = true;
      				result = this.limit - 2;
      			}

      			if (this.currentPage > this.numberOfPages - this.limit + 2) {
      				this.diff = this.numberOfPages - this.limit + 3;
      				this.showPrev = true;
      				result = this.limit - 2;
      			}
      			if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
      				this.diff = this.currentPage - 1;
      				this.showPrev = true;
      				this.showNext = true;
      				result = this.limit - 4;
      			}
      			return result;
  			},
		},
		methods: {
			btnVariant(index) {
				return (index + this.diff === this.currentPage) ? 'btn-${this.variant}' : 'btn-secondary';
			},
		}
	};
</script>