const { Router } = require('express');
const videogamesRoutes = require('./videogames.js');
const genresRoutes = require('./genres.js')
const platformsRoutes = require('./platforms.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogamesRoutes);
router.use('/genres', genresRoutes);
router.use('/platforms', platformsRoutes)
module.exports = router;
