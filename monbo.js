const mongo = require('mongoose');
const assert = require('assert');

// Dotenv
require('dotenv').config();
const url = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`;

const connection = mongo.connect(url,{useNewUrlParser:true});

connection
.then(() => console.log("Connected"))
.catch((err) => console.log("Catch Se ha producido un error: " + err));
