<template>
  <q-item
      clickable
      v-ripple
      @click="actionMenuHandler"
  >
    <q-item-section avatar>
      <q-icon :name="menuItem.icon" />
    </q-item-section>

    <q-item-section v-text="menuItem.title" />
  </q-item>
</template>

<script>

import api from "../../store/entities/AuthUser/api";

export default {
  name: "DmMenuItem",
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    actionMenuHandler() {
      if (this.menuItem.name === 'logout') {
        this.logout()
        return
      }
      this.goToLink(this.menuItem.path)
    },

    goToLink(path) {
      this.$router.push(path)
    },

    async logout() {
      await api.logout()
      this.goToLink('/auth')
    }
  }
}
</script>

<style scoped>

</style>
