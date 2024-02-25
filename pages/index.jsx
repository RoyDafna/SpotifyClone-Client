import { songsState } from "../states/songsState";
import SongEmbed from "../components/SongEmbed";
import Login from "../components/Login";
import Register from "../components/Register";
import SearchBar from "../components/SearchBar";
import ContentList from "../components/ContentList";
import Navbar from "../components/Navbar";
import NavbarStyles from "../Navbar.module.css";

export default function App() {
  const songsStateObj = new songsState();

  return (
    <>
      <Navbar
        styles={NavbarStyles}
        songsStateObj={songsStateObj}
      />

      <Login songsStateObj={songsStateObj} />
      <Register songsStateObj={songsStateObj} />

      <SearchBar songsStateObj={songsStateObj} />
      <SongEmbed songsStateObj={songsStateObj} />
      <ContentList songsStateObj={songsStateObj} />
    </>
  );
}
