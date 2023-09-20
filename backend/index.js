const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080


app.get("/api", (req,res)=> {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(PORT, console.log(`listening on port ${PORT}`))

//added a line//