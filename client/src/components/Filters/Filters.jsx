import React from "react";
import {useDispatch} from "react-redux"

export default function Filters(Games,order) {
  
  return function(dispatch){
    var Vg;
   switch(order) {
       case 'az': {
         Vg = Games.sort((a, b) => a.name < b.name ? -1 : +(a.name > b.name)); break;};
 
       case 'za':{
          Vg = Games.sort((a, b) =>  a.name > b.name ? -1 : +(a.name < b.name)); break;}; 
       case 'des': {
          Vg = Games.sort((a, b) => a.rating < b.rating ? -1 : +(a.rating > b.rating)); break};
       case 'asc': {
         Vg = Games.sort((a, b) => a.rating > b.rating ? -1 : +(a.rating < b.rating)); break;};
       default: break
    };
    dispatch({type:'FILTER_ORDER' , payload: Vg})
  }


// desde aca fue la comentada:
    // if (filters.genre !== "all" && filters.genre.length > 0) {
    //   filteredGames = filteredGames.map((game) => {
    //     var status = false;
    //     game && game.genres.forEach((genre) => {
    //       if (genre.name === filters.genre) {
    //         status = true;
    //       }
    //     });
    //     if (status) return game;
    //     return null
    //   });
    //   filteredGames = filteredGames.filter((g) => g !== undefined);
    // }


    // if (filters.platform !== "all"  && filters.platform.length > 0) {
    //   filteredGames = filteredGames.map((game) => {
    //     var status = false;
    //     game.platforms.forEach((platform) => {
    //       if (platform.name === filters.platform) {
    //         status = true;
    //       }
    //     });
    //     if (status) return game;
    //     return null
    //   });
    //   filteredGames = filteredGames.filter((g) => g !== undefined);
    // }
  
    // return filteredGames;
  }