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
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}> Incremnt</button>
      </div>
    );
  }
}

export default Counter;
