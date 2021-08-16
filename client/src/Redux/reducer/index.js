const initialState = {
    videogames: [],
    allGames: [],
    search: [],
    description: undefined,
    genres: [],
    platforms: [],
    loading: false,
    currentPage: 1,
    videogamesPerPage: 15,
    filters: {
      order: "", 
      origen: "",
      genre: "", 
      platform: "",
    },
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "VIDEOGAME":
        return {
          ...state,
          videogames: action.payload,
          allGames: action.payload
        };
      case "SEARCH_GAME":
        return {
          ...state,
          videogames: action.payload,
        };
      case "STATE":
        return {
          ...state,
          loading: action.payload,
        };
  
      case "PAGINATE":
        return {
          ...state,
          currentPage: action.payload,
        };
        case "FILTER_ORDER": {
          return {
              ...state,
              videogames: action.payload
          };}
        case "FILTER_CREATED": {
          return {
            ...state,
            videogames: action.payload
          }
        };
        case "FILTER_GENRE": {
          return {
            ...state,
            videogames: action.payload
              
          }
        };
        case "FILTER_PLATFORM": {
          return {
            ...state,
            videogames: action.payload
              
          }
        };
        case "RESET_FILTER": {
          return {
            ...state,
            filters: {
              order: "",
              origen: "",
              genre: "",
              platform: ""
            }
          }
        }
      case "GENRES":
        return {
          ...state,
          genres: [...action.payload],
        };
      case "PLATFORMS":
        return {
          ...state,
          platforms: [...action.payload],
        };
      default:
        return state;
    }
  }
  
  export default reducer;