import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    const { tweet } = this.props;
    if (tweet === null) {
      return <p>This Tweet does not exist</p>;
    }
    // console.log(this.props);
    return <div className="tweet"></div>;
  }
}

// what state does this component need from our Redux Store?
// We need authedUser, users and tweets. If we pass the component we are
// rendering a prop that will come as a second argument {id}
// the second argument is the props passed to the Tweet component when rendered in the Dashboard

function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];

  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
}

export default connect(mapStateToProps)(Tweet);
