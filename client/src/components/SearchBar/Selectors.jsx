import React from 'react'
import ButtonFilters from '../Filters/ButtonFilters.jsx'
import GenreFilter from '../Filters/GenreFilter'
import SearchBar from './SearchBar'


export default function Selectors() {
    return (
        <>
            <div className="selectors-container">
            <GenreFilter />
            <ButtonFilters />
            <SearchBar />
            </div>        
        </>
    )
}
