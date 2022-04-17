import { useState } from "react";
import Styles from "../styles/register.module.scss";

export default function Register() {
  const [newCredentials, setNewCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setNewCredentials({ ...newCredentials, [e.target.name]: e.target.value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(newCredentials);
    setMsg("Hurrray!!! new Registration");
  };

  return (
    <div className="RegiserationForm"> 
      <form onSubmit={handleRegistration}>
        <label>email :</label>
        <input name="email" onChange={changeHandler}></input>
        <br></br>
        <label>password :</label>
        <input
          name="password"
          value={newCredentials.password}
          onChange={changeHandler}
          type="password"
        ></input>
        <br></br>
        <label>confirm password :</label>
        <input
          name="confirmPassword"
          value={newCredentials.confirmPassword}
          onChange={changeHandler}
          type="password"
        ></input>
        <br></br>
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="">Login</a>{" "}
        </p>
      </form>
    </div>
  );
}