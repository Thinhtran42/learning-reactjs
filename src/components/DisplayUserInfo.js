import React, { Component, useState } from "react";

import "./DisplayUserInfo.scss";
import logo from "./../logo.svg";

const DisplayUserInfo = (props) => {
  const { listUsers } = props;

  const [isShowHide, setShowHide] = useState(true);

  const handleClickShowHide = () => {
    setShowHide(!isShowHide);
  };
  return (
    <div className='Display-list-user-container'>
      <div>
        <span onClick={() => handleClickShowHide()}>
          {isShowHide === true ? "Hide list user" : "Show list user"}
        </span>
      </div>
      {isShowHide && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age < 18 ? "red" : "green"}>
                <div>
                  <h1>My name's {user.name} </h1>
                  <p>My age's {user.age}</p>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayUserInfo;
