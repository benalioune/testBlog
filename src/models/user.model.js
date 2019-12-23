const mongoose = require('mongoose')

// pour utiliser le schema mongo
const schema = mongoose.Schema
 const userSchema = new schema({
     email : {
         type:String,
         require: true,
         unique: true,
         lowercase: true,
     },

     password : {
         type : String,
         require: true,
         minlength: 4,
         maxlength: 128

     },

     firstname : {
         type : String
     },
      lastname : {
          type : String
      },

      admin: {
          type: Boolean
      },
    },
    {
        timestamps: true // option pour recuperer des options c'est a dire la date ....
    }  
 )

 module.exports = mongoose.model('User', userSchema)