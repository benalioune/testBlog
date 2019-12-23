const mongoose = require('mongoose')

const schema = mongoose.Schema
 const articleSchema = new schema({
    title : {
         type:String,
         require: true,
         unique: true,
         lowercase: true,
     },

     datepublish: {
         type : Date,
         require: true,

     },

     author: {
         type : String,
         require: true,
         minlength: 4,
         maxlength: 128
     },
     
      description : {
          type : String,
          maxlength : 1000
      },

      iduser: {
        type : String,
        maxlength : 100
    },

    },
    {
        timestamps: true // option pour recuperer des options c'est a dire la date ....
    }  
 )

 module.exports = mongoose.model('Article', articleSchema)