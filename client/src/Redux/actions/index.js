import axios from 'axios'

export const addGame =(payload)=>{
    return{
        type:'VIDEOGAME',
        payload:payload
    }
};
// export const postGame = (name, rating, platform, genre, id) => {
//     return async function(dispatch) {
//         const response = await axios.post('http://localhost:3001/videogames', {
//             name,
//             rating,
//             platform,
//             genre,
//             id
//         });
//         console.log(response);
//         return response;
//     }
// }
export const addGenres = (payload) =>{
    return{
        type:'GENRES',
        payload:payload
    }
}
export const addPlatforms = (payload) =>{
    return{
        type:'PLATFORMS',
        payload:payload
    }
}
export const searchGame = (name) => async (dispatch) =>{
  
   const response = await axios.get(`http://localhost:3001/videogames?search=${name}`)
   const juegos = await response.data
   if(response.status === 200){
    dispatch({ type: 'SEARCH_GAME', payload: juegos});

} else {
  dispatch({ type: "SEARCH_GAME", payload: []});
};
}

export const clearSearch = (payload) =>{
    console.log(payload)
    return{
        type:'SEARCH_GAME',
        payload: payload
    }
}

export const loadingGame = (state)=>{
    return{
        type: 'STATE',
        payload: state
    }
}


export const paginate = (payload) => ({
    type: 'PAGINATE',
  payload: payload,
});

export const currentP= (payload) =>{
    return{
        type: 'CURRENT_PAGE',
        payload:payload
    }
}

export const filterOrder = ( payload ) => {
    return {
        type: 'FILTER_ORDER',
        payload: payload
    }
}
/*             game.genre.
console.log(game.genres.map(g=> g.));  /// [{id, name:''},{}]
          return game.genres === type */
export const filterGenre = ( Games,type ) => {
    return function (dispatch){
        
        var newGames = Games && Games.filter(vg => vg.genres.includes(type)
        );
        console.log(newGames,"jajajajajja")
        //console.log(newGames,"ayaaaaaaaa")
        return dispatch({type: 'FILTER_GENRE',payload: newGames})
    }
}

export const filterPlatform = ( payload ) => {
    return {
        type: 'FILTER_PLATFORM',
        payload: payload
    }
}

export const resetFilters = () => {
    return {
        type: 'RESET_FILTER'
    }
}


// filtro (Games, type) => {



// }

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