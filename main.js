var app = new Vue({
  el: '#app',
  data: {
    message: 'hi',
  },
  watch: {
    message: _.debounce(function (newVal) {
      console.log(newVal);
    }, 500),
  },
});
