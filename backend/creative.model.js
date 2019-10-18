const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Creative = new Schema({
    name: {
        type: String
    },
    instagram: {
        type: String
    },
    email: {
        type: String
    },
    facebook: {
        type: String
    },
    mediums: {
        type: Array
    }
});

module.exports = mongoose.model('Creative', Creative);