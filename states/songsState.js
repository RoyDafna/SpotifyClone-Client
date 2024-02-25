import { computed, makeObservable, observable, action, autorun } from "mobx";
import axios from "axios";

export class songsState {
  currentSongName = "";
  currentSongEmbed = "";
  contentOnScreen = [];
  playSong = false;
  showContent = false;
  user = { username: "", password: "", id: "" };
  firstLoginAttempt = true;
  userExists = false;
  likedSongs = [];
  contentMode = "";

  loginOrRegister = true; //true = login, false = register
  searchMode = "";

  constructor() {
    makeObservable(this, {
      likedSongs: observable,
      currentSongName: observable,
      searchMode: observable,
      contentMode: observable,
      currentSongEmbed: observable,
      contentOnScreen: observable,
      playSong: observable,
      showContent: observable,
      setCurrentSong: action,
      setContentMode: action,
      searchAlbumSongs: action,
      likeSong: action,
      hideContent: action,
      searchSongsByName: action,
      setSearchMode: action,
      getLikedSongs: action,
      clearLikedSongs: action,
      getTopTenSongs: action,
      searchArtistsByName: action,
      searchArtistSongs: action,
      user: observable,
      firstLoginAttempt: observable,
      userExists: observable,
      loginOrRegister: observable,
      setUser: action,
      logOut: action,
      toggleLoginOrRegister: action,
      registerUser: action,
      loggedIn: computed,
      isLikedSong: action,
      searchAlbumsByName: action,
      getArtistNameByID: action,
    });
  }

  setContentMode(mode) {
    this.contentMode = mode;
  }

  getArtistNameByID = async (artistID) => {
    console.log("yep");
    try {
      let name = "";
      const url = "http://localhost:3001/api/artists/" + artistID;
      await axios.get(url).then((res) => {
        name = res.data.name;
      });
      return name;
    } catch (e) {
      console.log(e);
    }
  };

  searchAlbumsByName = async (albumName) => {
    try {
      const url = "http://localhost:3001/api/albums/" + albumName;
      await axios.get(url).then((res) => {
        this.contentOnScreen = res.data;
        this.contentOnScreen.map(async (album) => {
          album.artistName = await this.getArtistNameByID(album.artistID);
        });
        console.log(this.contentOnScreen.length);
        this.contentMode = "Albums";
        this.showContent = true;
      });
    } catch (e) {
      console.log(e);
    }
  };

  searchAlbumSongs = async (albumID) => {
    try {
      const url = "http://localhost:3001/api/albums/songs/" + albumID;
      console.log(url);
      await axios.get(url).then((res) => {
        this.contentOnScreen = [];
        res.data.map((song) => {
          this.contentOnScreen.push(song.song);
        });
        this.contentMode = "Songs";
      });
      console.log(this.contentOnScreen.length);
    } catch (e) {
      console.log(e);
    }
  };

  isLikedSong(songID) {
    return this.likedSongs.includes(songID);
  }

  likeSong = async (songID) => {
    try {
      let url = "";
      if (this.isLikedSong(songID)) {
        url = "http://localhost:3001/api/users/unlikeSong";
        this.likedSongs.splice(this.likedSongs.indexOf(songID));
      } else {
        url = "http://localhost:3001/api/users/likeSong";
        this.likedSongs.push(songID);
      }
      await axios.post(url, { userID: this.user.id, songID: songID });
    } catch (e) {
      console.log(e);
    }
  };

  hideContent() {
    this.showContent = false;
  }

  searchArtistSongs = async (artistID) => {
    try {
      const url = "http://localhost:3001/api/artists/songs/" + artistID;
      await axios.get(url).then((res) => {
        this.contentOnScreen = res.data;
        this.contentMode = "Songs";
      });
    } catch (e) {
      console.log(e);
    }
  };

  getTopTenSongs = async () => {
    try {
      const url = "http://localhost:3001/api/songs/topTen";
      await axios.get(url).then((res) => {
        this.contentOnScreen = res.data;
        this.showContent = true;
      });
    } catch (e) {
      console.log(e);
    }
  };

  clearLikedSongs() {
    this.likedSongs = [];
  }

  getLikedSongs = async () => {
    try {
      const url = "http://localhost:3001/api/users/likedSongs/" + this.user.id;
      axios.get(url).then((res) => {
        this.likedSongs = res.data[0].likedSongsIDs;
      });
    } catch (e) {
      console.log(e);
    }
  };

  setSearchMode(mode) {
    this.searchMode = mode;
  }

  setCurrentSong = async (name, songEmbed, songID) => {
    this.playSong = true;
    this.currentSongName = name;
    this.currentSongEmbed = songEmbed;

    try {
      const url = "http://localhost:3001/api/songs/" + songID;
      await axios.post(url);
    } catch (e) {
      console.log(e);
    }
  };

  searchArtistsByName = async (searchTerm) => {
    try {
      const url = "http://localhost:3001/api/artists?name=" + searchTerm;
      await axios.get(url).then((res) => {
        console.log(url);
        if (res.status.toFixed() == 200) {
          this.contentOnScreen = res.data;
          this.showContent = true;
          this.contentMode = "Artists";
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  searchSongsByName = async (searchTerm) => {
    try {
      const url = "http://localhost:3001/api/songs/?name=" + searchTerm;
      await axios.get(url).then((res) => {
        console.log(url);
        if (res.status.toFixed() == 200) {
          this.contentOnScreen = res.data;
          this.showContent = true;
          this.contentMode = "Songs";
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  logOut() {
    this.user.username = "";
    this.user.password = "";
    this.user.id = "";
    this.firstLoginAttempt = true;
    this.showContent = false;
    this.playSong = false;
    this.likedSongs = [];
    this.searchMode = "";
    this.contentMode = "";
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
          this.user.id = res.data[0]._id;
          this.getLikedSongs();
          this.searchMode = "Songs";
          this.contentMode = "Songs";
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
