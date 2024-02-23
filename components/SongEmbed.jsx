import { observer } from "mobx-react-lite";

const SongEmbed = observer(({ songsStateObj }) => {
  return (
    <>
      <iframe
        hidden={!songsStateObj.playSong}
        width="640"
        height="360"
        src={songsStateObj.currentSongEmbed}
        title={songsStateObj.currentSongName}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="true"
      ></iframe>
    </>
  );
});

export default SongEmbed;
