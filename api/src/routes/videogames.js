const { Router } = require("express");
const router = Router();
const {   
    getAllVideogames,
    createVideogame,
    getVideogameById,
} = require("../controllers/videogames");



router.get('/', getAllVideogames);
router.get("/:id", getVideogameById);
router.post('/', createVideogame);

module.exports = router;