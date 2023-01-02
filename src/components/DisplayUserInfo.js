import React, { Component } from "react";

import "./DisplayUserInfo.scss";
import logo from "./../logo.svg";

class DisplayUserInfo extends Component {
  state = {
    isShowListUser: true,
  };
  handleOnClick = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div className='Display-list-user-container'>
        <img src={logo} alt='hinh anh' />
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
                <div key={user.id} className={+user.age < 18 ? "red" : "green"}>
                  <div>
                    <h1>My name's {user.name} </h1>
                    <p>My age's {user.age}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      X
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayUserInfo;
