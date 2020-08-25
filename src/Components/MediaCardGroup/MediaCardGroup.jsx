import React from "react";
import MediaCard from "./MediaCard/MediaCard";
const MediaCardGroup = (props) => {
  if (!props.albums) {
    return <div />;
  }
  if (!props.photos) {
    return <div />;
  }
  const cards = props.photos.map((p, i) => (
    <MediaCard img={p.url} title={props.albums[i].title.slice(0,12)} content={p.title} />
  ));
  return (
    <div className="container">
      <div className="row">{cards}</div>
    </div>
  );
};
export default MediaCardGroup;
