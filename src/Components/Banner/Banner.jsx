import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="backDrop">
        <div className="content">
          <h1>MOVIE NAME</h1>
          <div className="banner_button">
            <button>Play</button>
            <button>My List</button>
          </div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            maxime corrupti, soluta numquam inventore earum.
          </h2>
        </div>
        <div className="Fade"></div>
      </div>
    </div>
  );
}

export default Banner;
