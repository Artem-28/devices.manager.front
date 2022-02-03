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
      <q-input
          outlined
          dense
          type="password"
          v-model="confirmPassword"
          label="Повторите пароль"
          @blur="v$.confirmPassword.$touch()"
          :error="v$.confirmPassword.$error"
          :error-message="errorMessage.confirmPassword"
          class="q-mt-sm"
      />
    </q-form>
    <div class="row justify-end">
      <q-btn
          color="primary"
          label="Зарегистрироваться"
          @click="emitRegistration"
          :disable="v$.$invalid"
          :loading="loading"
      />
    </div>
  </div>

</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: "DmRegistrationForm",
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
      password: '',
      confirmPassword: ''
    }
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { sameAsPassword: sameAs(this.password) }
    }
  },
  computed: {
    errorMessage() {
      const message = {
        email: null,
        password: null,
        confirmPassword: null
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
      if (this.v$.password.minLength.$invalid) {
        message.password = 'Пароль должен содержать не менее 6 символов'
      }
      if (this.v$.confirmPassword.sameAsPassword.$invalid) {
        message.confirmPassword = 'Пароли не совпадают'
      }
      return message
    },
  },
  methods: {
    emitRegistration() {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$emit('registration', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  height: 100%;
}

</style>
