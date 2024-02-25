import { observer } from "mobx-react-lite";

const Navbar = observer(({ styles, songsStateObj }) => {
  return (
    <>
      <div className={styles.topnav}>
        <button
          disabled={!songsStateObj.loggedIn}
          className={songsStateObj.searchMode == "Songs" ? styles.active : ""}
          onClick={() => {
            if (songsStateObj.searchMode != "Songs") {
              songsStateObj.setSearchMode("Songs");
              songsStateObj.setContentMode("Songs");

              songsStateObj.hideContent();
            }
          }}
        >
          Songs
        </button>
        <button
          disabled={!songsStateObj.loggedIn}
          className={
            songsStateObj.searchMode == "Artists" ? styles.active : ""
          }
          onClick={() => {
            if (songsStateObj.searchMode != "Artists") {
              songsStateObj.setSearchMode("Artists");
              songsStateObj.setContentMode("Artists");

              songsStateObj.hideContent();
            }
          }}
        >
          Artists
        </button>
        <button
          disabled={!songsStateObj.loggedIn}
          className={songsStateObj.searchMode == "Albums" ? styles.active : ""}
          onClick={() => {
            if (songsStateObj.searchMode != "Albums") {
              songsStateObj.setSearchMode("Albums");
              songsStateObj.setContentMode("Albums");
              songsStateObj.hideContent();
            }
          }}
        >
          Albums
        </button>
        <button
          disabled={!songsStateObj.loggedIn}
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
