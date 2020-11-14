import React from "react";

/**
 * @author NikhilPrasad
 * stateless functional component
 *
 * function Greet(){
 *  return <h1>Hello Batman!!</h1>
 * }
 * can also write lambdas
 *
 * - can also export the function directly
 */

const Greet = (props) => {
  const {name, realName} = props
  console.log(props);
  return (
    <div>
      <h1>
        Hello heroname {name}!! a.k.a {realName}
      </h1>
      <h2>{props.children}</h2>
    </div>
  );
};

export default Greet