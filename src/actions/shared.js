import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  // this function will use Redux Thunk pattern
  return (dispatch) => {
    // we want to make an asychronous request inside of this function
    return getInitialData() // we call getInitialData that will return us a promise
      .then(({ users, tweets }) => {
        // that will pass to us an object that has an users and
        // a tweets property we want to ake our users and our tweets and add then to our
        // Redux store. To do that we need to dispatch a few different actions.
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
      });
  };
}
