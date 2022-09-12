/* global Vue */


new Vue({
  el: '#demo',
  data: {
    name: 'oldName',
    list1: ['111', '222', '333']
  },
  methods: {
    changeName: function () {
      this.name = 'new name ~~~~~~'
    },
    changeSort() {
      this.list1 = ['222', '333', '111']
    }
  }
})
