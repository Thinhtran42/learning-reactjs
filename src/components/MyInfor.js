import React, { Component } from "react";

class MyInfor extends Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <h1>My name's {user.name} </h1>
              <h1>My age's {user.age}</h1>
              <hr />
            </div>
          );
        })}
        {/* <h1>My name's is </h1>
        <h1>My age's is </h1> */}
      </>
    );
  }
}

export default MyInfor;
