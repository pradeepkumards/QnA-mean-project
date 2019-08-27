const router = require('express').Router();
const usersCtrl = require('../users/users.controller');
const groupsCtrl = require('./groups.controller');
const logger = require('../../../logger');

// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,X-Auth-Token, Content-Type, Accept, Authorization");
//   next();
// });
router.use(usersCtrl.isAuthenticated);

// Handler to create new group
router.post('/:topicId', function(req, res) {
  logger.info("Inside router method - create new group");
  try {
    // let userId = req.user.userInfo.userId;
    let userId = req.user.userInfo.name;
    let groupObj = req.body;
    let topicId = req.params.topicId;
    logger.info("66666666AAAA666666666")
    logger.info(topicId)
    logger.info(groupObj)
    logger.info(userId)
    logger.info("66666666AAAA666666666")
    groupsCtrl.addGroup(userId, groupObj, topicId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to create new group ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to create new group ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to update existing group
router.put('/:groupId', function(req, res) {
  logger.info("Inside router method - Update group");
  try {
    let userId = req.user.userInfo.name;
	let groupId = req.params.groupId;
    let updatedGroupObj = req.body;
    groupsCtrl.updateGroup(userId, groupId, updatedGroupObj, (err, result) => {
      if (err) {
        logger.error(`Error in routing to update group ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to update group ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to delete existing group
router.delete('/:groupId', function(req, res) {
  logger.info("Inside router method - Delete group");
  try {
    let userId = req.user.userInfo.name;
    let groupId = req.params.groupId;
    groupsCtrl.deleteGroup(userId, groupId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to delete group ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to delete group ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to add note to a group
router.get('/addNote/:groupId', function(req, res) {
  logger.info("Inside router method - add note to a group");
  try {
    let userId = req.user.userInfo.name;
    let groupId = req.params.groupId;
    let noteId = req.query.noteId;
    groupsCtrl.addNoteToGroup(userId, groupId, noteId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to add note to a group ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to add note to a group ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to remove answer for a question
router.get('/removeNote/:groupId', function(req, res) {
  logger.info("Inside router method - remove note from a group");
  try {
    let userId = req.user.userInfo.name;
    let groupId = req.params.groupId;
    let noteId = req.query.noteId;
    groupsCtrl.removeNoteFromGroup(userId, groupId, noteId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to remove note from a group ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to remove note from a group ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to get groups/questions by topicId
router.get('/:topicid', function(req, res) {
  logger.info("Inside router method - get group by Id");
  try {
    let userId = req.user.userInfo.name;
    let topicid = req.params.topicid;
    groupsCtrl.getGroupById(userId, topicid, (err, result) => {
      if (err) {
        logger.error(`Error in routing to get group by Id ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to get group by Id ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to get list of question/groups by topicId
router.get('/topics/:topicId', function(req, res) {
  logger.info("Inside router method - get group by Id");
  try {
    let userId = req.user.userInfo.name;
    let topicId = req.params.topicId;

    groupsCtrl.getGroupBytopicId(userId, topicId, (err, result) => {
    // logger.info("1111111111111");    
    // logger.info(typeof userId);
    // logger.info( topicId);
    // logger.info("1111111111111");
      if (err) {
        logger.error(`Error in routing to get group by Id ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to get group by Id ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to get group by title
router.get('/title/:title', function(req, res) {
  logger.info("Inside router method - get group by title");
  try {
    let userId = req.user.userInfo.name;
    let title = req.params.title;
    groupsCtrl.getGroupByTitle(userId, title, (err, result) => {
      if (err) {
        logger.error(`Error in routing to get group by title ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to get group by title ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to get all groups
router.get('/', function(req, res) {
  logger.info("Inside router method - get all groupssssss");
  try {
    let userId = req.user.userInfo.name;
    groupsCtrl.getGroups(userId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to get all groups ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to get all groups ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

module.exports = router;