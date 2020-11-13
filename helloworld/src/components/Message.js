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
      message: "Welcome vsistor"
    };
  }

  changeMessage(){
      this.setState({
          message : "Thank you for subscribing!"
      })
  }

  render() {
    return (
      <div>
        <h1>Welcome visitor {this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}> Subscribe</button>
      </div>
    );
  }
}

export default Message;
