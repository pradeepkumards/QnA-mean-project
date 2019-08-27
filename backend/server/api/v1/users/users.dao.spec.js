const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;
const usersDAO = require('./users.dao');
const initializeMongooseConnection = require('../../../dbConnection');
const uuidv4 = require('uuid/v4');
var rand_num = Math.floor((Math.random() * 10) + 1);
let mockUsersObj = {
  "username": "New User" + rand_num,
  "emailId": "user" + rand_num + "@user.com",
  "password": "user3Password"
};

let dbConnection;
let firstUserId;
let secondUserId;
let firstNoteId = uuidv4();
let secondNoteId = uuidv4();

describe('Users DAO Layer Test Cases', function() {

  before(function(done) {
    initializeMongooseConnection();
    MongoClient.connect('mongodb://localhost:27017/QNADB', (err, client) => {
      if(err) return done(err);
      dbConnection = client.db();
      done();
    });
  });

  after(function(done) {
    dbConnection = undefined;
    done();
  });

  describe('Test scenarios for Users', function() {
    it('Add new valid user from mock user object', function(done) {
      firstUserId = uuidv4();
      mockUsersObj.userId = firstUserId;
      usersDAO.addUser(mockUsersObj, (err, response) => {
        if (err) return done(err);
        expect(response.message).to.equal("User added successfully.");
        done();
      });
    });
 
	});
});