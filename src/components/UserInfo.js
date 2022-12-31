import React, { Component } from "react";

export class UserInfo extends Component {
  state = {
    name: "Thinh Tran",
    learning: "Reactjs",
    age: 20,
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div>MyComponent</div>
        <div>
          My name is {this.state.name} and I'm learning {this.state.learning}
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' onChange={this.handleOnChange} />
          <button>submit</button>
        </form>
      </>
    );
  }
}

export default UserInfo;
