import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti/index";
import { TiHeartOutline } from "react-icons/ti/index";
import { TiHeartFullOutline } from "react-icons/ti/index";
import { handleToggleTweet } from "../actions/tweets"

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault()
const { dispatch, tweet, authedUser} = this.props

dispatch(handleToggleTweet({
  id: tweet.id, 
  hasLiked: tweet.hasLiked,
  authedUser

}))
  };
  toParent = (e, id) => {
    e.preventDefault();
    //todo: redirect to the parent Tweet
  };
  render() {
    const { tweet } = this.props;
    if (tweet === null) {
      return <p>This Tweet does not exist</p>;
    }

    // all these variables will be coming from line 10 const { tweet } = this.props
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent,
    } = tweet;
    // console.log(this.props);
    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />

        <div className="tweet-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => this.toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
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
