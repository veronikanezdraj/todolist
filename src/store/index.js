import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducers from "./localStorageRedux/reducers/todoReducers";
import postsReducer from "./apishkaRedux/reducer/postsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  todoReducers,
  postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
