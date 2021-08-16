import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ videogame }) => {
  return (
    <>
      {videogame && (
        <div className="carta" key={videogame.id}>
          <img src={videogame.background_image} alt="" />
          <div className="descripcion">
            <h1>{videogame.name}</h1>
            <h3>Rating: {videogame.rating}</h3>
            <h3>Released: {videogame.released}</h3>
            <div>
              {videogame.platforms &&
                videogame.platforms.map((g) => {
                  {
                    // if (g.name === "PC") {
                    return <span className="tooltiptext">{g.name}</span>;
                  }
                  //   return <span className="tooltiptext">{g.name}</span>;
                  // }
                })}
            </div>
            <div className="genres">
              Genres:
              {videogame.genres &&
                videogame.genres.map((g, index) => {
                  while (index < 3)
                    return <div className="genre">{g.name} </div>;
                })}
            </div>
            <Link to={"/description/" + videogame.id}>
              <button className="btn">See more</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
