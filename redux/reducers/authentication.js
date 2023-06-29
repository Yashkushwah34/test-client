import * as actionTypes from "../actions/authentication";

const initialState = {
  userInfo: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INFO: {
      return {
        ...state,
        userInfo: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
