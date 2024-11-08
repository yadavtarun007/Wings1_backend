// const dotenv = require('dotenv');
// const express = require('express');
// const app = express();
// const path = require('path');
// // const multer = require('multer');

// dotenv.config({path: './.env'});
// require('./db/conn');
// //defining the middleware//
// app.use(express.json());

// //link the router files//
// app.use(require('./router/auth'));

// const User = require('./model/userSchema');
// app.use('/uploads', express.static('uploads'));
// const PORT = process.env.PORT || 8000


const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

dotenv.config({ path: './config.env' });  // Make sure this path is correct
require('./db/conn');

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for your frontend URL
app.use(express.json());

// Routes
app.use(require('./router/auth'));

const User = require('./model/userSchema');
// app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






// //const DB="mongodb+srv://taruncs1923:Automaxx9990@cluster0.0tfdflm.mongodb.net/MERN?retryWrites=true&w=majority"


//  app.listen(PORT, ()=>{
//     console.log(`server is running on port ${PORT}`);
//  });