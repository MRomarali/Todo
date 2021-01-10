const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Posts', postsSchema)