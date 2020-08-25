import React from "react";
import "./HomeCover.css";
const HomeCover = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="bg" />
      <div className="container da">
        <h1 class="display-6 text-uppercase text-light">mobirise templete</h1>
        <p class="lead w-50 text-light" >
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <a
          class="btn btn-warning text-light mr-2 text-uppercase"
          href="#"
          role="button"
        >
          free download
        </a>
        <a
          class="btn btn-outline-light text-light text-uppercase"
          href="#"
          role="button"
        >
          learn more
        </a>
      </div>
    </div>
  );
};
export default HomeCover;
