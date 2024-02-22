import { observer } from "mobx-react-lite";

const SongEmbed = observer(({ currentSong, songEmpty }) => {
  return (
    <>
      <iframe
        hidden={songEmpty}
        width="640"
        height="360"
        src={currentSong.songEmbed}
        title={currentSong.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="true"
      ></iframe>
    </>
  );
});

export default SongEmbed;
