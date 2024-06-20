const express = require("express");
const cors = require("cors")
const database= require("../database/database-mysql");


const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/items", function (req, res) {
 database.selectAll(function(err,result){
  if (err) res.status(500).send(err)
    else res.status(200).json(result)
 })
});


 
 app.post("/api/items",function(req,res){
   var value = req.body
   database.addHouse((err,result)=>{
     if(err) res.status(500).send(err) 
     else {
         res.status(201).json(result)
     }
   },value)
 })
 
 app.delete("/api/items/:id",function(req,res){
   var id = req.params.id
   database.deleteHouse((err,result)=>{
     if(err) res.status(500).send(err)
       else res.status(204).json(result)
   },id)
 })

 app.put("/api/items/:id",function(req,res){
  var id = req.params.id
  var name = req.body.name
  var description=req.body.description
  database.updateHouse((err,result)=>{
    if(err)res.status(500).send(err)
      else res.status(200).json(result)
  },name,description,id)
 })


 app.get("/api/items/:name" , function(req,res){
  var name = req.params.name
  console.log(name);
  database.getOneHouse((err,result)=>{
 if(err)res.status(500).send(err)
  else res.status(200).json(result)
  },name)

 })

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
