<template>
  <q-page>
    <dm-app-header title="Плейлиты">
      <div class="actions items-center justify-end">
        <dm-button
            title="добавить плейлист"
            icon="add"
            adaptive
            @click="toggleCreatePlaylistPopup"
        />
      </div>
    </dm-app-header>
    <div class="playlist-header q-ma-sm">
      <span class="header-item" v-text="'Название устройства'" />
      <span class="header-item" v-text="'Продолжительность'" />
      <span class="header-item" v-text="'Общий размер'" />
      <span class="header-item" v-text="'действия'" />
    </div>
    <q-separator />
    <q-list>
      <dm-playlist
          v-for="playlist in playlists"
          :key="playlist.id"
          :playlist="playlist"
          @addContent="addContent"
      />
    </q-list>

    <dm-content-form-drawer
        v-model="showContentFormDrawer"
        @close="toggleContentFormDrawer"
    />

    <dm-create-playlist-popup
        v-model="showCreatePlaylistPopup"
        @close="toggleCreatePlaylistPopup"
    />
  </q-page>
</template>

<script>
import DmAppHeader from "../components/DmAppHeader";
import DmButton from "../components/common/DmButton";
import DmCreatePlaylistPopup from "../components/playlists/DmCreatePlaylistPopup";
import apiPlaylist from "../store/entities/Playlist/api";
import Playlist from "../store/entities/Playlist";
import DmPlaylist from "../components/playlists/DmPlaylist";
import DmContentFormDrawer from "../components/content/DmContentFormDrawer";

export default {
  name: "Playlists",
  components: {
    DmContentFormDrawer,
    DmPlaylist,
    DmCreatePlaylistPopup,
    DmButton,
    DmAppHeader
  },
  data() {
    return {
      showContentFormDrawer: false,
      showCreatePlaylistPopup: false,
      loading: true
    }
  },
  computed: {
    playlists() {
      return this.$store.$db().model(Playlist).all();
    }
  },
  methods: {
    addContent(playlist) {
      console.log(playlist)
      this.toggleContentFormDrawer()
    },
    toggleContentFormDrawer() {
      console.log(this.showContentFormDrawer)
      this.showContentFormDrawer = !this.showContentFormDrawer
    },
    toggleCreatePlaylistPopup() {
      this.showCreatePlaylistPopup = !this.showCreatePlaylistPopup
    }
  },
  async mounted() {
    this.loading = true
    await apiPlaylist.getPlaylists()
    this.loading = false
  }
}
</script>

<style scoped lang="scss">
.playlist-header {
  padding-left: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 200px;
  .header-item {
    text-transform: uppercase;
    font-size: 12px;
  }
  .header-item:nth-child(1) {
    justify-self: start;
  }
  .header-item:nth-child(2) {
    justify-self: center;
  }
  .header-item:nth-child(3) {
    justify-self: center;
  }
  .header-item:nth-child(4) {
    justify-self: center;
  }
}
.actions {
  width: 100%;
  height: 100%;
  display: flex;
}

</style>
