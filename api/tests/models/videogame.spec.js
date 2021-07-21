const {Genre, Platform, Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });

    describe('Find All Platforms in database', function() {
      it('should have length 50, this has been pre-charged',  function() {
        Platform.findAll()
        .then(function (res){
          expect(res.body).to.be.have.length(50) 
        });
      });
    });

    describe('Find All Genres in database', function() {
      it('should have length 19, this has been pre-charged',  function() {
        Genre.findAll()
        .then(function (res){
          expect(res.body).to.be.have.length(19) 
        });
      });
    });

  });
});
