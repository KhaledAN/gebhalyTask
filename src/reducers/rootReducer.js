import { combineReducers } from "redux";
import AlbumReducer from "../Pages/Landing/AlbumReducer";
import PhotoReducers from "../Pages/Landing/PhotoReducers";

const rootReducer = combineReducers({
  albums: AlbumReducer,
  photos: PhotoReducers,
});
export default rootReducer;
