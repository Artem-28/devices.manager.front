<template>
  <q-layout view="lHh Lpr lFf" class="bg-indigo-5 empty-layout">
    <slot />
    <dm-notify-handler />
  </q-layout>
</template>

<script>
import DmNotifyHandler from "@/components/DmNotifyHandler";
export default {
  name: "EmptyLayout",
  components: {DmNotifyHandler}
}
</script>

<style lang="scss" scoped>
.empty-layout {
  height: 0;
}

</style>
