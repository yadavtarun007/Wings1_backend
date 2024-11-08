// const mongoose = require('mongoose');

// dotenv.config({path: './.env'});

// const DB = process.env.DATABASE;


// mongoose.connect(DB,{
//     useNewUrlParser: true,
//    // useCreateIndex: true,
//     useUnifiedTopology: true,
//     //useFindAndModify: false
// }).then(()=>{
//     console.log("Connected successfully");
// }).catch((err)=>{
//     console.log(err);
// });


const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });  // Make sure this path is correct

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected successfully");
}).catch((err) => {
    console.log("Connection error:", err);
});
