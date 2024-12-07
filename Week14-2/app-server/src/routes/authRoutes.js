const express = require('express')

//to access our user schema / modal here
const mongoose = require('mongoose')
const User = mongoose.model('User')

//create a router
const router = express.Router()

router.post('/signup', async (req, res) => {
    //for now just send back to plain text message
    res.send('Hello signup bit with JSON')
    console.log(req.body)

    const {email, password} = req.body
    const user = new User({email, password})
    await user.save()
    res.send("User created!!!")
})

// export it for use elsewhere
module.exports = router