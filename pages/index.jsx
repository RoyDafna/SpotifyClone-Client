import { clientState } from "../states/clientState";
import SongEmbed from "../components/SongEmbed";
import Login from "../components/Login";
import { loginState } from "../states/loginState";

export default function App() {
  const clientStateObj = new clientState();
  const loginStateObj = new loginState();
  return (
    <>
      <SongEmbed
        currentSong={clientStateObj.currentSong}
        songEmpty={clientStateObj.songEmpty}
      />
      <Login loginStateObj={loginStateObj}/>
    </>
  );
}
