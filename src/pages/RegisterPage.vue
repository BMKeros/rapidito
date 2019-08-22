<template>
  <q-page padding>
    <q-input
      label="Email"
      v-model="formData.email"
    />
    <q-input
      label="Password"
      type="password"
      v-model="formData.password"
    />
    <q-input
      label="Re-Password"
      type="password"
      class="q-mb-lg"
      v-model="formData.repassword"
    />

    <q-btn
      color="blue"
      label="Register"
      @click="handleRegister"
    />
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        repassword: '',
      },
    };
  },
  methods: {
    ...mapActions({
      signUp: 'auth/signUp',
    }),
    handleRegister() {
      if (this.formData.password !== this.formData.repassword) {
        this.$q.notify('Password not matched');
      } else {
        this.signUp(this.formData);
      }
    },
  },
};
</script>

<style>
</style>
