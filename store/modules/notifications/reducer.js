import * as types from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification,
        show: true,
      };
    case types.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: {
          title: "",
          message: "",
          status: "",
        },
        show: false,
      };
    default:
      return state;
  }
};

export default reducer;
