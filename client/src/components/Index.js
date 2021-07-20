import React, { useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import NavBar from './NavBar/NavBar.js'
import axios from 'axios'
import {addGame, loadingGame, addGenres, addPlatforms} from '../Redux/actions/index'
import { useDispatch, useSelector } from "react-redux"
import Catalogue from './Cards/CardsCatalogue.jsx'
import Selectors from './SearchBar/Selectors'
// import Cards from './Cards/Cards.js'
// import Card from './Cards/Card.js'
import './Index.css'


const Index = ()=>{
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getVideogames = async ()=>{
      dispatch(loadingGame(true))
      const resp = await axios.get('http://localhost:3001/videogames')
      const respGenres = await axios.get('http://localhost:3001/genres')
      const respPlatforms = await axios.get('http://localhost:3001/platforms')
      dispatch(addGenres(respGenres.data))
      dispatch(addPlatforms(respPlatforms.data))
      dispatch(addGame(resp.data));
      dispatch(loadingGame(false))    
    }
    getVideogames()        
  },[]);

  const { loading, totalVg } = useSelector(store => store) 
  
  return(
  <>
  <div>PI</div>
  <NavBar />
  <div className='addgame'>
    <h3>Add Game</h3>
    <Link to='/addgame'>
      <button>+</button>
    </Link>
  </div>
  <div className='selectors'>
    <Selectors />
  </div>
  <div>
    <Route exact path='/index' render={() => (<Catalogue />)} />
  </div>
  </>
)
}

export default Index;