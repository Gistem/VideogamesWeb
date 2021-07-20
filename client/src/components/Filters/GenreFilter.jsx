import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterGenre, filterPlatform } from "../../Redux/actions/index.js";
import Filters  from "../Filters/Filters.jsx";

const GenreFilter = () => {
  const dispatch = useDispatch();
  const [optionGenre, setOptionGenre] = useState("");
  const [optionPlatform, setoptionPlatform] = useState("");
  const { genres, platforms, filters } = useSelector((store) => store);

  const Games = useSelector(store=> store.videogames);

  // useEffect(() => {
  //   setOptionGenre(filters.genre);
  //   setoptionPlatform(filters.platform);
  // }, [filters]);

const handleGenre = (e) => {
  setOptionGenre(e.target.value)
      return dispatch(filterGenre(Games,e.target.value))
}
const handlePlatforms = (e) => {
  setoptionPlatform(e.target.value)
      return dispatch(filterPlatform(Games,e.target.value))
}

  return (
    <>
        <div className="selects">
        <select
         className="filter-select"
          value={optionGenre}
          onChange={(e) => handleGenre(e)}
        >
          <option value="" disabled>
            Genre
          </option>
          <option value="all">All</option>
          {genres.map((genre) => {
            return <option key={genre.name} value={genre.name}>{genre.name} </option>;
          })}

        </select>
        <select
          className="filter-select"
          value={optionPlatform}
          onChange={(e) => handlePlatforms(e)}
        >
          <option value="" disabled>
            Platforms
          </option>
          <option value="all">All</option>
          {platforms.map((platform) => {
            return <option key={platform.name} value={platform.name}>{platform.name} </option>;
          })}
        </select>
        </div>
    </>
  );
};

export default GenreFilter;
