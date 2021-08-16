import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { clearSearch, loadingGame } from '../../Redux/actions/index.js';

import Card from '../Cards/Card.js';
import { filters } from '../Filters/Filters.jsx'
import Pagination from '../Pagination/Pagination'
import './Cards.css'


const Cards = ({cards}) => {

    const dispatch = useDispatch()
    //STORE
    const loading = useSelector(store => store.loading)
    const videogamesPerPage = useSelector(store => store.videogamesPerPage)
    const currentPage = useSelector(store=> store.currentPage)
    // const Games = useSelector((store) => store.filters)
        
    //VARIABLES INTERNAS
    //const filteredGames =  filters(cards, Games) /// LA COMENTO AGUSS
    const IndexLastGame = currentPage * videogamesPerPage
    const IndicePrimerVideogame = IndexLastGame - videogamesPerPage
    // const currentGames = filteredGames.slice(IndicePrimerVideogame, IndexLastGame)
    
    const games = useSelector(store => store.videogames)
    const currentGames = games.slice(IndicePrimerVideogame, IndexLastGame)
  console.log(currentGames, 'aquiiiiiiiiiiiiiiiii');
    //REFRESH ESTADO
    useEffect (() => {
      // const allGames = () => {
        dispatch(loadingGame(true));
        dispatch(clearSearch([]));
        dispatch(loadingGame(false));    
      // }  
      
    }, [dispatch])
  
    if (loading) {
      return <div className="loading">
        <div className="lds-hourglass"></div>
      </div>
    } else {
      return (
        <div className='cards'>
          {currentGames.map((videogame, index) => {
            return (
              <Card key={index} videogame={videogame} />
            )
          })}
          
            <Pagination cardsPerPage={videogamesPerPage} totalCards={games.length} />
          
        </div>
      )
    }  
  
  }
export default Cards;
