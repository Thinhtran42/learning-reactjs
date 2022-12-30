import React, { Component } from "react";

export class MyComponent extends Component {
  state = {
    name: "Thinh Tran",
    learning: "Reactjs",
    age: 20,
  };
  onClickHandle = () => {
    console.log("Click me ! ");

    this.setState({
      name: "Thinh Dep trai",
      learning: "Java Spring Boot",
    });
  };
  onMouseOverHandle(event) {
    // console.log(event.target);
  }
  render() {
    return (
      <>
        <div>MyComponent</div>
        <div>
          My name is {this.state.name} and I'm learning {this.state.learning}
        </div>
        <button onClick={this.onClickHandle}>click me </button>
        <button onMouseOver={this.onMouseOverHandle}>Hover me</button>
      </>
    );
  }
}

export default MyComponent;
