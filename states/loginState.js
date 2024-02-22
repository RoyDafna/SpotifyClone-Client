import { computed, makeObservable, observable, action, autorun } from "mobx";
import axios from "axios";

export class loginState {
  user = { username: "", password: "" };
  firstLoginAttempt = true;

  constructor() {
    makeObservable(this, {
      user: observable,
      firstLoginAttempt: observable,
      setUser: action,
      loggedIn: computed,
    });
  }

  setUser = async (username, password) => {
    try {
      const url =
        "http://localhost:3001/api/users?username=" +
        username +
        "&password=" +
        password;
      console.log(url);
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

  get loggedIn() {
    return this.user.username.length > 0;
  }
}
