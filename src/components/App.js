import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

// when the component mounts we want to dispatch the invokation of our
// handleInitialData action creator. In order to get access to dispatch we need to
// connect our app component
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div>Starter Code</div>;
  }
}

export default connect()(App);
// we dont need anything from the state, we just leave the first invokation blank
// using connect() function upgrades a component to a container. Containers can read
// state fro the store and dispatch actions.
