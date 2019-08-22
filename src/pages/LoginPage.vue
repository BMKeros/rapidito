<template>
  <q-page padding>
    <q-input
      label="Email"
      v-model="credentials.email"
    />
    <q-input
      label="Password"
      type="password"
      class="q-mb-lg"
      v-model="credentials.password"
    />

    <q-btn
      color="blue"
      label="Login"
      @click="loginWithCredentials(credentials)"
    />
    <q-btn
      color="red"
      label="Login with google"
      @click="loginWithGoogle"
    />
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions({
      loginWithCredentials: 'auth/signInWithCredentials',
      loginWithGoogle: 'auth/signInWithGoogle',
    }),
  },
};
</script>

<style>
</style>
