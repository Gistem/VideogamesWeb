const { Router } = require('express');
const router = Router();
const { Platform } = require("../db");


  router.get('/', async(_req, res, next) =>{
    Platform.findAll({
        attributes:['id', 'name'],
    })
    .then(platforms => res.json(platforms))
    .catch(error => next(error))
});
  
module.exports = router;