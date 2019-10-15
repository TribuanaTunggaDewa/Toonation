const models = require('../models')
const Toon = models.toon
const User = models.user
const Episodes = models.episodes
const Pages = models.pages

exports.index = (req, res) => {

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
        
    }else{

        Toon.findAll({
            include:[{
                model: User,
                as: "created_by"
            }]
        }).then(toons=>res.send(toons))
    }

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

exports.favorite = (req, res)=>{

    Toon.findAll({
        where: {
           isFavorite : req.query.is_favorite
        },
        include:[{
            model: User,
            as: "created_by"
        }]
    }).then(toons=>res.send(toons))

}

