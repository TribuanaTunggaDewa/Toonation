const models = require('../models')
const Toon = models.toon
const User = models.user
const Episodes = models.episodes
const Pages = models.pages

exports.index = (req, res) => {

          Toon.findAll({
            include:[{
                model: User,
                as: "created_by"
            }]
        }).then(toons=>res.send(toons))
}

exports.episodes = (req,res)=>{

    Episodes.findAll(
            {where: {
                from: req.params.id
            },
             include: {
                 model: Toon,
                 as: "from_toons"
             }}).then(episode=>res.send(episode))

}

exports.pages = (req, res)=>{

    Pages.findAll(
        {where: {
            from: req.params.id_ep
        },
        include: {
            model: Episodes,
            as: "from_episodes",
            where : {
                from: req.params.id
            },
            include:{
                model: Toon,
                as: "from_toons"
            }
        }
        
    }).then(page=>res.send(page))
}

exports.webtoon = (req, res) => {

    if(req.query.is_favorite){
        
        Toon.findAll({
            where: {
                isFavorite : true
            },
            include:[{
                model: User,
                as: "created_by"
            }]
        }).then(toons=>res.send(toons))
    }else if(req.query.title){
        
        Toon.findAll({
            where: {
                title : req.query.title
            },
            include:[{
                model: User,
                as: "created_by"
            }]
        }).then(toons=>res.send(toons))
    }else{
        
        Toon.findAll({
            include:[{
                model: User,
                as: "created_by"
            }]
        }).then(toons=>res.send(toons))
    }

}

exports.mywebtoons = (req, res)=>{

    Toon.findAll({
        where:{
            createdBy : req.params.id
        }
    }).then(toons=>res.send(toons))        

}

exports.createMywebtoon = (req, res) => {

    Toon.create(req.body, req.body.createdBy = req.params.id).then(toons=>res.send(toons))

}

exports.myEpisode = (req, res) => {
    
    Episodes.findAll(
        {where: {
            from: req.params.wbToonid
        },
         include: {
             model: Toon,
             as: "from_toons",
             where:{
             createdBy: req.params.id
             }
         }}).then(episode=>res.send(episode))      
}

exports.editMywebtoon = (req, res)=> {

    const result = req.body

    Toon.update(req.body,
                {where:{createdBy: req.params.id, 
                        id: req.params.wbToonid}
                }).then(toon=>res.send({
                    message: 'success',
                    toon,
                    result
                    
                })
                )
}