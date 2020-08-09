export const RECEIVE_TWEETS = "RECEIVE_TWEETS"

// receiveTweets action creator

export function receiveTweets (tweets) { //this will return an object or the action
return { 
    type: RECEIVE_TWEETS,
    tweets,
}
}