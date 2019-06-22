const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    Name : {
        type : String,
        require : true
    },
    Code : {
        type : String,
        require : true
    },
    //ADDDED NEW BY PASAN
    lecturer: [
        {
            type: Schema.Types.ObjectId,
            ref: 'lecturer'
        }
    ]
});

module.exports = mongoose.model('course', CourseSchema);