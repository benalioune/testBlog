const express = require('express')
const config  = require('../configs/server.config')
const bodyParser = require('body-parser')
const apiRouter = require('../routes/user.route')


// demarer express
const app = express()

// middleware
app.use(bodyParser.json())
app.use('/api/v1', apiRouter)




// pour pouvoir l'appeler dans une autre fonction
exports.start = () => {

    let port = config.port

    app.listen(port,(err) => {

        if(err){
            console.log('Error:${err}')

            // pour killer l'app
            process.exit(-1)
        }
        console.log('app is runnig on port', port)
    })


}