import React, { Component } from "react";

export class AddUserInfo extends Component {
  state = {
    name: "Thinh Tran",
    learning: "Reactjs",
    age: 20,
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100 + 1);
    this.props.handleAddUserInfo({
      id: id + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <>
        <div>MyComponent</div>
        <div>
          My name is {this.state.name} and I'm {this.state.age}
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' onChange={this.handleOnChangeName} />

          <br />
          <input type='text' onChange={this.handleOnChangeAge} />
          <br />
          <button>submit</button>
        </form>
      </>
    );
  }
}

export default AddUserInfo;
