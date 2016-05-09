<template>
  <div class="card">
    <div class="row">
      <span>Departure Date：</span>
      <datepicker :time.sync="starttime" :option="option" :limit="limit"></datepicker>
    </div>
    <div class="row">
      <span>Return Date：</span>
      <datepicker :time.sync="endtime" :option="option"></datepicker>
    </div>
    <div class="row">
      <span>time：</span>
      <datepicker :time.sync="testTime" :option="timeoption"></datepicker>
    </div>
  </div>
  <div class="test">
    Departure Date:{{starttime}}
    <br> Return Date：{{endtime}}
    <br> test Date：{{testTime}}
  </div>
  <input type="time">
</template>
<script>
  import datepicker from './../components/form/datepicker.vue';
  export default {
    components: {
      datepicker
    },
    data () {
      return {
        starttime: '',
        endtime: '2016-01-19',
        testTime: '',
        option: {
          type: 'day',
          week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          month: ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm',
          placeholder: 'when?',
          inputStyle: {
            display: 'inline-block',
            padding: '6px',
            lineHeight: '22px',
            fontSize: '16px',
            border: '2px solid #fff',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            borderRadius: '2px',
            color: '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          month: ['一月', '二月', '三月', '四月', '五月',
            '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY-MM-DD HH:mm'
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5]
        },
          {
            type: 'fromto',
            from: '2016-02-01',
            to: '2016-02-20'
          }]
      };
    }

  };
</script>
