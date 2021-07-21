const { default: axios } = require('axios');
const { Router } = require('express');
// const { EmptyResultError } = require('sequelize/types');
const router = Router ();
const {Genre} = require("../db");


router.get('/', async(_req, res, next) =>{
    Genre.findAll()
    .then(genres => res.json(genres))
    .catch(error => next(error))
});
module.exports = router;