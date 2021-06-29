const mongoose = require("mongoose");
const db =require ("../models")


mongoose.connect("mongodb://localhost/museum",{
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology:true
});

const gallerySeed = [
    {
        name: 'Printemps',
        starting_date: 'April 20, 2021 07:00:00',
        ending_date: 'June 21, 2021 17:00:00',
      },
      {
        name: 'Sommer',
        starting_date: 'June 22, 2021 09:00:00',
        ending_date: 'September 22, 2021 22:00:00',
      },
      {
        name: 'Herfst',
        starting_date: 'September 23, 2021 08:30:00',
        ending_date: 'December 21, 2021 20:30:00',
      },
      {
        name: 'Invierno',
        starting_date: 'December 22, 2020 11:00:00',
        ending_date: 'March 19, 2021 19:00:00',
      },
]

db.Gallery.deleteMany({})
.then(()=>db.Gallery.collection.insertMany(gallerySeed))
.then((data)=>{
    console.log(data.result.n + ' records inserted')
    process.exit(0);
}) .catch((err)=>{
    console.error(err)
    process.exit(1);
})