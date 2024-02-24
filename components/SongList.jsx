import { observer } from "mobx-react-lite";
import SongCard from "./SongCard";
import ErrorMessage from "./ErrorMessage";

const SongList = observer(({ songsStateObj }) => {
  return (
    <>
      <div hidden={!songsStateObj.showContent}>
        <ErrorMessage
          message={"No " + songsStateObj.searchMode + " to Show"}
          trigger={songsStateObj.contentOnScreen.length == 0}
        />
        {songsStateObj.contentOnScreen.map((song) => (
          <SongCard
            songDetails={{
              songName: song.name,
              songEmbed: song.songEmbed,
              pictureURL: song.pictureURL,
              genre: song.genre,
              releaseDate: new Date(song.releaseDate).toLocaleDateString(
                "en-us",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              ),
              songID: song._id,
            }}
            songsStateObj={songsStateObj}
          />
        ))}
      </div>
    </>
  );
});

export default SongList;
