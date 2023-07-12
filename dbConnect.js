const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/restapi")
.then(()=>{
    console.log("Database is connected");
})
.catch((error)=>{
    console.log(error);
})