import { observer } from "mobx-react-lite";
import { useState } from "react";

const SongCard = observer(({ songDetails, songsStateObj }) => {
  const [heartIcon, setHeartIcon] = useState(
    songsStateObj.isLikedSong(songDetails.songID) == true ? "❤️" : "🤍"
  );

  return (
    <>
      <div>
        <button
          width={300}
          onClick={() => {
            songsStateObj.setCurrentSong(
              songDetails.songName,
              songDetails.songEmbed,
              songDetails.songID
            );
          }}
        >
          <img src={songDetails.pictureURL} height={250} width={250} />
          <p>
            {songDetails.songName} <br />
            {songDetails.genre} <br />
            {"Entered Site at " + songDetails.releaseDate}
          </p>
        </button>
        <br />
        <button
          onClick={() => {
            songsStateObj.likeSong(songDetails.songID);
            setHeartIcon(heartIcon == "❤️" ? "🤍" : "❤️");
          }}
        >
          {heartIcon}
        </button>
      </div>
      <br />
    </>
  );
});

export default SongCard;
