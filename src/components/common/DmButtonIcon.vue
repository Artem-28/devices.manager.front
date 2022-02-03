<template>
  <q-btn
      dense
      flat
      round
      :icon="icon"
      :color="colorButton"
      :disable="disable"
  >
    <q-tooltip
        anchor="top middle"
        :offset="[0, 30]"
    >
      {{title}}
    </q-tooltip>
  </q-btn>
</template>

<script>
export default {
  name: "DmButtonIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorButton() {
      return this.disable ? '' : this.color
    }
  }
}
</script>

<style scoped>

</style>
