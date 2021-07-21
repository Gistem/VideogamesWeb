//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Genre, Platform } = conn.models;
const { API_KEY } = process.env




const getGenres = async () => {
  try {
   let allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

    allGenres.data.results.forEach(e => {
      Genre.findOrCreate({
        where: {
          name: e.name
        }

      })
    });
  } catch (error) {
    console.error(error.message)
  }
};

const getPlatforms = async () => {
  try {
    platforms = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    platforms.data.results.forEach(e => {
      Platform.findOrCreate({
        where: {
          name: e.name
        }

      })
    });
  } catch (error) {
    console.error(error.message)
  }
};

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

  getGenres();
  getPlatforms()
});
