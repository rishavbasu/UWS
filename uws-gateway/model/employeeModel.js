var mongoose = require('mongoose');

var Todo = mongoose.model('Employee', {
    name : String,
    phNo : String
});