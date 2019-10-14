const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const ToonationsController = require('./controllers/Toonations')

app.group("/api/v1", (router)=>{

	//For You API
	router.get('/webtoons', ToonationsController.index)

})

app.listen(port, ()=>console.log(`Listening onport ${port}`))
