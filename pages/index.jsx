import { songsState } from "../states/songsState";
import SongEmbed from "../components/SongEmbed";
import Login from "../components/Login";
import { loginState } from "../states/loginState";
import Register from "../components/Register";
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";
import Navbar from "../components/Navbar";
import NavbarStyles from "../Navbar.module.css";

export default function App() {
  const songsStateObj = new songsState();
  const loginStateObj = new loginState();

  return (
    <>
      <Navbar
        styles={NavbarStyles}
        songsStateObj={songsStateObj}
        loginStateObj={loginStateObj}
      />

      <Login songsStateObj={songsStateObj} />
      <Register songsStateObj={songsStateObj} />

      <SearchBar songsStateObj={songsStateObj} loginStateObj={loginStateObj} />
      <SongEmbed songsStateObj={songsStateObj} loginStateObj={loginStateObj} />
      <SongList songsStateObj={songsStateObj} loginStateObj={loginStateObj}/>
    </>
  );
}
