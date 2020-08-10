import { RECEIVE_USERS } from "../actions/users";

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state, // will return what was there before, which now is just an empty object
        ...action.users, // and the users which we are grabbing from action
      };
    default:
      return state; // the default state is just going to return the state
  }
}
