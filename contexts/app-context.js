import { createContext, useReducer, useContext } from "react";

import store from "../store";

const dispatch = (action) => reducer(store.state, action);

const AppContext = createContext({
  store: {
    state: store.state,
    dispatch,
  },
});

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(store.reducer, store.state);
  return (
    <AppContext.Provider value={{ store: { state, dispatch } }}>
      {props.children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
