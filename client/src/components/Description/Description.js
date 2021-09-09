import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import "./Description.css";

const Description = (location) => {
  function back() {
    window.history.back();
  }

  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  // console.log('acaaaaaaaaa',data)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then((response) => {
        setData({ ...response.data });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <>
      <div className="page-container">
        <div className="button">
          {/* BUTTON BACK */}
          {
            <button className="close" onClick={back}>
              X
            </button>
          }
        </div>
        <div className="gameInfo">
          <div className="information">
            <h2>{data.name} </h2>
            <h3>Rating</h3>
            <h2>{data.rating}</h2>
            <h3>Released</h3>
            <p>{data.released}</p>
            <h3>Platforms</h3>
            {data.platforms.map((p) => {
              return <p>{p.name || p.platform.name}</p>;
            })}
            <h3>Genres</h3>
            {data.genres.map((p) => {
              return <p>{p.name}</p>;
            })}
          </div>
          <div className="imageInfo">
            <div className="image">
              <img src={data.background_image} alt="" /> {/* IMAGEN */}
            </div>
          </div>
        </div>
        <div className="desc">
          <p>
            {parse(`${data.description}`)} {/* DESCRIPTION */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
