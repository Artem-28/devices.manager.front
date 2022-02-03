<template>
  <!--Обертка попапа для всего приложения-->
  <q-dialog persistent>
    <q-card class="popup">
      <!--Шапка попапа-->
      <q-card-section class="bg-black row justify-between items-center">
        <span
            class="text-white title q-pa-none q-ma-none"
            v-text="title"
        />
        <q-btn
            size="10px"
            dense
            round
            color="red"
            icon="close"
            class="q-pa-none"
            @click="$emit('close')"
        >
          <q-tooltip anchor="top middle" :offset="[0, 30]">Закрыть окно</q-tooltip>
        </q-btn>
      </q-card-section>

      <!--Индикатор загрузки-->
      <q-linear-progress
          :query="loading"
          color="blue-grey-5"
      />

      <!--Содержимое попапа попапа-->
      <q-card-section>
        <slot name="content" />
      </q-card-section>

      <!--Разделитель-->
      <q-separator color="grey" />

      <!--Кнопки попапа-->
      <q-card-section class="bg-grey-3 row justify-end">
        <slot name="actions" />
      </q-card-section>
    </q-card>

  </q-dialog>
</template>

<script>
export default {
  name: "DmPopup",
  props: {
    title: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped lang="scss">
.popup {
  min-width: 26.625rem;
}
.title {
  font-size: 16px;
  font-weight: bold;
}

</style>
