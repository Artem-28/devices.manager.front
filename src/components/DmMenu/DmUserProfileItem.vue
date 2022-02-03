<template>
  <q-item
      tag="router-link"
      :to="'/user-profile'"
      clickable
      class="q-pl-sm bg-blue-grey-9"
  >
    <q-item-section avatar>
      <dm-avatar :size-avatar="40" :avatar="user.avatar" />
    </q-item-section>
    <q-item-section class="container-info">
      <span class="item-info">{{user.email}}</span>
      <span class="item-info">{{user.email}}</span>
    </q-item-section>
  </q-item>
</template>

<script>
import AuthUser from "../../store/entities/AuthUser";
import DmAvatar from "../common/DmAvatar";

export default {
  name: "DmUserProfileItem",
  components: {DmAvatar},
  computed: {
    user() {
      return this.$store
          .$db()
          .model(AuthUser)
          .query()
          .first()
    }
  }
}
</script>

<style scoped>
.container-info {
  max-width: 170px;
}
.item-info {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
}

</style>
