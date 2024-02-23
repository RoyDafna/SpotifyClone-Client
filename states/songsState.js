import { computed, makeObservable, observable, action, autorun } from "mobx";
import axios from "axios";

export class songsState {
  currentSongName = "";
  currentSongEmbed = "";
  songsOnScreen = [];
  playSong = false;
  showSongs = false;

  constructor() {
    makeObservable(this, {
      currentSongName: observable,
      currentSongEmbed: observable,
      songsOnScreen: observable,
      playSong: observable,
      showSongs: observable,
      setCurrentSong: action,
      hideSongs: action,
      searchSongsByName: action,
    });
  }

  hideSongs() {
    this.showSongs = false;
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
      console.log(this.songsOnScreen.at(0));
    } catch (e) {
      console.log(e);
    }
  };
}
