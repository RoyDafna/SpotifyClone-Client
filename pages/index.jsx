import { songsState } from "../states/songsState";
import SongEmbed from "../components/SongEmbed";
import Login from "../components/Login";
import { loginState } from "../states/loginState";
import Register from "../components/Register";
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";

export default function App() {
  const songsStateObj = new songsState();
  const loginStateObj = new loginState();

  return (
    <>
      <Login loginStateObj={loginStateObj} />
      <Register loginStateObj={loginStateObj} />

      <SearchBar songsStateObj={songsStateObj} loginStateObj={loginStateObj} />
      <SongEmbed songsStateObj={songsStateObj} loginStateObj={loginStateObj} />
      <SongList songsStateObj={songsStateObj} />
    </>
  );
}
