import React from "react";

const Hello = ({name}) => {
    // return <div> 
    //     <h1> Hi ! Brook</h1> 
    // </div>
    return <h1> Hi! {name}</h1>
    // for JSX implementation
    // return React.createElement('div' , {id: 'main' , className: 'someClass'} ,React.createElement( 'h1' , null , "Hi! Brook"));
}

export default Hello;