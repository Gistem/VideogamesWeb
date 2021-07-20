
import React from "react";
import { filterCreated } from "../../Redux/actions/index";
import { useDispatch,useSelector } from "react-redux";
import Filters  from "../Filters/Filters.jsx";

const ButtonFilters = () => {
  const dispatch = useDispatch();
  const az = "az";
  const za = "za";
  const asc = "asc";
  const des = "des"
 
const Games = useSelector(store=> store.videogames);

const handleF = (type) =>{ 
  return dispatch(Filters(Games,type)) 
}

  return (
    <>
      <div className="Filters">
          <button
            className="filter-btn"
            onClick={() => handleF(az)}> A-Z </button>
          <button
            className="filter-btn"
            onClick={() => handleF(za)}> ZA </button>
          <button
            className="filter-btn"
            onClick={() => handleF(asc)}> ↑	</button>
          <button
            className="filter-btn"
            onClick={() => handleF(des)}> ↓ </button>
          {/* <button
          className="filter-btn"
          onClick={() => dispatch(filterCreated("all"))}>©</button> */}
        </div>
    </>
  );
};

export default ButtonFilters;