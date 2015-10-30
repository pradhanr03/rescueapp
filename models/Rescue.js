var mongoose = require('mongoose');

var RescueSchema = new mongoose.Schema({
    name: String,
    breed: String,
    img: String,
    Age: String,
    completed: Boolean,
    note: String
});

module.exports = mongoose.model('Rescue', RescueSchema);
