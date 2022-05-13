const express = require('express')
const apirouter = require('./routes/api-routes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const port = 8080
app.use(express.json(), cors())


app.use('/',apirouter)

const url = "mongodb+srv://chandra:Chandra123@cluster0.xtbl1.mongodb.net/Todo?retryWrites=true&w=majority"


mongoose.connect(url , {useNewUrlParser:true})
.then(()=>{
    console.log("database connected")
})
.catch((err) => console.log(err))

app.listen(8080, () =>{
    console.log(`database is running on http://localhost:${port}`)
})





{/*// Libraries
// Import Express: 
// => Initiates the server
// => routing for API URL(GET,POST)
// => Used middlewares cors and json data
const express = require("express");
// Import Mongoose: 
// => Connect to the databse through url
// => Develop Schema on what data types that needs to be stored in your database
// => MongoDB functions like save, findOne, findALL => Queries
const mongoose = require("mongoose");
// Import Cors:
// => For security reasons your browser block unnecesarilly
// => Using cors to enable the origin => frontend to access
// => the backend data
const cors = require("cors");

// Custom Modules 
const routes = require("./routes/routes");


// Intiaited App Variable to express function 
const app = express();

// To use middlewares 
// Middlewares: application not for real users on the 
// JSON: The data that we are accepting through body is in JSON format
// CORS: we are enabling cors for the entire application
app.use(express.json(), cors());

// From express itself we are using another middleware called Router
app.use("/", routes);


// Database Connection String
const url =
  "mongodb+srv://chandra:Chandra123@cluster0.xtbl1.mongodb.net/Kellton-Ecommerce?retryWrites=true&w=majority";

// Used Mongoose.connect method to connect database
// useNewUrlParser: true
// currentURL: true // Deprecated 
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

// Creating a server at Port : 3000
// From frontend the requests we are listening to it
app.listen(8080, () => {
  console.log("App listening on port 3000");
});

*/}

