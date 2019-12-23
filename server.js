const app  = require('./src/services/express.service')
const db = require('./src/services/mongoose.service')


// for connect database
db.connect()

//for start le server
app.start()
