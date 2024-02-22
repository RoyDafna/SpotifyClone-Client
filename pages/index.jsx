import { clientState } from "../states/clientState";
import SongEmbed from "../components/SongEmbed";

export default function App() {
  const stateObj = new clientState();
  return (
    <>
      <SongEmbed
        currentSong={stateObj.currentSong}
        songEmpty={stateObj.songEmpty}
      />
    </>
  );
}
