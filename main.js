var app = new Vue({
  el: '#app',
  data: {
    list: [],
  },
  watch: {
    list: function () {
      // 이렇게 해서는 변경 후 ul 태그의 높이를 추출할 수 없음
      console.log('기본 출력:', this.$refs.list.offsetHeight);
      // nextTick을 사용하면 할 수 있따.
      this.$nextTick(function () {
        console.log('nextTick:', this.$refs.list.offsetHeight);
      });
    },
  },
});
