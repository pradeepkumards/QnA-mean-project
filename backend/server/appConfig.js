// console.log("222222222222222222222222")
// console.log(process.env.MONGO_URL)
// console.log("222222222222222222222222")
let config = {
  EMAIL_CONFIGURATION: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
	  user: 'notes.application.fsd@gmail.com',
	  pass: 'note$1234'
    }
  },
  NO_REPLY: 'notes.application.fsd@gmail.com',
  
  MONGO: {
    MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/QNADB')
    // MONGO_URL: (process.env.MONGO_URL || 'mongodb://qnaapp_mongodb:27017/QNADB')
    // MONGO_URL: "mongodb://172.21.0.2:27017/QNADB"
  },
  JWT_SECRET_KEY: 'cognizant',
  WWW_PORT: (process.env.PORT || 3000)
}

module.exports = config;
