import React from "react";
const MediaCard = (props) => {
  return (
    <div className="card col-3" style={{border:'none'}}>
      <div className="card-img">
        <img src={props.img} width='100%' alt="Mobirise" />
      </div>
      <div className="card-box text-center mt-3">
        <h4 className="card-title">{props.title}</h4>
        <p className='text-muted'>{props.content}</p>
      </div>
    </div>
  );
};
export default MediaCard;
