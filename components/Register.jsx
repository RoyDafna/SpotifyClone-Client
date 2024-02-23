import { observer } from "mobx-react-lite";
import { useState } from "react";

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
        <p
          style={{
            color: "red",
            border: true,
            borderWidth: "2px",
            borderColor: "red",
          }}
          hidden={!loginStateObj.userExists}
        >
          User with this username already exists
        </p>
      </div>
    </>
  );
});
export default Register;
