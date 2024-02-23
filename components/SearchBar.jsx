import { observer } from "mobx-react-lite";
import { useState } from "react";

const SearchBar = observer(({ songsStateObj, loginStateObj }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchSong = (searchTerm) => {
    songsStateObj.searchSongsByName(searchTerm);
  };
  return (
    <>
      <div hidden={!loginStateObj.loggedIn}>
        <input
          hidden={!loginStateObj.loggedIn}
          placeholder="Search Songs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              searchSong(searchTerm);
            }
          }}
        />
        <button
          onClick={() => {
            searchSong(searchTerm);
          }}
        >
          Search
        </button>
        <br/>
        <br/>
      </div>
    </>
  );
});

export default SearchBar;
