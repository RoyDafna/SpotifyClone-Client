import { observer } from "mobx-react-lite";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Login = observer(({ songsStateObj }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div hidden={songsStateObj.loggedIn || !songsStateObj.loginOrRegister}>
        <h2>Login</h2>
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
            songsStateObj.setUser(username, password);
            setUsername("");
            setPassword("");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            songsStateObj.toggleLoginOrRegister();
          }}
        >
          Register
        </button>
        <ErrorMessage
          message="Wrong username or password"
          trigger={!songsStateObj.firstLoginAttempt}
        />
      </div>
    </>
  );
});
export default Login;
