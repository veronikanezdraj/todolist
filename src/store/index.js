import { createStore, combineReducers } from "redux";

import todoReducers from "./reducers/todoReducers";

const rootReducer = combineReducers({
  todoReducers,
});

const store = createStore(rootReducer);

export default store;
