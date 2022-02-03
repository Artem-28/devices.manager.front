<template>
  <dm-avatar-preview :size-avatar="sizeAvatar" />
</template>

<script>
import DmAvatarPreview from "./DmAvatarPreview";
export default {
  name: "DmAvatar",
  props: {
    avatar: {
      type: String
    },
    // Возможность редактирование аватара
    isEdit: {
      type: Boolean,
      default: false
    },
    sizeAvatar: {
      type: Number,
      default: 56
    }
  },
  components: {DmAvatarPreview},

}
</script>

<style scoped>

</style>
