import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl } from "../../Constants/Constant";
import "./Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setInterval(() => {
      axios.get(props.url).then((response) => {
        let x = Math.floor(Math.random() * 20);
        console.log(response.data.results[x]);
        setMovie(response.data.results[x]);
      });
    }, 5000);
  }, []);

  return (
    <div className="Container">
      <div
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
        className="backDrop"
      >
        <div className="content">
          <h1>{movie ? movie.title : ""}</h1>
          <div className="banner_button">
            <button>Play</button>
            <button>My List</button>
          </div>
          <h2>{movie.overview}</h2>
        </div>
        <div className="Fade"></div>
      </div>
    </div>
  );
}

export default Banner;
