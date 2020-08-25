import {
  FETCH_ALBUMS,

} from "./AlbumActions";
import { createReducer } from "../../common/util/reducerUtils";

const initialState = [];

const fetchAlbums = (state, payload) => {
  return payload.albums;
};

export default createReducer(initialState, {
  [FETCH_ALBUMS ]: fetchAlbums,
});
