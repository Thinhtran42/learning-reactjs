import React, { Component } from "react";

class MyInfor extends Component {
  render() {
    const { age, name } = this.props;
    return (
      <>
        <h1>My name's is {name}</h1>
        <h1>My age's is {age}</h1>
      </>
    );
  }
}

export default MyInfor;
