const Toon = require('../models').toon

exports.index = (req, res) => {

    Toon.findAll().then(toons=>res.send(toons))

}