import { combineReducers } from "redux"
import authedUser from "./authedUser"
import users from "./users"
import tweets from "./tweets"

// we want to export an invokation of combinded reducers passing it all of all different reducers

export default combineReducers ({
authedUser,
users,
tweets,
})