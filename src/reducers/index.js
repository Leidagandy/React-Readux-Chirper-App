import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";
import { loadingBarReducer } from "react-redux-loading";

// we want to export an invokation of combinded reducers passing it all of all different reducers

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer, // we can add this reducer as part of the state inside our Redux store
});

// However, if we want to use the loadingBarReducer inside of our application we also
// need a few different action creators that we can dispatch in order to change the
//loading bar state and we also need a component we can render which is responsible
// for showing the actual UI of the loading bar. React-redux-loading provdes us with
//both of those other things. We need to head to shared.js
