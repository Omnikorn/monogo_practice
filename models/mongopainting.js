const mongoose = require ("mongoose");
const Schema= mongoose.Schema

const PaintingSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    exhibition_date:{
        type:Date,
        default:Date.now
    },
    filename:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    gallery_id:{
        type:Schema.Types.ObjectId,
        ref:"Gallery"
    }
})

const Painting = mongoose.model("Painting" , PaintingSchema);

module.exports= Painting