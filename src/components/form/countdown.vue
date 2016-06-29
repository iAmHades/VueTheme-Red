 <!-- 倒计时组件 -->
<template>
  <span>{{time}}</span>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 60
    },
    start: {
      type: Boolean,
      default: true
    },
    onfinished:{
      type:Function
    }
  },
  methods: {
    tick () {
      const _this = this;
      this.interval = setInterval(() => {
        if (_this.time > 1) {
          _this.time--;
        } else {
          _this.time = this.$parent.time;
          _this.stop();
           this.onfinished.call(this);
        }
      }, 1000);
    },
    stop () {
      clearInterval(this.interval);
    }
  },
  watch: {
    start (newVal, oldVal) {
      if (newVal === true && oldVal === false && this.time > 0) {
        this.tick();
      }
      if (newVal === false && oldVal === true) {
        this.stop();
      }
    }
  },
  ready () {
    if (this.start) {
      this.tick();
    }
  },
  data () {
    return {
      interval: null,
      index: 0
    };
  }
};
</script>
