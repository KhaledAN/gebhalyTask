export const FETCH_ALBUMS = "FETCH_ALBUMS";

export const loadAlbums = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/albums");
      let albums = await res.json();
      albums = albums.slice(0, 4);
      albums.filter((a, i) => a.id == albums[i - 1]);
      dispatch({ type: FETCH_ALBUMS, payload: { albums } });
    } catch (err) {
      console.log(err);
    }
  };
};
