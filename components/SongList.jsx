import { observer } from "mobx-react-lite";
import SongCard from "./SongCard";
import ErrorMessage from "./ErrorMessage";

const SongList = observer(({ songsStateObj }) => {
  return (
    <>
      <div hidden={!songsStateObj.showSongs}>
        <ErrorMessage
          message={"No " + songsStateObj.searchMode + " to Show"}
          trigger={songsStateObj.songsOnScreen.length == 0}
        />
        {songsStateObj.songsOnScreen.map((song) => (
          <SongCard
            songDetails={{
              songName: song.name,
              songEmbed: song.songEmbed,
              pictureURL: song.pictureURL,
              genre: song.genre,
            }}
            songsStateObj={songsStateObj}
          />
        ))}
      </div>
    </>
  );
});

export default SongList;
