const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const courseRoutes = express.Router();
const instructorRoutes = express.Router();
const studentRoutes = express.Router();
const examRoutes = express.Router();

const student =  require('../backend/models/student');
const exam = require ('../backend/models/exam');
const course =  require('../backend/models/course');
const instructor = require ('../backend/models/instructor');


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
mongoose.connect('mongodb://127.0.0.1:27017/AdminDB', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});


//routes implementation
app.use('/course', courseRoutes);
app.use('/instructor',instructorRoutes);
app.use('/student', studentRoutes);
app.use('/instructor',instructorRoutes);
app.use('/exam', examRoutes);


//COURSE ROUTES

courseRoutes.route('/add').post(function (req, res) {
    let courseIns = new course(req.body);
    courseIns.save()
        .then(course => {
            res.status(200).json(course);
        })
        .catch(err => {
            res.status(400).send('adding new course failed');
        });
});

courseRoutes.route('/').get(function (req, res) {
    course.find(function (err, course) {
        if (err) {
            console.log(err);
        } else {
            res.json(course);
        }
    });
});

courseRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;                                 //id gets from here
    course.findById(id, function (err, courses) {
        res.json(courses);
    });
});
courseRoutes.route('/update/:id').post(function (req, res) {
    course.findById(req.params.id, function (err, courses) {
        if (!courses)
            res.status(404).send("data is not found");
        else
            courses.Name = req.body.Name;
        courses.Code = req.body.Code;

        courses.save().then(course => {
            res.json('Course Updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

courseRoutes.route('/:id').delete(function (req, res) {
    let id = req.params.id;
    course.findById(id, function (err, courses) {
        if (err) {
            console.log(err);
        } else {
            courses.remove();
            res.json(courses);
        }
    });
});

//INSTRUCTORS ROUTES
instructorRoutes.route('/add').post(function(req,res){
    let instructionIns = new instructor(req.body);
    let mail = req.body.Email;
    let name = req.body.Name;

    instructionIns.save()
        .then(instructor => {
            res.status(200).json(instructor);
        })
        .catch(err => {
            res.status(400).send('adding new course failed');
        });
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'naduniranasinghe@gmail.com',
            pass: 'pasindu7135'
        }
    });

    const mailOptions = {
        from: 'naduniranasinghe@gmail.com',
        to: mail,
        subject: 'SLIIT',
        text: 'Dear '+ name + ' you have been added as an Instructor to the System. Thank you ! '
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

instructorRoutes.route('/').get(function (req, res) {
    instructor.find(function (err, instructor) {
        if (err) {
            console.log(err);
        } else {
            res.json(instructor);
        }
    });
});

instructorRoutes.route('/update/:id').post(function (req, res) {
    instructor.findById(req.params.id, function (err, instructors) {
        if (!instructors)
            res.status(404).send("data is not found");
        else
            instructors.Name = req.body.Name;
        instructors.Email = req.body.Email;
        instructors.Phone = req.body.Phone;
        instructors.course = req.body.course;

        instructors.save().then(instructors => {
            res.json('Instructor Updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

courseRoutes.route('/:id').delete(function (req, res) {
    let id = req.params.id;
    instructor.findById(id, function (err, instructors) {
        if (err) {
            console.log(err);
        } else {
            instructors.remove();
            res.json(instructors);
        }
    });
});


//STUDENT ROUTES
studentRoutes.route('/add').post(function(req,res){
    let instructionIns = new student(req.body);
    let mail = req.body.Email;
    let name = req.body.Name;

    instructionIns.save()
        .then(instructor => {
            res.status(200).json(instructor);
        })
        .catch(err => {
            res.status(400).send('adding new student failed');
        });
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'naduniranasinghe@gmail.com',
            pass: 'pasindu7135'
        }
    });

    const mailOptions = {
        from: 'naduniranasinghe@gmail.com',
        to: mail,
        subject: 'SLIIT',
        text: 'Dear '+ name + ' you have been added as a student to the System. Thank you ! '
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

studentRoutes.route('/').get(function (req, res) {
    student.find(function (err, student) {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
    });
});

//EXAM ROUTES
examRoutes.route('/add').post(function (req, res) {



    let examObj = new exam(req.body);

    examObj.save()
        .then(exam => {
            res.status(200).json(exam);
        })
        .catch(err => {
            res.status(400).send('adding new course failed');
        });
});

examRoutes.route('/').get(function (req, res) {
    exam.find(function (err, exam) {
        if (err) {
            console.log(err);
        } else {
            res.json(exam);
        }
    });
});


