const Article = require('../models/article.model')

exports.create = (req,res) => {
    const article =  new Article({
        title: req.body.email,
        datepublish: req.body.datepublish,
        author: req.body.author,
        description: req.body.description

    })

    
    // if(err) {
    //     res.send(err)
    // }
    // else{
        
        article.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                console.log(err)
            })
    // }
}