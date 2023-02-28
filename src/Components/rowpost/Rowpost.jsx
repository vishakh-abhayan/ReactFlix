import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { imageUrl } from "../../Constants/Constant";
function Rowpost(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, []);

  return (
    <div>
      <div className="postersRow">
        <h2>{props.title}</h2>
        <div className={props.isSmall ? "postersSM" : "posters"}>
          {movie.map((obj) => {
            return (
              <img
                className={props.isSmall ? "smPost" : "postImg"}
                src={`${imageUrl + obj.poster_path}`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rowpost;
