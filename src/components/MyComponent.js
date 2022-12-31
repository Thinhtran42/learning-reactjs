import React, { Component } from "react";
import MyInfor from "./MyInfor";
import UserInfo from "./UserInfo";

export class MyComponent extends Component {
  render() {
    const myInfor = ["a", "b", "c", "d", "e"];
    return (
      <>
        <UserInfo />
        <hr></hr>
        <MyInfor name='Thinh Tran' age='21' />
        <hr></hr>
        <MyInfor name='Kid' age='20' myInfor={myInfor} />
      </>
    );
  }
}

export default MyComponent;
