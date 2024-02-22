import { computed, makeObservable, observable, action, autorun } from "mobx";

export class clientState {
  currentSong = {
    name: "The Beatles - Here Comes The Sun (2019 Mix)",
    songEmbed: "https://www.youtube.com/embed/KQetemT1sWc",
  };
  contentOnScreen = [];

  constructor() {
    makeObservable(this, {
      currentSong: observable,
      contentOnScreen: observable,
      setCurrentSong: action,
      setContentOnScreen: action,
      songEmpty: computed,
    });
  }

  setCurrentSong() {
    this.currentSong = { name: "", songEmbed: "" };
  }

  setContentOnScreen() {
    this.contentOnScreen = [];
  }

  get songEmpty() {
    return this.currentSong.name.length === 0 || this.currentSong.songEmbed.length === 0;
  }
}
