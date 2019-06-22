import React, {Component} from 'react'

import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import CourseMain from '../Courses/course.add.component';
import Instructor from '../Instructor/instructor.add.component';
import Student from '../Student/student.add.component';
import party from '../Student/studentCourse';
import Exam from '../ExamsAssignments/exam.add.component';
import back from "./wall.jpg";




const secionStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' repeat'
};
export default class ContentPageAdmin extends Component {
    render() {
        return (

            <BrowserRouter>
                <div style={secionStyle}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">

                            </li>
                            <li className="navbar-item">

                            </li>
                        </ul>
                    </nav>


                    <div style={{
                        marginLeft: "60px",
                        marginTop: '50px',
                        color: 'black',
                        fontFamily: 'Arial',
                        width: '1400px'
                    }}>

                        <Link className="btn btn-outline-danger "
                              style={{
                                  width: '400px',
                                  height: '100px',
                                  background: '',
                                  marginLeft: '60px',

                              }} to="/courseAdd"><h2 style={{marginTop: '35px'}}>ADD COURSES</h2></Link>

                        <Link className="btn btn-outline-light"
                              style={{width: '400px', height: '100px', color: '#8b572a', marginLeft: '60px'}}
                              to="/instructorAdd"><h2 style={{marginTop: '35px'}}>ADD INSTRUCTORS</h2></Link>


                        {/*<Link className="btn btn-outline-info"*/}
                        {/*      style={{width: '400px', height: '100px', background: '', marginLeft: '60px'}}*/}
                        {/*      to="/examAdd"><h2 style={{marginTop: '35px'}}>ADD EXAMS</h2></Link>*/}

                        {/*<Link className="btn btn-outline-info"*/}
                        {/*      style={{width: '400px', height: '100px', background: '', marginLeft: '60px'}}*/}
                        {/*      to="/studentAdd"><h2 style={{marginTop: '35px'}}>ADD STUDENTS</h2></Link>*/}

                        {/*<Link className="btn btn-outline-info"*/}
                        {/*      style={{width: '400px', height: '100px', background: '', marginLeft: '60px'}}*/}
                        {/*      to="/partyAdd"><h2 style={{marginTop: '35px'}}>ADD course student</h2></Link>*/}
                    </div>


                </div>


                <Route path="/courseAdd"  component={CourseMain}/>
                <Route path="/instructorAdd" component={Instructor}/>
                <Route path="/studentAdd" component={Student}/>
                <Route path="/examAdd" component={Exam}/>
                <Route path="/partyAdd" component={party}/>


            </BrowserRouter>
        );
    }
}
