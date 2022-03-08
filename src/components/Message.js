import React , { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    // Methods 
    changeMessage() {
        this.setState({
           message: 'Going ....'
        })
    }
    render() {
        return ( 
        <div>
           <h1> { this.state.message } </h1> 
           <button onClick={() => this.changeMessage()}> GO </button> 
        </div>
         )
    }
}

export default Message;