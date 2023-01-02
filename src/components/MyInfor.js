import React, { Component } from "react";

class MyInfor extends Component {
  state = {
    isShowListUser: true,
  };
  handleOnClick = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <>
        <div
          onClick={() => {
            this.handleOnClick();
          }}
        >
          {this.state.isShowListUser === true
            ? "Hide list user"
            : "Show list user"}
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                  <h1>My name's {user.name} </h1>
                  <h1>My age's {user.age}</h1>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default MyInfor;
