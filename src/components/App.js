import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

// when the component mounts we want to dispatch the invokation of our
// handleInitialData action creator. In order to get access to dispatch we need to
// connect our app component
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  // we only want to render Dashboard once the data from handleInitiaData invokation is finished
  // if authedUser is true we render null/nothing else we render the dashboard
  render() {
    return <div>{this.props.loading === true ? null : <Dashboard />}</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null, // loading will be true if authedUse is null
  };
}

export default connect(mapStateToProps)(App);
// we dont need anything from the state, we just leave the first invokation blank
// using connect() function upgrades a component to a container. Containers can read
// state fro the store and dispatch actions.
