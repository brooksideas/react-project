import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  nameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label> UserName</label>
          <input type="text" onChange={() => this.nameChange()} />
        </div>
      </form>
    );
  }
}

export default Form;
