import blogReducer from "./reducers/blogReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import notificationReducer from "./reducers/notificationReducer";

console.log("blogReducerStore", blogReducer);

const reducer = combineReducers({
  user: userReducer,
  notification: notificationReducer,
  blogs: blogReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
