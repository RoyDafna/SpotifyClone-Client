import { observer } from "mobx-react-lite";

const AlbumCard = observer(({ albumDetails, songsStateObj }) => {
  return (
    <>
      <div>
        <button
          width={300}
          onClick={() => {
            songsStateObj.searchAlbumSongs(albumDetails.albumID);
            songsStateObj.setContentMode("Albums");
          }}
        >
          <img src={albumDetails.pictureURL} height={250} width={250} />
          <p>
            {albumDetails.albumName} <br />
            {albumDetails.artistName} <br />
            {albumDetails.genre} <br />
            {"Entered Site on " + albumDetails.releaseDate}
          </p>
        </button>
      </div>
      <br />
    </>
  );
});

export default AlbumCard;
