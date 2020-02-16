const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require("./config/db");
const routes = require("./routes")

const port =8000

app.use(bodyParser.json({ extended: true }));

MongoClient.connect(db.url,{ useUnifiedTopology:true}, function(err, database){
   if(err) return console.log(err);

   let db = database.db('todo');

   routes(app, db)

   app.listen(port,()=>{
       console.log("we are live on " + port)
   })
})
