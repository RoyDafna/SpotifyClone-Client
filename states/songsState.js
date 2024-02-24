import { computed, makeObservable, observable, action, autorun } from "mobx";
import axios from "axios";

export class songsState {
  currentSongName = "";
  currentSongEmbed = "";
  songsOnScreen = [];
  playSong = false;
  showSongs = false;
  user = { username: "", password: "" };
  firstLoginAttempt = true;
  userExists = false;
  loginOrRegister = true; //true = login, false = register
  searchMode = "Songs"

  constructor() {
    makeObservable(this, {
      currentSongName: observable,
      searchMode: observable,
      currentSongEmbed: observable,
      songsOnScreen: observable,
      playSong: observable,
      showSongs: observable,
      setCurrentSong: action,
      hideSongs: action,
      searchSongsByName: action,
      setSearchMode: action,
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

  hideSongs() {
    this.showSongs = false;
  }

  setSearchMode(mode) {
    this.searchMode = mode;
  }

  setCurrentSong(name, songEmbed) {
    this.playSong = true;
    this.currentSongName = name;
    this.currentSongEmbed = songEmbed;
  }

  searchSongsByName = async (searchTerm) => {
    try {
      const url = "http://localhost:3001/api/songs/?name=" + searchTerm;
      await axios.get(url).then((res) => {
        console.log(url);
        if (res.status.toFixed() == 200) {
          this.songsOnScreen = res.data;
          this.showSongs = true;
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  logOut() {
    this.user.username = "";
    this.user.password = "";
    this.firstLoginAttempt = true;
    this.showSongs = false;
    this.playSong = false;
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
