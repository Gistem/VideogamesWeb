import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCreated } from "../../Redux/actions/index.js";

const CreatedFilter = () => {
    const dispatch = useDispatch();
    const [optionCreated, setOptionCreated] = useState(null);
    const { created } = useSelector((store) => store);
  
    const Games = useSelector(store=> store.allGames);
  
  const handleCreated = (e) => {
    setOptionCreated(e.target.value)
        return dispatch(filterCreated(Games, e.target.value))
  } 
    return (
      <>
          <div className="selects">
          <select
           className="filter-select"
            value={optionCreated}
            onChange={(e) => handleCreated(e)} >
            <option value="" disabled>
              Created
            </option>
            <option value="all">All</option>
            <option value={true}>True</option>;
            <option value={false}>False</option>
          </select>
          </div>
      </>
    );
  };
  
  export default CreatedFilter;