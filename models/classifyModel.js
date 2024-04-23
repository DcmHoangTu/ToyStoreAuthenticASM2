const mongoose = require('mongoose');

const ClassifySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'classify must be at least 3 characters']
    },
    description: {
        type: String,
        required: true
    }
});

const ClassifyModel = mongoose.model("classify", ClassifySchema, 'classify');
module.exports = ClassifyModel;
