const mongoose  = require('mongoose')
const config = require('../configs/db.config')

exports.connect = () => {

    let url = config.url
    mongoose.connect(url,
        {
            // pour pouvoir parser l'url et recup le user et le mdp
            useNewUrlParser : true,
            useUnifiedTopology : true
    

        }).then(
            () => {
                console.log('Successfully connect to database ')
            }
        ).catch(
            err => {
                console.log('Could not connect to database',err)
                process.exit(-1)
            }
        )
}