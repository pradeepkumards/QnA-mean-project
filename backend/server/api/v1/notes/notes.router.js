const router = require('express').Router();
const usersCtrl = require('../users/users.controller');
const notesCtrl = require('./notes.controller');
const logger = require('../../../logger');

router.use(usersCtrl.isAuthenticated);

// Handler to add new note
router.post('/:groupId', function(req, res) {
  logger.info("Inside router method - add new note");
  try {
    let userId = req.user.userInfo.name;
    let noteObj = req.body;
    let groupId = req.params.groupId
    notesCtrl.addNote(userId, groupId, noteObj, (err, result) => {
      if (err) {
        logger.error(`Error in routing to post method for adding note ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to post method for adding note ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to delete existing note
router.delete('/:noteId', function(req, res) {
  logger.info("Inside router method - delete existing note");
  try {
    let userId = req.user.userInfo.name;
    let noteId = req.params.noteId
    console.log("4545454545")
    console.log(userId, noteId)
    console.log("4545454545")
    notesCtrl.deleteNote(userId, noteId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to delete method for deleting note ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to delete method for deleting note ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to update existing note
router.put('/:noteId', function(req, res) {
  logger.info("Inside router method - update existing note");
  try {
    let userId = req.user.userInfo.name;
    let noteId = req.params.noteId;
    let noteObj = req.body;
    notesCtrl.updateNote(userId, noteId, noteObj, (err, result) => {
      if (err) {
        logger.error(`Error in routing to put method for updating note ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to put method for updating note ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to get answers/notes by groupId
router.get('/:groupId', function(req, res) {
  logger.info("Inside router method - get note by groupId");
  try {
    let userId = req.user.userInfo.name;
    let groupId = req.params.groupId;
    notesCtrl.getNoteByNoteId(userId, groupId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to get method for get note by groupId ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to get method for get note by groupId ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to add note to favorites
router.post('/favourite/:noteId', function(req, res) {
  logger.info("Inside router method - add note to favorite");
  try {
    let userId = req.user.userInfo.name;
    let noteId = req.params.noteId;
    notesCtrl.addNoteToFavorites(userId, noteId, (err, result) => {
      if (err) {
        logger.error(`Error in routing to get favorite notes ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to get favorite notes ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to search notes
router.get('/', function(req, res) {
  logger.info("Inside router method - search notes");
  try {
    let userId = req.user.userInfo.name;
    let searchParams = req.query;
    notesCtrl.searchNotes(userId, searchParams, (err, result) => {
      if (err) {
        logger.error(`Error in routing to search notes ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to search notes ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

// Handler to share notes to user
router.post('/share/:noteId/:emailId/:accessType', function(req, res) {
  logger.info("Inside router method - share notes");
  try {
    let userId = req.user.userInfo.name;
    let noteId = req.params.noteId;
    let emailId = req.params.emailId;
    let accessType = req.params.accessType;
    notesCtrl.shareUserToNote(userId, noteId, emailId, accessType, (err, result) => {
      if (err) {
        logger.error(`Error in routing to share note ${err}`);
        return res.status(500).send({ error: err });
      }      
      return res.send(result);
    })
  } catch (err) {
    logger.error(`Error in catch block of routing to share note ${err}`);
    return res.status(500).send({ error: `Something went wrong, please try later..! ${err}` });
  }
});

module.exports = router;