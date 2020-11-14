import React, { Component } from "react";

/**
 * @author NikhilPrasad
 *
 * Creating a user defined class component
 * - extends component
 * - export default
 *
 */
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Welcome Component! {name}</h1>;
  }
}

export default Welcome;
