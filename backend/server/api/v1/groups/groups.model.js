const mongoose = require('mongoose');

var d = new Date();

const groupsSchema = new mongoose.Schema({  
  groupId: {
    type: String,
    required: true
  },
  topicId:{
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  notes: {
    type: [String]
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  modifiedOn: {
    type: Date,
    default: Date.now
  }
}, { collection: 'groups'});

groupsSchema.index({ 
  userId: 1,
  title:1
},{
  unique:true
});

module.exports = mongoose.model('groups', groupsSchema);