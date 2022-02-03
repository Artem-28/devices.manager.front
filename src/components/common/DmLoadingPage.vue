<template>
  <div class="row justify-center">
    <q-inner-loading :showing="loading">
      <q-spinner-gears size="70px" color="black" />
    </q-inner-loading>
    <span
        v-if="isShowMessage"
        v-text="messageBlankPage"
        class="text-h6 q-mt-md"
    />
  </div>

</template>

<script>
export default {
  name: "DmLoadingPage",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    messageBlankPage: {
      type: String,
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isShowMessage() {
      console.log(this.loading)
      return !this.loading && this.showMessage
    }
  }
}
</script>

<style scoped>

</style>
