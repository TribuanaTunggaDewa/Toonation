
require('express-group-routes')
const express = require('express')
const app = express()
const querystring = require('querystring')
const bodyParser = require('body-parser')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}


const upload = multer({storage, limits:{
                fileSize: 1024 * 1024 * 5
            },
                fileFilter                
            })
const port = 5000





//controllers
const AuthController = require('./controllers/auth')
const Toonations = require('./controllers/Toonations')
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json())

//middlewares
const { authenticated } = require('./middleware')


app.group("/api/v1", (router) => {

    //auth API
    router.post('/register', AuthController.register)
    router.post('/login', AuthController.login)
    router.get('/user/:id', authenticated, AuthController.show)
    router.put('/user/:id', authenticated, upload.single('image'), AuthController.Useredit)

    //toons API
    router.get('/webtoons',  Toonations.index)
    
    //episodes API
    router.get('/webtoon/:id/episodes', Toonations.episodes)

    //pages API
    router.get('/webtoon/:id/episode/:id_ep', Toonations.pages)

    //pages Favorite
    router.get('/webtoon', Toonations.webtoon)


    //my creation webtoons
    router.get('/user/:id/webtoons',authenticated,  Toonations.mywebtoons)

    //create my creation webtoons
    router.post('/user/:id/webtoon',authenticated, upload.single('image'), Toonations.createMywebtoon ) 
    
    //get episode based on my creation webtoons
    router.get('/user/:id/webtoon/:wbToonid/episodes', authenticated, Toonations.myEpisode)

    //update my webtoon creation
    router.put('/user/:id/webtoon/:wbToonid', authenticated, Toonations.editMywebtoon)

    //delete my webtoon creation
    router.delete('/user/:id/webtoon/:wbToonid', authenticated, Toonations.deleteMywebtoon)

    //create my episode implementation
    router.post('/user/:id/webtoon/:wbToonid/episode', authenticated, Toonations.createMyepisode)


    //get all images based on episode
    router.get('/user/:id/webtoon/:wbToonid/episode/:id_ep/images', authenticated, Toonations.getMypage)

    //update / detail my episode implementation
    router.put('/user/:id/webtoon/:wbToonid/episode/:id_ep', authenticated, Toonations.editMyepisode)

    //delete episode
    router.delete('/user/:id/webtoon/:wbToonid/episode/:id_ep', authenticated, Toonations.deleteMyepisode)

    //create image for episode implementation
    router.post('/user/:id/webtoon/:wbToonid/episode/:id_ep/image', authenticated, Toonations.createMypage)


    //delete image detail episode implementation
    router.delete('/user/:id/webtoon/:wbToonid/episode/:id_ep/image/:img_id', authenticated, Toonations.deleteMypage)
 

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))