import React, { Component } from "react";

export default class LigthSwitch extends Component {
  state = {
    toggle: false,
  };

  handleClick = (event) => {
    this.setState((previousState) => {
      return {
        toggle: !previousState.toggle,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggle ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
