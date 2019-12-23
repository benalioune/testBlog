const User = require('../models/user.model') // require le model sur lequel on veux appliquer le controller pour pouvoir faire des requettes avec la BD
const bcrypt = require('bcrypt') // pour crypter le mdp


exports.create = (req,res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password,8)
    const user =  new User({
        email: req.body.email,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        admin: req.body.admin
    })
    // if(err) {
    //     res.send(err)
    // }
    // else{
        user.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                console.log(err)
            })
    // }
}
 // get all users
 exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding users."
            })
        })
}

exports.findOne = (req,res) => {
    User.findById(req.params.id)
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured when finding users."
        })
    })
}

exports.deleteOne = (req,res) => {

    User.findByIdAndRemove(req.params.id)
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured when finding users."
        })
    })
}

exports.deleteAll = (req,res) => {

    User.deleteAll()
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured when finding users."
        })
    })
}

exports.updateOne  = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured when finding users."
        })
    })

}

