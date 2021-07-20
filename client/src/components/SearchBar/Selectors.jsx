import React from 'react'
import ButtonFilters from '../Filters/ButtonFilters.jsx'
import GenreFilter from '../Filters/GenreFilter.jsx'
import SearchBar from './SearchBar'
import CreatedFilter from '../Filters/CreatedFilter.jsx'


export default function Selectors() {
    return (
        <>
            <div className="selectors-container">
            <GenreFilter />
            <ButtonFilters />
            <CreatedFilter />
            <SearchBar />
            </div>        
        </>
    )
}
