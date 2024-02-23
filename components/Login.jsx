import { observer } from "mobx-react-lite";
import { useState } from "react";

const Login = observer(({ loginStateObj }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div hidden={loginStateObj.loggedIn || !loginStateObj.loginOrRegister}>
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
            loginStateObj.setUser(username, password);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            loginStateObj.toggleLoginOrRegister();
          }}
        >
          Register
        </button>
        <p
          style={{
            color: "red",
            border: true,
            borderWidth: "2px",
            borderColor: "red",
          }}
          hidden={loginStateObj.firstLoginAttempt}
        >
          Wrong username or password
        </p>
      </div>
    </>
  );
});
export default Login;
