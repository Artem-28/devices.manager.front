<template>
  <dm-popup
      title="Добавление нового устройства"
      @close="clearForm"
  >
    <template v-slot:content>
      <q-form class="q-my-md">
        <q-input
            label="Название устройства"
            color="black"
            dense
            outlined
            v-model="title"
            @blur="v$.title.$touch()"
            :error="v$.title.$error"
            error-message="Поле обязательно для заполнения"
        />
        <q-input
            label="Серийный номер устройства"
            class="q-mt-sm"
            color="black"
            dense
            outlined
            v-model="serialNumber"
            @blur="v$.serialNumber.$touch()"
            :error="v$.serialNumber.$error"
            error-message="Поле обязательно для заполнения"
        />
      </q-form>
    </template>
    <template v-slot:actions>
      <dm-button
          :disable="disableActionsButton"
          title="Добавить"
          @click="addedDevice"
      />
    </template>
  </dm-popup>
</template>

<script>
import DmPopup from "../common/DmPopup";
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import DmButton from "../common/DmButton";
import controlDeviceApi from "../../store/entities/ControlDevice/api";

export default {
  name: "DmCreateDevicePopup",
  components: {DmButton, DmPopup},
  data() {
    return {
      v$: useVuelidate(),
      title: '',
      serialNumber: '',
      loading: false
    }
  },
  validations() {
    return {
      title: { required },
      serialNumber: { required },
    }
  },
  computed: {
    disableActionsButton() {
      return this.v$.$invalid || this.loading
    }
  },
  methods: {
    async addedDevice() {
      this.loading = true
      const payload = {
        title: this.title,
        serialNumber: this.serialNumber
      }
      await controlDeviceApi.createControlDevice(payload)
      this.$emit('close')
      this.loading = false
    },

    clearForm() {
      this.title = ''
      this.serialNumber = ''
      this.v$.$reset();
    }
  },
}
</script>
