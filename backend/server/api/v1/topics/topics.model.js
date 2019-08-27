const mongoose = require('mongoose');

// const ACCESS_TYPE_ARR = [ 'READONLY', 'WRITEONLY', 'FULL' ];

let d = new Date();

const topicsSchema = new mongoose.Schema({  
  // topicId: {
  //   type: String,
  //   required: true
  // },
    topicId: {
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
  isFavourite: {
    type: Boolean,
    default: false
  },
//   sharedNotes: {
//     type: [{
//       userId: String, 
//       userRole: {
//         type: String,
//         enum: ACCESS_TYPE_ARR,
//         default: 'READONLY'        
//       }
//     }]
//   },
  createdOn: {
    type: Date,
    default: Date.now
  },
  modifiedOn: {
    type: Date,
    default: Date.now
  }
}, { collection: 'topics'});

topicsSchema.index({  
  userId: 1,
  title:1
},{
  unique:true
});

module.exports = mongoose.model('topics', topicsSchema);