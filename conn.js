let mongoose = require("mongoose");
let db = process.env.MONGODB_CONNECT_URL;

mongoose.connect(db).then(()=>console.log("connected Successfully !!!"))
.catch(err=>console.log("not connected"))

