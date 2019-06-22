const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const course = require ('./course')
const examSchema = new Schema({

    Name: {
        type: String,
        require: true
    },
    endDate: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    course: [
        {
            type: Schema.Types.ObjectId,
            ref: 'course'
        }
    ]
});

module.exports = mongoose.model('exam',examSchema);
