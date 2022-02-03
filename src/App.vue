<template>
  <component :is="layout">
    <router-view />
  </component>
</template>


<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
import api from "@/store/entities/AuthUser/api";
export default {
  name: 'LayoutDefault',
  components: {
    MainLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      if (this.$route.meta) {
         return this.$route.meta.layout
      }
      return 'EmptyLayout'
    }
  }
}
</script>
