const router = require('express').Router();
const usersCtrl = require('../users/users.controller');
const groupsCtrl = require('./topics.controller');
const logger = require('../../../logger');

router.use(usersCtrl.isAuthenticated);

// Handler to create new topic
router.post('/', function(req, res) {
  logger.info("Inside router method - create new topic");
  try {
    let userId = req.user.userInfo.name;
    let groupObj = req.body;
    // logger.info("66666666666666666")
    logger.info(groupObj)
    logger.info(userId)
    // logger.info("66666666666666666")
    groupsCtrl.addGroup(userId, groupObj, (err, result) => {
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

// Handler to remove note from a group
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

// // Handler to get group by Id
// router.get('/:groupId', function(req, res) {
//   logger.info("Inside router method - get group by Id");
//   try {
//     let userId = req.user.userInfo.userId;
//     let groupId = req.params.groupId;
//     groupsCtrl.getGroupById(userId, groupId, (err, result) => {
//       if (err) {
//         logger.error(`Error in routing to get group by Id ${err}`);
//         return res.status(500).send({ error: err });
//       }      
//       return res.send(result);
//     })
//   } catch (err) {
//     logger.error(`Error in catch block routing to get group by Id ${err}`);
//     return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
//   }
// });

// Handler to get group by topicId
router.get('/:topicId', function(req, res) {
  logger.info("Inside router method - get group by topicId");
  try {
    let userId = req.user.userInfo.name;
    let topicId = req.params.topicId;
    groupsCtrl.getGroupByTitle(userId, topicId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to get group by topicId ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block routing to get group by topicId ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to get all groups
router.get('/', function(req, res) {
  logger.info("Inside router method - get all groups");
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