import React from 'react'
import ButtonFilters from '../Filters/ButtonFilters.jsx'
import GenreFilter from '../Filters/GenreFilter.jsx'
import SearchBar from './SearchBar'
import CreatedFilter from '../Filters/CreatedFilter.jsx'
import {Link} from "react-router-dom"

import './Selectors.css'

export default function Selectors() {
    return (
        <>
            <div className="selectors-container">
            <GenreFilter/>
            <CreatedFilter />
            <ButtonFilters />
            <SearchBar />
            <div className="addgame">
            <Link to="/addgame">
              <button>Add Game</button>
            </Link>
          </div>
            </div>        
        </>
    )
}
