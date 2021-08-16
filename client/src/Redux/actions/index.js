import axios from "axios";

export const addGame = (payload) => {
  return {
    type: "VIDEOGAME",
    payload: payload,
  };
};

export const addGenres = (payload) => {
  return {
    type: "GENRES",
    payload: payload,
  };
};
export const addPlatforms = (payload) => {
  return {
    type: "PLATFORMS",
    payload: payload,
  };
};

export const searchGame = (name) => async (dispatch) => {
  console.log("voy a buscar al back");
  const response = await axios.get(
    `http://localhost:3001/videogames?search=${name}`
  );
  const games = await response.data;
  console.log("dale locooooooooooo", response.data[0]);
  if (response.status === 200) {
    dispatch({ type: "SEARCH_GAME", payload: games });
  } else {
    dispatch({ type: "SEARCH_GAME", payload: [] });
  }
};

export const clearSearch = (payload) => {
  console.log(payload);
  return {
    type: "SEARCH_GAME",
    payload: payload,
  };
};

export const loadingGame = (state) => {
  return {
    type: "STATE",
    payload: state,
  };
};

export const paginate = (payload) => ({
  type: "PAGINATE",
  payload: payload,
});

export const currentP = (payload) => {
  return {
    type: "CURRENT_PAGE",
    payload: payload,
  };
};

export const filterOrder = (payload) => {
  return {
    type: "FILTER_ORDER",
    payload: payload,
  };
};
/*             game.genre.
console.log(game.genres.map(g=> g.));  /// [{id, name:''},{}]
          return game.genres === type */

// games.map

export const filterGenre = (Games, type) => {
  return function (dispatch) {
    if (type === "all") {
      return dispatch({ type: "FILTER_GENRE", payload: Games });
    }
    var newGames =
      Games &&
      Games.filter((game) => {
        let compare = game.genres && game.genres.map((genre) => genre.name);
        if (compare.includes(type)) {
          return game;
        }
      });

    return dispatch({ type: "FILTER_GENRE", payload: newGames });
  };
};

export const filterCreated = (Games, type) => {
  return function (dispatch) {
    if (type === "true") {
      var createdGame = Games && Games.filter((g) => g.created);
      return dispatch({ type: "FILTER_CREATED", payload: createdGame });
    }
    if (type === "false") {
      var apiGames = Games && Games.filter((g) => !g.created);
      return dispatch({ type: "FILTER_CREATED", payload: apiGames });
    }
    if (type === "all") {
      return dispatch({ type: "FILTER_CREATED", payload: Games });
    }
  };
};

export const filterPlatform = (Games, type) => {
  return function (dispatch) {
    if (type === "all") {
      return dispatch({ type: "FILTER_PLATFORM", payload: Games });
    }
    var newGames =
      Games &&
      Games.filter((game) => {
        let compare =
          game.platforms &&
          game.platforms.map((p) => p.platform && p.platform.name);
        if (compare.includes(type)) {
          return game;
        }
      });
    return dispatch({ type: "FILTER_PLATFORM", payload: newGames });
  };
};

export const resetFilters = () => {
  return {
    type: "RESET_FILTER",
  };
};
