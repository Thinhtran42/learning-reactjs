import React, { Component } from "react";
import DisplayUserInfo from "./DisplayUserInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends Component {
  state = {
    listUsers: [
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
    ],
  };
  handleAddUserInfo = (userObj) => {
    console.log("check data >>>", userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  handleDeleteUser = (userId) => {
    let listUserClone = this.state.listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUserClone,
    });
  };
  render() {
    return (
      <>
        <AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
        <hr />
        <DisplayUserInfo
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </>
    );
  }
}

export default MyComponent;
