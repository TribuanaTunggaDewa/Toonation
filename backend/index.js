
require('express-group-routes')
const express = require('express')
const app = express()
const querystring = require('querystring')
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
    router.post('/register', AuthController.register)
    router.post('/login', AuthController.login)

    //toons API
    router.get('/webtoons', Toonations.index)
    
    //episodes API
    router.get('/webtoon/:id/episodes', Toonations.episodes)

    //pages API
    router.get('/webtoon/:id/episode/:id_ep', Toonations.pages)

    //pages Favorite
    router.get('/webtoon', Toonations.webtoon)

 
    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))