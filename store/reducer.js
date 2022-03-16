import modules from "./modules";

const reducers = {
  notifications: modules.notifications.reducer,
};

const reducer = (state, action) => {
  let newState = state;
  for (const module in reducers) {
    newState = {
      ...state,
      [module]: reducers[module](state[module], action),
    };
  }
  return newState;
};

export default reducer;
