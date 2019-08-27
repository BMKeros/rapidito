import firebase from 'firebase';

const ifAuthenticated = (to, from, next) => {
  const user = firebase.auth().currentUser;
  if (user) {
    next();
    return;
  }
  next('/');
};

const routes = [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/dashboard',
    beforeEnter: ifAuthenticated,
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
