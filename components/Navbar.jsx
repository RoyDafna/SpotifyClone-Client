import { observer } from "mobx-react-lite";

const Navbar = observer(({ styles, songsStateObj }) => {
  return (
    <>
      <div className={styles.topnav}>
        <button
          className={songsStateObj.searchMode == "Songs" ? styles.active : ""}
          onClick={() => {
            if (songsStateObj.searchMode != "Songs") {
              songsStateObj.setSearchMode("Songs");
              songsStateObj.hideSongs();
            }
          }}
        >
          Songs
        </button>
        <button
          className={songsStateObj.searchMode == "Artists" ? styles.active : ""}
          onClick={() => {
            if (songsStateObj.searchMode != "Artists") {
              songsStateObj.setSearchMode("Artists");
              songsStateObj.hideSongs();
            }
          }}
        >
          Artists
        </button>
        <button
          className={songsStateObj.searchMode == "Albums" ? styles.active : ""}
          onClick={() => {
            if (songsStateObj.searchMode != "Albums") {
              songsStateObj.setSearchMode("Albums");
              songsStateObj.hideSongs();
            }
          }}
        >
          Albums
        </button>
        <button
          style={{ float: "right" }}
          onClick={() => {
            songsStateObj.logOut();
          }}
        >
          Logout
        </button>
      </div>
      <br />
    </>
  );
});

export default Navbar;
