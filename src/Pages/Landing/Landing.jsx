import React from "react";
import HomeCover from "../../Components/HomeCover/HomeCover";
import MediaCardGroup from "../../Components/MediaCardGroup/MediaCardGroup";
import { useSelector } from "react-redux";
const Landing = () => {
  const albums = useSelector((state) => state.albums);
  const photos = useSelector((state) => state.photos);
  return (
    <div>
      <HomeCover />
      <MediaCardGroup photos={photos?photos:{}} albums={albums?albums:{}} />
    </div>
  );
};

export default Landing;
