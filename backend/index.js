require('dotenv').config()
const express = require('express')
<<<<<<< HEAD
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))
=======
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const parkRoutes = require('./routes/park')

const app = express()

//middlewares
app.use(express.json())

app.use('/park', parkRoutes)

//database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

//app.get("/api", (req,res)=> {
   // res.json({"users": ["userOne", "userTwo", "userThree"]})
//})


const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))
>>>>>>> main

app.use('/parks', require('./controllers/parks'))
app.use('/users', require('./controllers/users'))

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})