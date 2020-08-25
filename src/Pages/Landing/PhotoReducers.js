import { FETCH_PHOTOS } from "./PhotoActions";
import { createReducer } from "../../common/util/reducerUtils";

const initialState = [];

const fetchPhotos = (state, payload) => {
  return payload.photos;
};

export default createReducer(initialState, {
  [FETCH_PHOTOS]: fetchPhotos,
});
