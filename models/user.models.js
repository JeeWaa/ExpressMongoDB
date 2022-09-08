const mongoose = require('mongoos')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('User', userSchema)