import { observer } from "mobx-react-lite";
import { useState } from "react";

const SearchBar = observer(({ songsStateObj }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function search(searchTerm) {
    if (songsStateObj.searchMode == "Songs") {
        songsStateObj.searchSongsByName(searchTerm);
    } else if (songsStateObj.searchMode == "Artists") {
    } else if (songsStateObj.searchMode == "Albums") {
    }

    setSearchTerm("");
  }

  return (
    <>
      <div hidden={!songsStateObj.loggedIn}>
      <button hidden={songsStateObj.searchMode != "Songs"} onClick={()=>{
        songsStateObj.getTopTenSongs();
      }}>Top Ten Songs</button> <br/>
        <input
          hidden={!songsStateObj.loggedIn}
          placeholder={"Search " + songsStateObj.searchMode}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              search(searchTerm);
            }
          }}
        />
        <button
          onClick={() => {
            search(searchTerm);
          }}
        >
          Search
        </button>
        <br />
        <br />
      </div>
    </>
  );
});

export default SearchBar;
