<template>
  <div class="auth-page column justify-center items-center">
    <dm-auth-block />
  </div>
</template>

<script>
import DmAuthBlock from "../components/DmAuthBlock";
export default {
  name: "Auth",
  components: {DmAuthBlock},
}
</script>

<style lang="scss" scoped>
.auth-page {
  height: 100%;
}

</style>
