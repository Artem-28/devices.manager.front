<template>
  <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      mini-to-overlay
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="250"
      :breakpoint="614"
      bordered
      dark
  >
    <q-scroll-area class="fit">
      <q-list class="list">
        <dm-user-profile-item />
        <dm-menu-item
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            :menu-item="menuItem"
        />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import DmMenuItem from "./DmMenuItem";
import DmUserProfileItem from "./DmUserProfileItem";
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "DmMenu",
  components: {DmUserProfileItem, DmMenuItem},
  data() {
    return {
      miniState: true,
      menuItems: [
        {
          title: 'Мои устройства',
          name: 'controlDevices',
          path: '/',
          icon: 'devices'
        },

        {
          title: 'Трансляции',
          name: 'translation',
          path: '/translation',
          icon: 'ondemand_video'
        },

        {
          title: 'Плейлисты',
          name: 'playlist',
          path: '/playlist',
          icon: 'video_library'
        },

        {
          title: 'Выйти',
          name: 'logout',
          path: null,
          icon: 'logout'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isOpen: "sideMenu/isOpen",
    }),
    drawer: {
      get() {
        return this.isOpen;
      },

      set(bool) {
        this.toggleOpen();
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleOpen: 'sideMenu/toggleOpen',
    }),
  }
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

</style>
