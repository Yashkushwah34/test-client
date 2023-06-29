import * as actionTypes from "../actions/report";

const initialState = {
  allReports: "",
  report: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_REPORTS: {
      return {
        ...state,
        allReports: action.data,
      };
    }
    case actionTypes.GET_PARTICULAR_DATA: {
      return {
        ...state,
        report: action.data,
      };
    }
    case actionTypes.DELETE_REPORT: {
      const updatedArray = state.allReports.filter(
        (el) => el._id !== action.data
      );
      return {
        ...state,
        allReports: updatedArray,
      };
    }
    default:
      return state;
  }
};

export default reducer;
