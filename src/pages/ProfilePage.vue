<template>
  <q-page padding>
    <div class="">

      <!-- TODO: Agregar image con firestore y storage -->
      <q-input
        outlined
        v-model="formData.firstName"
        label="First Name"
      />
      <br>
      <q-input
        outlined
        v-model="formData.lastName"
        label="Last Name"
      />
      <br>
      <q-input
        outlined
        v-model="formData.phoneNumber"
        label="Phone Number"
      />
      <br>
      <q-select
        outlined
        v-model="formData.gender"
        :options="genderOptions"
        label="Gender"
      />
      <br>
      <q-btn
        color="primary"
        label="Guardar"
        @click="handleSaveForm"
      />

    </div>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
      },
      genderOptions: [
        {
          label: 'Masculino',
          value: 'male',
        },
        {
          label: 'Femenino',
          value: 'female',
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      loadProfile: 'user/loadProfile',
      saveProfile: 'user/saveProfile',
    }),
    handleSaveForm() {
      this.saveProfile(this.formData);
    },
  },
  computed: {
    ...mapGetters({
      profileData: 'user/profileData',
    }),
  },
  mounted() {
    this.loadProfile();
  },
  watch: {
    profileData(val) {
      this.formData = val;
    },
  },
};
</script>

<style>
</style>
