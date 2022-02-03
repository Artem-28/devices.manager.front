<template>
  <div class="form-wrapper q-pa-md column justify-between" >
    <q-form class="q-mt-md">
      <q-input
          outlined
          dense
          v-model="email"
          label="Введите email"
          @blur="v$.email.$touch()"
          :error="v$.email.$error"
          :error-message="errorMessage.email"
      />
      <q-input
          outlined
          dense
          type="password"
          v-model="password"
          label="Введите пароль"
          @blur="v$.password.$touch()"
          :error="v$.password.$error"
          :error-message="errorMessage.password"
          class="q-mt-sm"
      />
    </q-form>
    <div class="row justify-end">
      <q-btn
          color="primary"
          label="Воити"
          @click="emitLogin"
          :disable="v$.$invalid"
          :loading="loading"
      />
    </div>
  </div>

</template>

<script>
import { required, email } from '@vuelidate/validators'
import useVuelidate from "@vuelidate/core";

export default {
  name: "DmLoginForm",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: ''
    }
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    }
  },
  computed: {
    errorMessage() {
      const message = {
        email: null,
        password: null,
      }
      if (this.v$.email.required.$invalid) {
        message.email = 'Поле email обязательно для заполнения'
      }
      if (this.v$.email.email.$invalid) {
        message.email = 'Некорректный email'
      }
      if (this.v$.password.required.$invalid) {
        message.password = 'Поле пароль обязательно для заполнения'
      }
      return message
    },
  },
  methods: {
    emitLogin() {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$emit('login', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  height: 100%;
}

</style>
