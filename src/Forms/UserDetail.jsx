import React, { useState } from "react";

const UserDetail = () => {
  const[user,setUser]=useState({name:'Ram',age:21})

  const updateName = () => {
    setUser({...user, name:'sam'})
  };
  const updateAge = () => {
        setUser({ ...user, age: 23 });

  };

  return (
    <div>
      <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <button onClick={updateName}>Update username</button>
      <button onClick={updateAge}>Update userage</button>
    </div>
  );
};

export default UserDetail;
