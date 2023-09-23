const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()



const app = express()

//middlewares
app.use(express.json())

//routes


//database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

//app.get("/api", (req,res)=> {
   // res.json({"users": ["userOne", "userTwo", "userThree"]})
//})


const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))

//added a line//