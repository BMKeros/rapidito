<template>
  <q-page class="flex flex-center">
    <h4>{{ uid }}</h4>
    <h3>{{ email }}</h3>
    <q-btn
      @click="loginWithGoogle"
      color="red"
      label="Google"
    ></q-btn>

    <q-btn
      v-show="isAuthenticated"
      @click="logout"
      label="Logout"
    ></q-btn>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  methods: {
    ...mapActions({
      loginWithGoogle: 'auth/signInWithGoogle',
      logout: 'auth/signOut',
    }),
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isAuthenticated: 'auth/isAuthenticated',
    }),
    uid() {
      return this.currentUser ? this.currentUser.uid : '';
    },
    email() {
      return this.currentUser ? this.currentUser.email : '';
    },
  },
};
</script>
