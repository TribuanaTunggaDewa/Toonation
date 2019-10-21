const jwt = require('jsonwebtoken')
const ip = 'http://192.168.1.38:5000'
const models = require('../models')
const User = models.user

exports.login = (req, res)=>{    
    //check if email and pass match in db tbl user
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!
    console.log(req)
    User.findOne({where: {email, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                user,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })

    
}

exports.register = (req, res) => {

      console.log(req)
      User.create(req.body).then(user=>{
        const token = jwt.sign({ userId: user.id }, 'my-secret-key')
        res.send({
            user,
            token
        })
      })
     

}

exports.Useredit = (req, res) => {
    console.log(req)
    User.update({...req.body, image : `${ip}/`+req.file.path}, {where:{id: req.params.id}
}).then(toon=>res.send({
    message: 'success',
    toon
})
)

}