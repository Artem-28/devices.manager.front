<template>
  <q-page>
    <!--Header страницы-->
    <dm-app-header title="Мои устройства">
      <div class="actions items-center justify-end">
        <dm-button
            title="добавить устройство"
            icon="add"
            adaptive
            @click="toggleCreateDevicePopup"
        />
      </div>
    </dm-app-header>

    <div class="control-devices-list-header q-ma-sm">
      <span class="header-item" v-text="'Статус устройства'" />
      <span class="header-item" v-text="'Название устройства'" />
      <span class="header-item" v-text="'Серийный номер устройства'" />
      <span class="header-item" v-text="'действия'" />
    </div>
    <q-separator />
    <!--Список устройств-->
    <dm-control-device
        v-for="device in controlDevices"
        :key="device.id"
        :device="device"
    />
    <!--Лодер загрузки страницы и отображения сообщения если  устройств нет-->
    <dm-loading-page
        :loading="loading"
        message-blank-page="Список устройст пуст"
        :show-message="!controlDevices.length"
    />
    <!--Попап добавления нового устройства-->
    <dm-create-device-popup
        @close="toggleCreateDevicePopup"
        v-model="showCreateDevicePopup"
    />
  </q-page>
</template>

<script>
import DmAppHeader from "../components/DmAppHeader";
import DmButton from "../components/common/DmButton";
import DmCreateDevicePopup from "../components/controlDevices/DmCreateDevicePopup";
import controlDeviceApi from "../store/entities/ControlDevice/api";
import DmLoadingPage from "../components/common/DmLoadingPage";
import DmControlDevice from "../components/controlDevices/DmControlDevice";
import ControlDevice from "../store/entities/ControlDevice";
export default {
  name: "ControlDevice",
  components: {
    DmControlDevice,
    DmLoadingPage,
    DmCreateDevicePopup,
    DmButton,
    DmAppHeader
  },
  data() {
    return {
      showCreateDevicePopup: false,
      loading: true
    }
  },
  computed: {
    controlDevices() {
      return this.$store.$db().model(ControlDevice).query().all()
    }
  },
  methods: {
    toggleCreateDevicePopup() {
      this.showCreateDevicePopup = !this.showCreateDevicePopup
    }
  },
  async mounted() {
    this.loading = true
    await controlDeviceApi.getControlDevices()
    this.loading = false
  }
}
</script>

<style scoped lang="scss">
.control-devices-list-header {
  display: grid;
  grid-template-columns: 150px 1fr 1fr 200px;
  .header-item {
    text-transform: uppercase;
    font-size: 12px;
  }
  .header-item:nth-child(1) {
    justify-self: center;
  }
  .header-item:nth-child(2) {
    justify-self: center;
  }
}
.actions {
  width: 100%;
  height: 100%;
  display: flex;
}

</style>
