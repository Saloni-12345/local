let mongoose = require("mongoose");

let db = "mongodb+srv://Saloni:Saloni@cluster0.mxm2woj.mongodb.net/localDB?retryWrites=true&w=majority";

mongoose.connect(db).then(()=>console.log("connected Successfully !!!"))
.catch(err=>console.log("not connected"))

