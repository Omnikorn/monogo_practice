const mongoose = require ("mongoose");
const Schema = mongoose.Schema

const GallerySchema = new Schema ({
    name:{
        type:String,
        required:"enter name please"
    },
    starting_date:{
        type:Date,
        default: Date.now
    },
    ending_date:{
        type:Date,
        default:Date.now
    }
})


const Gallery = mongoose.model("Gallery" , GallerySchema);

module.exports = Gallery