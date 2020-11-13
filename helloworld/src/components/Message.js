import React, { Component } from "react";

/**
 * @author NikhilPrasad
 *
 * Creating a user defined class component
 * - extends component
 * - export default
 *
 * - super() is required when constructor is used
 */
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome vsistor",
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome visitor {this.state.message}</h1>
        <button>Subscribe</button>
      </div>
    );
  }
}

export default Message;
