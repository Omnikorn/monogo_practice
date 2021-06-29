const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const logger = require ("morgan")
const mongoose = require("mongoose")

const routes = require('./controllers');
// const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const db = require("./models")

const app = express();
app.use(logger("dev"));

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/museum",{useNewUrlParser:true});

db.User.create({username: "Earnest", email:"h2@email.com",password:"1234"})
.then(dbUser =>{
  console.log(dbUser)
}) .catch (({message}) =>{
  console.log(message)
})


app.use(routes);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
