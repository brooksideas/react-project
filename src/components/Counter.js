import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this.increment = this.increment.bind(this); // best practice 
  }
  increment = () => { // best practice
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("cbv=>", this.state.count);
      }
    );
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1> {count} </h1>
        {/* <button onClick={() => this.increment()}> GO </button> */}
        <button onClick={this.increment}> GO </button>

      </div>
    );
  }
}

export default Counter;
