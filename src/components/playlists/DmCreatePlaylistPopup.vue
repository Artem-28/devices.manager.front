<template>
  <dm-popup
      title="Добавление нового плейлиста"
      @close="clearForm"
  >
    <template v-slot:content>
      <q-form class="q-my-md">
        <q-input
            label="Название плейлиста"
            color="black"
            dense
            outlined
            v-model="title"
            @blur="v$.title.$touch()"
            :error="v$.title.$error"
            error-message="Поле обязательно для заполнения"
        />
        <q-input
            label="Описание"
            class="q-mt-sm"
            color="black"
            type="textarea"
            dense
            outlined
            v-model="description"
        />
      </q-form>
    </template>
    <template v-slot:actions>
      <dm-button
          :disable="disableActionsButton"
          title="Добавить"
          @click="addedPlaylist"
      />
    </template>
  </dm-popup>
</template>

<script>
import DmButton from "../common/DmButton";
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import DmPopup from "../common/DmPopup";
import apiPlaylist from "../../store/entities/Playlist/api";

export default {
  name: "DmCreatePlaylistPopup",
  components: {DmPopup, DmButton},
  data() {
    return {
      v$: useVuelidate(),
      title: '',
      description: '',
      loading: false
    }
  },
  validations() {
    return {
      title: { required },
    }
  },
  computed: {
    disableActionsButton() {
      return this.v$.$invalid || this.loading
    }
  },
  methods: {
    clearForm() {
      this.title = ''
      this.description = ''
      this.v$.$reset()
    },
    async addedPlaylist() {
      this.loading = true
      const payload = {
        title: this.title,
      }
      if(!!this.description) {
        payload.description = this.description
      }
      await apiPlaylist.createPlaylist(payload)
      this.loading = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
