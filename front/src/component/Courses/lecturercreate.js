import React, {Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            nameError:"",
            codeError:"",
        }
    }


    validate =() => {
        let nameError ="";
        let codeError = "";

        if(!this.state.Name){

            nameError ="Lecturer Name cannot be empty";
        }


        if(!this.state.Code){

            codeError ="Code cannot be empty"
        }
        if(nameError || codeError){
            this.setState({nameError,codeError});
            return false;
        }

    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

            console.log(`Form submitted:`);
            console.log(`Todo Description: ${this.state.todo_description}`);
            console.log(`Todo Responsible: ${this.state.todo_responsible}`);
            console.log(`Todo Priority: ${this.state.todo_priority}`);
            console.log(`Todo Completed: ${this.state.todo_completed}`);

            const newTodo = {
                todo_description: this.state.todo_description,
                todo_responsible: this.state.todo_responsible,
                todo_priority: this.state.todo_priority,
                todo_completed: this.state.todo_completed
            }

            axios.post('http://localhost:3001/lecture/add', newTodo)
                .then(res => console.log(res.data));

            this.setState({
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
                todo_completed: false,
                nameError: "",
                codeError: "",
            })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3 style={{marginLeft:'630px'}}>Add Lecturers to System</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Lecturer Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div style={{fontSize:16,color:"red"}}>
                        {this.state.nameError}
                    </div>


                    <div className="form-group">
                        <label>Lecturer ID</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div style={{fontSize:16,color:"red"}}>
                        {this.state.codeError}
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Lecturer"
                                    checked={this.state.todo_priority==='Lecturer'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Lecturer</label>

                        </div>

                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Assistant Lecturer"
                                    checked={this.state.todo_priority==='Assistant Lecturer'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Assistant Lecturer</label>

                        </div>

                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Visiting Lecturer"
                                    checked={this.state.todo_priority==='Visiting Lecturer'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Visiting Lecturer</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="SUBMIT " className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}