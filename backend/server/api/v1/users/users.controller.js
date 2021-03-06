const async = require('async');
const userValidator = require('./users.validator');
const usersService = require('./users.service');
const signToken = require('../authentication/signToken');
const verifyToken = require('../authentication/verifyToken');
const config = require('../../../appConfig');
const logger = require('../../../logger');

// Handler to register user
function registerUser(newUserObj, done) {  
  logger.info("Inside controller method - register user");
  if (userValidator.validateInputs(newUserObj) === "empty")
    return done("Please provide all Mandatory fields.");
  
  async.waterfall([
      (cb => usersService.findUser(newUserObj.emailId, cb)),
      ((userObj, cb) => {
        if (userObj) {
          cb("Email Id already exists, Please provide another Email Id or try to login");
          // return ("User already exist, try to login")
        } else {
          usersService.registerUser(newUserObj, cb);
        }
      })
    ], (err, result) => {
      return done(err, result);
  });
}

// Handler to login user
function findUser(emailId, done) {
  logger.info("Inside controller method - login user");
  usersService.findUser(emailId, done);
}

// Handler to find user by id
function findUserById(userId, done) {
  logger.info("Inside controller method - find user by id");
  usersService.findUserById(userId, done);
}

// Handler to authenticate user
function authenticate(credentials, done) {
  this.userdata = ""
  logger.info("Inside controller method - authenticate user");
  if(!credentials.emailId || !credentials.password) return done("Please provide all Mandatory fields");

  async.waterfall([
      (cb => usersService.findUser(credentials.emailId, cb)),
      ((userObj, cb) => {
        this.userdata = userObj
        if (userObj) {

          if (userValidator.verifyPassword(credentials.password, userObj.password)) {
            cb(null, userObj); 
          } else {
            cb("Unauthorized");
          }
        } else {
          cb("Unauthorized");
        }        
      }),
      signToken
    ], (err, result) => {

      res = JSON.stringify(this.userdata)
      res = {"token" : result};
      // console.log("99999999999")
      console.log(result)
      console.log(res)
      // console.log("99999999999")
      return done(err, JSON.stringify(res));
      // return done(err, res);
  });
}

// Handler to check whether user is authenticated or not
function isAuthenticated(req, res, next) {
  logger.info("Inside controller method - isAuthenticated");
  
  authorizationHeader = req.get('Authorization');

  // logger.info("444444444444444444")
  // logger.info(req.headers)
  // logger.info(authorizationHeader)
  // logger.info("444444444444444444")
  logger.info("Inside controller method - authorizationHeader", authorizationHeader);
  if (!authorizationHeader) {
    res.status(403).send("Not authenticated");
    return;
  }

  const token = authorizationHeader.replace('Bearer ', '');
  verifyToken(token, config.JWT_SECRET_KEY, {}, (err, validToken) => {
    if (err) {
      logger.error(`Controller function of isAuthenticated verifyToken ${err}`);
      res.status(403).send("invalid token");
      return;
    }
    let userInfo = {
      userId: validToken.id,
      name: validToken.name,
      emailId: validToken.email
    };
    // logger.info("55555555555")
    logger.info(userInfo)
    
    req.user = { isAuthenticated: true, verifiedToken: validToken, userInfo: userInfo };   
    logger.info(req.user)
    // logger.info("55555555555")
    next();
  });
}

// Handler to share notes to user
function shareNoteToUser(userId, noteId, done) {
  logger.info("Inside controller method - share notes to user");
  usersService.shareNoteToUser(userId, noteId, done);
}

// Handler to unshare notes from user
function unShareNoteFromUser(userId, noteId, done) {
  logger.info("Inside controller method - unshare notes from user");
  usersService.unShareNoteFromUser(userId, noteId, done);
}

module.exports = {
  registerUser,
  findUser,
  findUserById,
  authenticate,
  isAuthenticated,
  shareNoteToUser,
  unShareNoteFromUser
}