<template />
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "DmNotifyHandler",
  computed: {
    ...mapGetters ({
      notify: 'notifyHandler/notify'
    }),
    showNotify() {
      return this.notify.show
    },
    notifyColor() {
      return this.notify.type === 'success' ? 'green': 'red'
    }
  },
  methods: {
    ...mapMutations({
      clearNotify: 'notifyHandler/clearNotify'
    })
  },
  watch: {
    showNotify(isShow) {
      if (isShow) {
        this.$q.notify({
          message: this.notify.message,
          color: this.notifyColor,
          position: 'top',
          timeout: 1000
        })
        this.clearNotify()
      }
    }
  }
}
</script>
