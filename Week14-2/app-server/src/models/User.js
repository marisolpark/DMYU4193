const mongoose = require('mongoose')

//this scheman is where we tell mongoose about the different properties
// our user collection has to have

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

//Finally, we need to associate this schema with mongoose
mongoose.model('User', userSchema)

