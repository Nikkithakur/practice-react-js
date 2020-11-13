import React, {Component} from 'react'

/**
 * @author NikhilPrasad
 * 
 * Creating a user defined class component
 * - extends component
 * - export default
 * 
 */
class Welcome extends Component{
    render(){
    return <h1>Welcome Component! {this.props.name}</h1>
    }
}

export default Welcome