const express = require("express");
const app = express();
app.use(express.json());
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Methods",
"GET,POST,PATCH,DELETE,HEAD,PUT,OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin,X-Requested-With,Content-Type,Accept");
next();
})
require("./conn.js");
let User = require("./schema.js");

let port = process.env.PORT|| 2410;
app.listen(port,()=> console.log(`Node app listening on port ${port}!`));

app.get("/",function(req,res){
    res.send("Welcome to Home Page...");
})
app.post("/signin",async (req,res)=>{
try{
  let { name, email, password, phone} = req.body;
  let data = await User.findOne({email : email});
  if(data) res.status(404).send("User already exists .");
  else {
    let user = new User({name, email, password, phone});
    let user1 = user.save();
    res.send({ email: email }) 
  }
}catch(err){
    console.log(err);
    res.status(500).send(err);
}
})
app.get("/users",async (req,res)=>{
try{
    let data = await User.find();
    res.send(data);
}catch(err){
    console.log(err);
    res.status(500).send(err);
}
})