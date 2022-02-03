<template>
  <q-uploader
      flat
      bordered
      color="black"
      url="http://localhost:8000/api/content-file"
      class="fit"
      text-color="white"
      label="Выбирите файл"
      :accept="contentType.accept"
      max-files="1"
      :headers="[
          { name: 'Authorization', value: authToken }
      ]"
      field-name="file"
      @uploaded="uploadFiles"
  />
</template>

<script>
import {getAuthToken} from "../../http-config";

export default {
  name: "DmContentFileUploader",
  props: {
    contentType: {
      type: Object,
    }
  },
  data() {
    return {
      authToken: getAuthToken()
    }
  },
  methods: {
    async uploadFiles(data) {
      const xhr = data.xhr;
      const response = await JSON.parse(xhr.response);
      this.$emit( 'loaded', response.file )
    }
  }
}
</script>

<style scoped>

</style>
