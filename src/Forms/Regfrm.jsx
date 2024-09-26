import { useState } from "react";

const Regfrm = () => {
  const [user, setUser] = useState({
    name: "Ram",
    age: 24,
    Gender: "Male",
    isMarried: "true",
  });
 function changeHandler(e){
    const name = e.target.name;
    console.log(name);
    const value=e.target.type==='checkbox'?e.target.checked:e.target.value;
    setUser({...user,[name]:value})
    
 }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <tr>{user.name} </tr>
          </tr>
          <tr>
            <th>Age</th>
            <tr>{user.age} </tr>
          </tr>
          <tr>
            <th>Gender</th>
            <tr>{user.Gender} </tr>
          </tr>
          <tr>
            <th>Married</th>
            <tr>{user.isMarried ? "Married" : "Not married"} </tr>
          </tr>
        </tbody>
      </table>
      <form action="">
        <input
          type="text"
          placeholder="FullName"
          value={user.name}
          onChange={changeHandler}
          name="name"
        />
        <input
          type="text"
          placeholder="Age"
          value={user.age}
          onChange={changeHandler}
          name="age"
        />
        <div className="gender">
          <label htmlFor="Male">
            <input
              type="radio"
              name="Gender"
              id="Male"
              checked={user.Gender == "Male"}
              value='Male'
              onChange={changeHandler}
            />
            Male
          </label>
          <label htmlFor="Female">
            <input
              type="radio"
              name="Gender"
              id="Female"
              checked={user.Gender == "Female"}
              value="Female"
              onChange={changeHandler}
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            checked={user.isMarried}
            name="isMarried"
            onChange={changeHandler}
          />
          Is Married
        </label>
      </form>
    </>
  );
};

export default Regfrm;
