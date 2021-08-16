const { Op } = require("sequelize");
const { Videogame, Genre, Platform } = require("../db");
const { API_KEY } = process.env;
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

module.exports = {
  getAllVideogames,
  createVideogame,
  getVideogameById,
};

//-----------------------------------------------
async function getAllVideogames(req, res, next) {
  const name = req.query.search;

  let apiGames = [];
  const pages = [`https://api.rawg.io/api/games?key=${API_KEY}`];
  if (name) {
    let vgData = [];

    //search in API
    try {
      const resp = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
      );
      const apiGames = resp.data.results;

      let formatedApiGames = apiGames.map((game) => {
        let formatGame = {
          id: game.id,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres,
          platforms: game.platforms,
          created: false,
        };
        return formatGame;
      });
      vgData = vgData.concat(formatedApiGames);
    } catch (error) {
      next(error);
    }

    //search in DB
    try {
      const dbGames = await Videogame.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        attributes: [
          "id",
          "name",
          "released",
          "background_image",
          "rating",
          "created",
        ],
        include: [
          {
            model: Genre,
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            through: {
              attributes: [],
            },
          },
        ],
      });
      vgData = vgData.concat(dbGames);
      return res.status(200).json(vgData);
    } catch (error) {
      next(error);
    }
  }
  try {
    for (let i = 0; i < 5; i++) {
      const resp = await axios.get(`${pages[i]}`);
      pages.push(resp.data.next);

      let gamesFromApi = resp.data.results.map((game) => {
        let gameFromApi = {
          id: game.id,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres,
          platforms: game.platforms,
          created: false,
        };
        return gameFromApi;
      });

      apiGames = apiGames.concat(gamesFromApi);
    }
    const dbGames = await Videogame.findAll({
      attributes: [
        "id",
        "name",
        "released",
        "background_image",
        "rating",
        "created",
      ],
      include: [
        {
          model: Genre,
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          through: {
            attributes: [],
          },
        },
      ],
    });

    apiGames = apiGames.concat(dbGames);
    res.status(200).json(apiGames);
  } catch (error) {
    next(error);
  }
}

async function createVideogame(req, res) {
  const {
    name,
    description,
    released,
    img,
    rating,
    platforms,
    genres,
    created = true,
  } = req.body;
  try {
    let newVideogame = await Videogame.create({
      name: name,
      description: description,
      released: released,
      background_image: img,
      rating: rating,
      created,
    });

    (await platforms) && newVideogame.setPlatforms(platforms);
    (await genres) && newVideogame.setGenres(genres);

    //const id=newVideogame.id
    //return res.send(newVideogame)
    const id = newVideogame.id;
    // window.alert("The videogames was created successfully");
    return res.redirect(`http://localhost:3000/index`);
  } catch (error) {
    console.log(error);
  }
  // const { name, description, released, img, rating, platforms, genres } =
  // req.body;

  // try {
  // let newVideogame = await Videogame.create({

  //   name: name,
  //   description: description,
  //   released: released,
  //   background_image: img,
  //   rating: rating,

  // })
  // (await platforms) && newVideogame.setPlatforms(platforms)
  // (await genres) && newVideogame.setGenres(genres)
  // res.send(newVideogame)
  // // const id= newVideogame.id
  // // res.redirect(`http://localhost:3000/index/description/${id}`);
  // } catch (error) {
  //   console.log (error)
  // }
}

async function searchGame(req, res, next) {
  let vgData = [];
  const pages = [`https://api.rawg.io/api/games?key=${API_KEY}`];
  try {
    for (let i = 0; i < 5; i++) {
      const resp = await axios.get(`${pages[i]}`);
      pages.push(resp.data.next);

      let formatedApiGame = resp.data.results.map((game) => {
        let formatedGame = {
          id: game.id,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres,
          platforms: game.platforms,
        };
        return formatedGame;
      });

      vgData = vgData.concat(formatedApiGame);
    }
    const dbGames = await Videogame.findAll({
      attributes: ["id", "name", "released", "background_image", "rating"],
      include: [
        {
          model: Genre,
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          through: {
            attributes: [],
          },
        },
      ],
    });
    vgData = vgData.concat(dbGames);
    res.status(200).json(vgData);
  } catch (error) {
    next(error);
  }
}

async function getVideogameById(req, res, next) {
  const id = req.params.id;

  if (id.includes("-")) {
    try {
      const game = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.status(200).json(game);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );

      let game = {
        id: data.id,
        name: data.name,
        description: data.description,
        released: data.released,
        background_image: data.background_image,
        rating: data.rating,
        genres: data.genres,
        platforms: data.platforms,
      };
      return res.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }
}

// - [ ] __GET /genres__:
//   - Obtener todos los tipos de géneros de videojuegos posibles
//   - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
// - [ ] __POST /videogame__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
//   - Crea un videojuego en la base de datos
