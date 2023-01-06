import React, { useState } from "react";
import DisplayUserInfo from "./DisplayUserInfo";
import AddUserInfo from "./AddUserInfo";

const MyComponent = () => {
  const [listUser, setListUser] = useState([
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
  ]);
  const handleAddUserInfo = (userObj) => {
    setListUser([userObj, ...listUser]);
  };
  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUser];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone);
  };

  return (
    <>
      <AddUserInfo handleAddUserInfo={handleAddUserInfo} />
      <hr />
      <DisplayUserInfo
        listUsers={listUser}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
};

export default MyComponent;
