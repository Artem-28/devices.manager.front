<template>
  <div>
    <q-avatar
        v-if="avatar"
        :size="`${sizeAvatar}px`"
        class="bg-grey-3"
    >
      <img class="img" :src="avatar" />
    </q-avatar>
    <q-avatar
        v-else
        :size="`${sizeAvatar}px`"
        class="bg-grey-3 text-grey-7"
        icon="person"
    />
  </div>
</template>

<script>
export default {
  name: 'DmAvatarPreview',
  props: {
    avatar: String,
    sizeAvatar: Number
  }
};
</script>

<style scoped></style>
