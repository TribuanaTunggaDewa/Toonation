
require('express-group-routes')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000





//controllers
const AuthController = require('./controllers/auth')
const Toonations = require('./controllers/Toonations')
app.use(bodyParser.json())

//middlewares
const { authenticated } = require('./middleware')


app.group("/api/v1", (router) => {

    //auth API
	router.post('/login', AuthController.login)

    //todos API
    router.get('/webtoons', Toonations.index)    
 
    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))