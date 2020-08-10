import { RECEIVE_TWEETS } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state, // will return what was there before, which now is just an empty object
        ...action.tweets, // and the users which we are grabbing from action
      };
    default:
      return state; // the default state is just going to return the state
  }
}

// when we receive tweets we want to merge all of those tweets (from action.tweets)
//into the object in the return statement and we always want to return the state 
// that was passed in when none of these cases matches.
