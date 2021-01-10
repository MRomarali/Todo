const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    Todo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', usersSchema)