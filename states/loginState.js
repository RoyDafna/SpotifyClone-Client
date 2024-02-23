import { computed, makeObservable, observable, action, autorun } from "mobx";
import axios from "axios";

export class loginState {
  user = { username: "", password: "" };
  firstLoginAttempt = true;
  userExists = false;
  loginOrRegister = true; //true = login, false = register

  constructor() {
    makeObservable(this, {
      user: observable,
      firstLoginAttempt: observable,
      userExists: observable,
      loginOrRegister: observable,
      setUser: action,
      logOut: action,
      toggleLoginOrRegister: action,
      registerUser: action,
      loggedIn: computed,
    });
  }

  logOut() {
    this.user.username = "";
    this.user.password = "";
    this.firstLoginAttempt = true;
  }

  toggleLoginOrRegister() {
    this.loginOrRegister = !this.loginOrRegister;
  }

  setUser = async (username, password) => {
    try {
      const url =
        "http://localhost:3001/api/users?username=" +
        username +
        "&password=" +
        password;
      await axios.get(url).then((res) => {
        if (res.status.toFixed() == 200 && res.data.length > 0) {
          this.user.username = res.data[0].username;
          this.user.password = res.data[0].password;
        }
        this.firstLoginAttempt = false;
      });
    } catch (e) {
      console.log(e);
    }
  };

  registerUser = async (username, password) => {
    try {
      const url = "http://localhost:3001/api/users";
      await axios.post(url, { username, password }).then((res) => {
        if (res.status.toFixed() == 200 && res.data != "User Exists") {
          this.user.username = username;
          this.user.password = password;
        } else {
          this.userExists = true;
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  get loggedIn() {
    return this.user.username.length > 0;
  }
}
