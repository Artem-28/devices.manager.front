<template>
  <q-btn
      dense
      color="dark"
      :disable="disable"
  >
    <div class="content">
      <q-icon v-if="icon" :name="icon" />
      <span v-if="showTitle" v-text="title" class="q-px-xs" />
    </div>
    <q-tooltip
        v-if="!showTitle"
        anchor="top middle"
        :offset="[0, 30]"
    >
      {{title}}
    </q-tooltip>
  </q-btn>
</template>

<script>
export default {
  name: "DmButton",
  props: {
    adaptive: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showTitle() {
      if(this.adaptive) {
        return !this.$q.screen.xs
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: nowrap;
}

</style>
