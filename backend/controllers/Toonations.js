const models = require('../models')
const Toon = models.toon
const User = models.user
const Episodes = models.episodes
const Pages = models.pages
const Favorites = models.favorite
const ip = 'http://192.168.1.38:5000'

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
    }

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

exports.favorites = (req, res) =>{
    User.findOne({
        where: {
            id: req.params.id
        },
        include:[{
            model: Toon,
            as: 'toons',
            required: false,
            attributes: ['id','title', 'image']
        }]
    
    }).then(toon=>res.send(toon.toons))
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

    if(req.query.title){
        
        Toon.findAll({
            where: {
                title : req.query.title,
                createdBy : req.params.id
            },
            include:[{
                model: User,
                as: "created_by"
            }]
        }).then(toons=>res.send(toons))
    }else{
        Toon.findAll({
            where:{
                createdBy : req.params.id
            }
        }).then(toons=>res.send(toons)) 
    }

          

}

exports.createMywebtoon = (req, res) => {
    console.log(req.file)
    Toon.create(req.body, req.body.image = `${ip}/`+ req.file.path, req.body.createdBy = req.params.id).
    then(toons=>res.send(toons))

}

exports.myEpisode = (req, res) => {


    if(req.query.title){
        
        Episodes.findAll(
            {where: {
                from: req.params.wbToonid,
                title: req.query.title
            },
             include: {
                 model: Toon,
                 as: "from_toons",
                 where:{
                 createdBy: req.params.id
                 }
             }}).then(episode=>res.send(episode))
    }else{
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
    
    
         
}

exports.editMywebtoon = (req, res)=> {

    const result = req.body

    Toon.update({
                ...req.body,
                image: `${ip}/`+req.file.path
                },
                {where:{createdBy: req.params.id, 
                        id: req.params.wbToonid}
                }).then(toon=>res.send({
                    message: 'success',
                    toon,
                    result
                    
                })
                )
}

exports.deleteMywebtoon = (req, res)=> {
    
    Toon.destroy({where:
                    {
                        createdBy: req.params.id,
                        id: req.params.wbToonid
                    }}).then(toon=>res.send({
                        message: 'success',
                        toon
                    }))

}

exports.createMyepisode = (req, res)=> {

    Episodes.create(req.body,
                     req.body.from = req.params.wbToonid,
                     req.body.image = `${ip}/`+ req.file.path 
                     ).
    then(toons=> res.send(toons))
}

exports.getMypage = (req, res) => {

    Pages.findAll({
            where: {from: req.params.id_ep},
            include: {
                model: Episodes,
                as: 'from_episodes',
                where : {
                    from: req.params.wbToonid
                },
                include:{
                    model: Toon,
                    as: 'from_toons',
                    where:{
                        createdBy: req.params.id
                    }
                }
            }
    }).then(page=>res.send(page))

}


exports.editMyepisode = (req, res) => {

    Episodes.update({
                        ...req.body,
                        image: `${ip}/`+req.file.path
                    },
                    {where : {from: req.params.wbToonid,
                              id: req.params.id_ep},
                              include:{
                                  model: Toon ,
                                  as: 'from_toons',
                                  where:{
                                      id: req.params.id
                                  }
                              }}).then(episode=>res.send({
                                  message: 'success',
                                  episode
                              }))
}

exports.deleteMyepisode = (req, res) => {


    Episodes.destroy({where: {from : req.params.wbToonid,
                               id: req.params.id_ep}}).then(result=>{
                                   res.send({
                                       message: 'success',
                                       result
                                   })
                               })
    

}

// exports.createMyepisode = (req, res)=> {

//     Episodes.create(req.body,
//                      req.body.from = req.params.wbToonid,
//                      req.body.image = `${ip}/`+ req.file.path 
//                      ).
//     then(toons=> res.send(toons))
// }

exports.createMypage = (req, res) => {


    Pages.create(req.body, req.body.from = req.params.id_ep,
                 req.body.image = `${ip}/` + req.file.path).
                 then(page=>res.send(page))

}

exports.deleteMypage = (req, res) => {

    Pages.destroy({where: {from: req.params.id_ep,
                                id: req.params.img_id
                        }}).then(result=>{
                            res.send({
                                message : 'success',
                                result
                            })
                        })
}






