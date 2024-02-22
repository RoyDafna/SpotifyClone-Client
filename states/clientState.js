import { computed, makeObservable, observable, action, autorun } from "mobx";
import axios from "axios";

export class clientState {
  currentSong = {
    name: "",
    songEmbed: "",
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
    return (
      this.currentSong.name.length === 0 ||
      this.currentSong.songEmbed.length === 0
    );
  }
}
