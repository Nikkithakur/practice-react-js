import React from 'react'

/**
 * React.createElement - without jsx
 */
const Hello = () => {
    // return (
    //     <div>
    //         <h1>
    //             Hello Batman!! from JSX
    //         </h1>
    //     </div>
    // )
    return React.createElement('div', 
    {id:'helloId', className:'dummyclass'}, 
    React.createElement('h1', null, 'Hello Batman!! JSX'))
}
export default Hello