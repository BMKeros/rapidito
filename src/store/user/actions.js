import firebase from 'firebase';
import * as _ from 'lodash';

const camelCaseToSnakeCase = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[_.snakeCase(key)] = obj[key];
  });
  return newObj;
};

const snakeCaseToCamelCase = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[_.camelCase(key)] = obj[key];
  });
  return newObj;
};

export async function saveProfile({ rootState, dispatch }, payload) {
  const { uid } = rootState.auth.user;

  dispatch('app/showLoading', null, { root: true });
  try {
    const data = camelCaseToSnakeCase(payload);
    await firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .set(data, { merge: true });
  } catch (error) {
    console.error(error);
  }
  dispatch('app/hideLoading', null, { root: true });
}

export async function loadProfile({ commit, rootState, dispatch }) {
  const { uid } = rootState.auth.user;

  dispatch('app/showLoading', null, { root: true });
  try {
    const response = await firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .get();

    if (response.exists) {
      const data = snakeCaseToCamelCase(response.data());
      commit('setProfile', data);
    }
  } catch (error) {
    console.error(error);
  }
  dispatch('app/hideLoading', null, { root: true });
}
