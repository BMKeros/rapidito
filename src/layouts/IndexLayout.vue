<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Rapidito App
        </q-toolbar-title>
        <q-space />

        <q-btn-dropdown
          v-if="isAuthenticated"
          stretch
          flat
          label="User"
        >
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Usuario</div>
              <q-toggle
                v-model="mobileData"
                label="Use Mobile Data"
              />
              <q-toggle
                v-model="bluetooth"
                label="Bluetooth"
              />
            </div>

            <q-separator
              vertical
              inset
              class="q-mx-lg"
            />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">{{email}}</div>

              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                @click="logout"
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      leftDrawer: true,
      mobileData: true,
      bluetooth: false,
    };
  },
  methods: {
    ...mapActions({
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
