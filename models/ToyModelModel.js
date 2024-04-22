var mongoose = require('mongoose');
var ToyModelSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, 'Name can not be empty']
        },
        size : String,
        material : {
            type : String,
            required : true
        },    
        price : Number,
        quantity : {
            type : Number,
            min : 1, 
            max : 100
        },
        image : String
    }
)

var ToyModelModel = mongoose.model('toymodel', ToyModelSchema, 'toymodel');
module.exports = ToyModelModel;