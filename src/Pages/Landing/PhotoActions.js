export const FETCH_PHOTOS = "FETCH_PHOTOS";

export const loadPhotos = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/photos");
      let photos = await res.json();
      photos = photos.filter((p, i) => i%50==0).slice(0,4);
      dispatch({ type: FETCH_PHOTOS, payload: { photos } });
    } catch (err) {
      console.log(err);
    }
  };
};
