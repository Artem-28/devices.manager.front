<template>
  <q-card class="auth-block">
    <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="white"
        align="justify"
    >
      <q-tab :disable="loading" name="login" label="Авторизация" />
      <q-tab :disable="loading" name="registration" label="Регистрация" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel class="tab-item" name="login">
        <dm-login-form
            :loading="loading"
            @login="login"
        />
      </q-tab-panel>

      <q-tab-panel class="tab-item" name="registration">
       <dm-registration-form
           :loading="loading"
           @registration="registration"
       />
      </q-tab-panel>

    </q-tab-panels>
  </q-card>
</template>

<script>
import DmRegistrationForm from "./DmRegistrationForm";
import DmLoginForm from "./DmLoginForm";
import api from "../../store/entities/AuthUser/api";
export default {
  name: "DmAuthBlock",
  components: {
    DmLoginForm,
    DmRegistrationForm,
  },
  data() {
    return {
      tab: 'login',
      loading: false
    }
  },
  methods: {
    async login(data) {
      await api.login(data)
      await this.$router.push('/')
    },
    async registration(data) {
      this.loading = true
      const isRegister = await api.registration(data)
      this.loading = false
      if (isRegister) {
        this.tab = 'login'
      }
    }
  }
}
</script>
<style lang="scss">
.auth-block {
  .q-tab--inactive {
    background: #5c6bc0 !important;
    color: white !important;
  }
}
</style>
<style lang="scss" scoped>
.tab-item {
  height: 320px;
}
.auth-block {
  width: 500px;
}

</style>
