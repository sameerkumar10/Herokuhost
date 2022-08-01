const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Samportfolio", {
    // useCreateIndex:true,
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(() => {
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
})