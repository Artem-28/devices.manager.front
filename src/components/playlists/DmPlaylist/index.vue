<template>
  <q-expansion-item
      expand-icon-toggle
      switch-toggle-side
      class="bg-white q-ma-xs q-pa-none"
      header-class="q-pa-none"
      expand-icon-class="q-pl-sm"
      v-model="show"
  >
    <template v-slot:header>
      <div class="playlist">
        <q-item-section>
          <span v-text="playlist.title" />
          <span class="text-grey-7 description" v-text="playlist.description" />
        </q-item-section>

        <q-item-section class="duration">
          <span v-text="'20 мин.'" />
        </q-item-section>

        <q-item-section class="size">
          <span v-text="'536 MB'" />
        </q-item-section>

        <q-item-section class="action">
          <dm-button-icon
              icon="playlist_add"
              color="primary"
              title="Добавить элемент р playlist"
              class="q-mr-xs"
              @click="$emit('addContent', playlist)"
          />
          <dm-button-icon
              icon="delete"
              color="red"
              title="Удалить устройство"
          />
        </q-item-section>
      </div>
    </template>
  </q-expansion-item>
</template>

<script>
import DmButtonIcon from "../../common/DmButtonIcon";
export default {
  name: "DmPlaylist",
  components: {DmButtonIcon},
  props: {
    playlist: {
      type: Object
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped lang="scss">
.playlist {
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 200px;
}
.duration, .size, .action {
  justify-self: center;
}
.action {
  flex-direction: row;
  align-items: center;
}
.description {
  font-size: 12px;
}

</style>
