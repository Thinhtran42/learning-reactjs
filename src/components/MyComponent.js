import React, { Component } from "react";
import MyInfor from "./MyInfor";
import UserInfo from "./UserInfo";

export class MyComponent extends Component {
  render() {
    const listUsers = [
      {
        id: 1,
        name: "Thinh It",
        age: 21,
      },
      {
        id: 2,
        name: "Kid",
        age: 1,
      },
      {
        id: 3,
        name: "Chang trai co don hoc code",
        age: 90,
      },
    ];
    return (
      <>
        <UserInfo />
        <hr></hr>
        <MyInfor listUsers={listUsers} />
      </>
    );
  }
}

export default MyComponent;
