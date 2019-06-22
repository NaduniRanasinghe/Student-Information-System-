import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import constant from '../service/constant';

class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         userid:'',
         email:'',
         password:'',
         address:'',
         type:'STD',
         course:'',
         Courses:[]

      }
    }

    changeHandler = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    componentDidMount() {
        axios.get(constant()+'/getcourse').then(
            data => {
                this.setState({
                    Courses: data.data
                })
            }
        )
    }


    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post(constant()+'/savestudent', this.state)
        .then(response => {
            console.log(response)
            if(response.data != ''){
              this.props.history.push("/")
            }
            
        })
        .catch(error => {
            console.log(error)
        })
      }
    

    loginButtonHandler = () => {
        this.props.history.push("/")
    }
    
  render() {
    const { username, userid ,email, password, address , course} = this.state;
    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Student Registration
                    </h3>
                </div>
                <div className="panel-body">
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Student Name:</label>
                        <input type='text' id="validationCustom01" className="form-control" name="username" value={username} onChange={this.changeHandler} placeholder="User name" pattern="^[a-zA-Z0-9_]+$" title="Enter user name is requird"/>
                    </div>
                    <div className="form-group">
                        <label>Student ID:</label>
                        <input type='text' id="validationCustom01" className="form-control" name="userid" value={userid} onChange={this.changeHandler} placeholder="User id" pattern="^[a-zA-Z0-9_]+$" title="Enter user name is requird"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type='email' className="form-control" name="email" value={email} onChange={this.changeHandler} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type='password' className="form-control" name="password" value={password} onChange={this.changeHandler} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type='text' className="form-control" name="address" value={address} onChange={this.changeHandler} placeholder="Address" />
                    </div>
                    <div className="form-group">
                            <label>Course</label>
                            <select name="course" className="form-control" onChange={this.changeHandler} value={course}>
                                {
                                    this.state.Courses.map(sub => {
                                        return (
                                            <option key={sub._id} value={sub._id}>{sub.name}</option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                    <button type="submit" className="btn btn btn-outline-success registerBtn">Submit</button>
                    {/* <button type="button" className="btn btn-default"><Link to="/">Login</Link></button> */}
                    <button type="button" className="btn btn-outline-secondary loginBtn" onClick={this.loginButtonHandler}>Login</button>
                </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Register
