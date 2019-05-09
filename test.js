'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const migrateDB = require("./repository/data.repository");
let should = chai.should();
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('./server.js').default; // Our app

describe('/Api EndPoint Employee', () => {
  it('Blank', (done) => {
    chai.request('http://localhost:1234')
        .get('/')
        // .send(testData1)
        .end((err, res) => {
            console.log('ERROR', err);
            should.exist(res.body);
            should(res.body).be.a('json');
            res.should.have.status(200);
          done();
        });
  });

});