import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state, // will return what was there before, which now is just an empty object
        ...action.tweets, // and the users which we are grabbing from action
      };
    case TOGGLE_TWEET:
      return {
        ...state, // return a brand new object and spread all the previous likes on that object
        [action.id]: {
          // this needs to be a new object
          ...state[action.id], // we take all the properties of that object and spread accros onto this new object
          likes:
            action.hasLiked === true // likes is an array of users who liked the tweet
              ? state[action.id].likes.filter(
                  (userId) => userId !== action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser]),
        },
      };
    case ADD_TWEET:
      const { tweet } = action;

      let replyingTo = {}
      if (tweet.replyingTo !== null){
replyingTo = {
  [tweet.replyingTo]: {
    ...state[tweet.replyingTo],
    replies: state[tweet.replyingTo].replies.concat([tweet.id])

  }
}
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      };
    default:
      return state; // the default state is just going to return the state
  }
}

// when we receive tweets we want to merge all of those tweets (from action.tweets)
//into the object in the return statement and we always want to return the state
// that was passed in when none of these cases matches.
