import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>The videogame project</h1>
        <Link to="/index">
          <button className="btn-home">►</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
