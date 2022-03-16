import React from "react";

import store from "../store";

const dispatch = (action) => reducer(store.state, action);

const AppContext = React.createContext({
  store: {
    state: store.state,
    dispatch,
  },
});

const AppContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(store.reducer, store.state);
  return (
    <AppContext.Provider value={{ store: { state, dispatch } }}>
      {props.children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(AppContext);
};

export { AppContextProvider, useAppContext };
