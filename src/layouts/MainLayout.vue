<template>
  <q-layout class="bg-grey-3">
    <dm-menu />
    <q-page-container>
      <slot />
    </q-page-container>
    <dm-notify-handler />
  </q-layout>
</template>

<script>
import DmNotifyHandler from "@/components/DmNotifyHandler";
import DmMenu from "@/components/DmMenu";

export default {
  name: "MainLayout",
  components: {DmMenu, DmNotifyHandler},
}
</script>
