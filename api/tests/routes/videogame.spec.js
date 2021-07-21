/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  created: true
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});



describe('GET /platform', function()  {  
  it('should return all platform', function () {
    agent.get('/platform')
    .expect(200)
    .expect('Content-Type', /json/) 
    .expect(function(res) {
    expect(res.body).to.have.length(50); 
    })
  });
});

describe('GET /genres', function()  { 
  it('should return all genres', function () {
    agent.get('/genres')
    .expect(200)
    .expect('Content-Type', /json/) 
    .expect(function(res) {
    expect(res.body).to.have.length(19); 
    })
  });
});

describe('GET /videogames', function()  {  
  it('should return all videogames', function () {
    agent.get('/videogames')
    .expect(200)
    .expect('Content-Type', /json/) 
    .expect(function(res) {
    expect(res.body).to.have.length(100); 
    })
  });
});