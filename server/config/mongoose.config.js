const mongoose = require("mongoose");
// const cardDB = "cardDB";

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`,
    {useNewUrlParser:true,
    useUnifiedTopology:true
    })
    .then(()=>{
        console.log(`You are connected to ${process.env.DB_NAME}`)
    })
    .catch((err)=>{
        console.log(`An error occurred connecting to ${process.env.DB_NAME}`, err)
    })