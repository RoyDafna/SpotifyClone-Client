import { observer } from "mobx-react-lite";
import SongCard from "./SongCard";
import ErrorMessage from "./ErrorMessage";
import ArtistCard from "./ArtistCard";

const ContentList = observer(({ songsStateObj }) => {
  if (songsStateObj.contentMode == "Songs") {
    if (songsStateObj.contentOnScreen.length > 0) {
    }
    return (
      <>
        <div hidden={!songsStateObj.showContent}>
          <ErrorMessage
            message={"No Songs to Show"}
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
  } else if (songsStateObj.contentMode == "Artists") {
    return (
      <>
        <div hidden={!songsStateObj.showContent}>
          <ErrorMessage
            message={"No Artists to Show"}
            trigger={songsStateObj.contentOnScreen.length == 0}
          />
          {songsStateObj.contentOnScreen.map((artist) => (
            <ArtistCard
              artistDetails={{
                artistName: artist.name,
                pictureURL: artist.pictureURL,
                mainGenre: artist.mainGenre,
                birthdate: new Date(artist.birthdate).getFullYear(),
                artistID: artist._id,
              }}
              songsStateObj={songsStateObj}
            />
          ))}
        </div>
      </>
    );
  } else if (songsStateObj.contentMode == "Albums") {
    return <></>;
  }
});

export default ContentList;
