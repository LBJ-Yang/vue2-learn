/* global Vue */


new Vue({
  el: '#demo',
  components: {
    item: {
      props: ["item"],
      template: `
        <li>
          {{item}}
        </li>
      `,
      name: "child"
    }
  },
  data: {
    name: 'oldName',
    list: ['list-111', 'list-222', 'list-333']
  },
  methods: {
    handleDel: function () {
      this.list.shift()
    }
  }
})
