

import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseMain from "./component/Courses/course.main.component";
import AdminMain from './component/ContentPage/contentPage';
import StickyFooter from 'react-sticky-footer';

import Instructor from './component/Instructor/instructor.main.component';

import Student from './component/Student/student.main.component';
import Exam from './component/ExamsAssignments/exam.main.component';
import back from'../src/component/image1.jpg';



const secionStyle = {
    width: '280px',
    height: '100%',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' repeat',
};

function App() {

    return (
        <BrowserRouter>

            <div className={secionStyle}>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <a className="navbar-brand" href=" " target="_blank" rel="noopener noreferrer">
                        <img src={logo} width="30" height="30" alt="Sri Lanka Railways"/>
                    </a>
                    <Link to="/courseMain" className="navbar-brand">Admin</Link>
                    <div className="collpase navbar-collapse" style={{marginLeft: "780px"}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item" style={{paddingLeft: '100px '}}>
                                <Link to="/" className="nav-link">Admin</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/courseMain" className="nav-link">Course Details</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/instructorMain" className="nav-link">Instructor Details</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/studentMain" className="nav-link">Student Details</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/examMain" className="nav-link">Exam Details</Link>
                            </li>
                        </ul>
                    </div>

                </nav>

                <Route path="/" exact component={AdminMain}/>
                <Route path="/courseMain" component={CourseMain}/>
                <Route path="/instructorMain" component={Instructor}/>
                <Route path="/studentMain" component={Student}/>
                <Route path="/examMain" component={Exam}/>

            </div>

            <StickyFooter
                bottomThreshold={20}
                normalStyles={{
                    backgroundColor: "#141616",
                    padding: "2rem"
                }}
                stickyStyles={{
                    backgroundColor: "r#141616",
                    padding: "2rem"
                }}


            >

            </StickyFooter>

        </BrowserRouter>
    );
}
export default App;