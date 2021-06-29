const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username:{
        type:String,
        required:"enter user name"
    },
    email:{
        type:String,
        required:"enter email"
        },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports= User