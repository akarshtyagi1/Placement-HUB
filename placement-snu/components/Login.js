import { useState } from "react";

export default function Login() {
  const [textMsg, setMsg] = useState("Welcome");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");



  return (
    <div>
      
      <div>
        <br></br>
        <label>email :</label>
        <input></input>
        <br></br>
        <label>password :</label>
        <input type="password"></input>
        <br></br>

        <button>Login</button>
      </div>

      <h3>{textMsg}</h3>
    </div>
  );
}
