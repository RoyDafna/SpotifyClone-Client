export default function Navbar({ styles, songsStateObj, loginStateObj }) {
  return (
    <>
      <div className={styles.topnav}>
        <button
          onClick={() => {
            loginStateObj.logOut();
          }}
        >
          {"Logout"}
        </button>
        <button href="#news">News</button>
        <button href="#contact">Contact</button>
        <button href="#about">About</button>
      </div>
      <br />
    </>
  );
}
