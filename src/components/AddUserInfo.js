import React, { useState } from "react";

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  // const [learning, setLearning] = useState("Reactjs");
  const [age, setAge] = useState(20);

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100 + 1);
    props.handleAddUserInfo({
      id: id + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <>
      <div>MyComponent</div>
      <div>
        My name is {name} and I'm {age}
      </div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input type='text' onChange={(e) => handleOnChangeName(e)} />
        <br />
        <input type='text' onChange={(e) => handleOnChangeAge(e)} />
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddUserInfo;
