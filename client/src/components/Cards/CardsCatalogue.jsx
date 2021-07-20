import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards.jsx'


export default function Catalogue() {
 const [ videogames , setVideogames ] = useState([])
 
      //STORE
  const totalVg = useSelector(store => store.videogames)
  const searchGames = useSelector(store => store.search)
  

  useEffect(() => {
      if(searchGames.length > 0){
          setVideogames([...searchGames])
      } else {
          setVideogames([...totalVg])
      }
  }, [searchGames, totalVg])

  
    return (
        <>{ videogames ?
        <Cards cards={ videogames } />
        : <span>loading</span>}
        </>
    )
}