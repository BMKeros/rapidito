export function currentUser(state) {
  return state.user;
}

export function isAuthenticated(state) {
  return state.user && !!state.user.uid;
}
