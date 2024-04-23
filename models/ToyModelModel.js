const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToyModelSchema = new Schema({
    name: String,
    size: String,
    price: Number,
    image: String,
    classify: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classify'
    }
});

const ToyModel = mongoose.model('toymodel', ToyModelSchema, 'toymodel');
module.exports = ToyModel;
