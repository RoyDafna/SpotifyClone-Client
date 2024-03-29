import { observer } from "mobx-react-lite";

const ArtistCard = observer(({ artistDetails, songsStateObj }) => {
  return (
    <>
      <div>
        <button
          width={300}
          onClick={() => {
            songsStateObj.searchArtistSongs(artistDetails.artistID);
            songsStateObj.setContentMode("Songs");
          }}
        >
          <img src={artistDetails.pictureURL} height={250} width={250} />
          <p>
            {artistDetails.artistName} <br />
            {artistDetails.mainGenre} <br />
            {"Born/Established in " + artistDetails.birthdate}
          </p>
        </button>
      </div>
      <br />
    </>
  );
});

export default ArtistCard;
