require('./models/User')
//import express
//when we require without a root, it means that we are importing a library
const express = require('express')

// import mongoose to communicate 
const mongoose = require('mongoose')

//import bodyparser for handling our requst bodie's json
const bodyParser = require('body-parser')

// import our authRoutes
const authRoutes = require('./routes/authRoutes')

//our 1 time available URI, put i a .env for safekeeping and DO NOT PUSH THIS
const mongoUri = 'mongodb+srv://admin:easypassword@users.ro87h.mongodb.net/?retryWrites=true&w=majority&appName=USERS'
//connect to our DV via mongoose

const app = express()

//enable the ability to parse JSOn from the body of reqs/ress
app.use(bodyParser.json())

app.use(authRoutes)

mongoose.connect(mongoUri)

// think of this as an event listener
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to our mongo instance! YAY!')
})

//listen for errors as well
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})

//our first route handler, any time a user makes a request to `/`
//run the function (second argument)
//req = request, res=result/response
app.get('/', (req, res) => {
    //for now send a plain text message
    res.send('Hello first express route!')
})

//have our app listen on a specific port on our machine
app.listen(3000, () => {
    console.log('Listening on port 3000')
})

// easypassword

