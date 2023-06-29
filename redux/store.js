import { combineReducers, createStore, applyMiddleware } from "redux";

import authenticationReducer from "./reducers/authentication";
import reportReducer from "./reducers/report";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  report: reportReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
