import { observer } from "mobx-react-lite";

const SongCard = observer(({ songDetails, songsStateObj }) => {
  return (
    <>
      <button
        width={300}
        onClick={() => {
          songsStateObj.setCurrentSong(
            songDetails.songName,
            songDetails.songEmbed,
            songDetails.songID,
          );
        }}
      >
        <img src={songDetails.pictureURL} height={250} width={250} />
        <p>
          {songDetails.songName} <br /> {songDetails.genre}
        </p>
      </button>
    </>
  );
});

export default SongCard;
