<template>
  <q-card class="control-device q-ma-xs" bordered flat>
    <!--Статус устройства-->
    <q-card-section class="control-device-status row items-center justify-center q-pa-none">
      <q-icon
          size="28px"
          :color="deviceStatus.color"
          :name="deviceStatus.icon"
      />
      <span class="q-ml-sm" v-text="deviceStatus.title" />
    </q-card-section>
    <!--Название устройства-->
    <q-card-section class="control-device-title row items-center justify-center q-pa-none">
      <span v-text="device.title" />
    </q-card-section>
    <!--Серийный номер устройства-->
    <q-card-section class="control-device-serial-number row items-center q-pa-none">
      <span v-text="device.serialNumber" />
    </q-card-section>
    <!--Действия устройства-->
    <q-card-section class="q-pa-none row items-center">
      <dm-button-icon
          icon="power_settings_new"
          color="red"
          title="Отключить устройство"
          :disable="deviceStatus.disableActions.power"
      />
      <dm-button-icon
          icon="delete"
          color="red"
          title="Удалить устройство"
          @click="deleteDevice"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import DmButtonIcon from "../../common/DmButtonIcon";
export default {
  name: "DmControlDevice",
  components: {DmButtonIcon},
  props: {
    device: {
      type: Object,
      required: true,
    }
  },
  computed: {
    deviceStatus() {
      switch (this.device.status) {
        case 'online':
          return {
            icon: 'wifi',
            color: 'green',
            title: 'Подключено',
            disableActions: {
              power: false
            }
          }
        default:
          return {
            icon: 'wifi_off',
            color: 'red',
            title: 'Отключено',
            disableActions: {
              power: true
            }
          }
      }
    }
  },
  methods: {
    // Удаление устройства
    deleteDevice() {
      this.device.delete()
    }
  }
}
</script>

<style scoped lang="scss">
.control-device {
  height: 60px;
  display: grid;
  grid-template-columns: 150px 1fr 1fr 200px;
  .control-device-status {
    text-transform: uppercase;
    font-size: 10px;
  }
  .control-device-title {
    justify-self: center;
    font-size: 16px;
  }
  .control-device-serial-number {
    font-size: 16px;
  }
}
</style>
