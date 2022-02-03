<template>
  <header class="header items-center q-px-md" >
    <q-btn
        v-if="showButtonMenu"
        icon="menu"
        round
        flat
        dense
        class="q-mr-sm"
        @click="toggleMenu"
    />
    <h6
        class="text-h6 q-ma-none text-no-wrap q-mr-sm"
        v-text="title"
    />
    <div class="content">
      <slot />
    </div>
  </header>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "DmAppHeader",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    showButtonMenu() {
      return this.$q.screen.xs
    }
  },
  methods: {
    ...mapMutations({
      toggleMenu: 'sideMenu/toggleOpen'
    }),
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
}
.content {
  width: 100%;
  height: 100%;
}
</style>
