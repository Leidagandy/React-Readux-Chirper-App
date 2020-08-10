import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet"


class Dashboard extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetsIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// What data/state does this component need from the state of our Redux store?
// the state this component needs is tweets only, we will grab it via mapStateToProps function
function mapStateToProps({ tweets }) {
  return {
    tweetsIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
