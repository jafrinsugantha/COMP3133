const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    },
    city: {
        type: String,
        required: true,
        match: /^[a-zA-Z\s]+$/
    },
    website: {
        type: String,
        required: true,
        match: /^(http|https):\/\/[^ "]+$/
    },
    zipCode: {
        type: String,
        required: true,
        match: /^\d{5}-\d{4}$/
    },
    phone: {
        type: String,
        required: true,
        match: /^1-\d{3}-\d{3}-\d{4}$/
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
