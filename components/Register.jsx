import { observer } from "mobx-react-lite";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Register = observer(({ songsStateObj }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div hidden={songsStateObj.loggedIn || songsStateObj.loginOrRegister}>
        <h2>Register</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            songsStateObj.registerUser(username, password);
            setUsername("");
            setPassword("");
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            songsStateObj.toggleLoginOrRegister();
          }}
        >
          Login
        </button>
        <ErrorMessage
          message="User with this username already exists"
          trigger={songsStateObj.userExists}
        />
      </div>
    </>
  );
});
export default Register;
