import { observer } from "mobx-react-lite";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Register = observer(({ loginStateObj }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div hidden={loginStateObj.loggedIn || loginStateObj.loginOrRegister}>
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
            loginStateObj.registerUser(username, password);
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            loginStateObj.toggleLoginOrRegister();
          }}
        >
          Login
        </button>
        <ErrorMessage
          message="User with this username already exists"
          trigger={loginStateObj.userExists}
        />
      </div>
    </>
  );
});
export default Register;
