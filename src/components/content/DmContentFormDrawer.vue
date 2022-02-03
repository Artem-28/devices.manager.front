<template>
  <q-drawer
      :width="600"
      :breakpoint="500"
      overlay
      bordered
      elevated
      side="right"
  >
    <q-scroll-area class="fit">
      <q-btn
          dense
          flat
          icon-right="arrow_forward"
          label="скрыть"
          class="q-ml-xs q-mt-xs"
          @click="$emit('close')"
      />
      <q-separator />

      <div v-if="!loading" class="q-ma-sm">
        <q-select
            label="Тип контента"
            v-model="contentType"
            :options="contentTypes"
            option-label="title"
            color="black"
            dense
            outlined
            class="q-mb-sm"
        />

        <q-btn-toggle
            v-model="fileAddMethod"
            :options="methodOptions"
            toggle-color="black"
            class="custom-toggle q-mb-sm"
            dense
            spread
        />

        <dm-content-file-uploader
            :content-type="contentType"
            @loaded="loaded"
        />

        <q-input
            v-model="contentValue"
            dense
            outlined
            color="black"
            label="Название контента"
        />

      </div>

    </q-scroll-area>
  </q-drawer>
</template>

<script>
import apiContentType from "../../store/entities/ContentType/api";
import ContentType from "../../store/entities/ContentType/ContentType";
import DmContentFileUploader from "./DmContentFileUploader";

export default {
  name: "DmContentFormDrawer",
  components: {DmContentFileUploader},
  data() {
    return {
      contentType: null,
      fileAddMethod: 'download',
      methodOptions: [
        { label: 'Загрузить файл', value: 'download'},
        { label: 'Выбрать из загруженных', value: 'select'},
      ],
      loading: false,
      contentValue: '',
      contentTitle: '',
    }
  },
  computed: {
    contentTypes() {
      return this.$store.$db().model(ContentType).all()
    }
  },
  methods: {
    loaded(file) {
      this.contentValue = file.path
      console.log(file)
    }
  },
  async created() {
    this.loading = true
    await apiContentType.getContentTypes()
    this.contentType = this.contentTypes[0]
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.custom-toggle {
  border: 1px solid black;
}
.hidden-button-wrapper {
  width: 100%;
}

</style>
