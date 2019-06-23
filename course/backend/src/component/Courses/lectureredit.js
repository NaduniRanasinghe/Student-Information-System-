import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/lecture/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:3001/lecture/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 style={{ marginTop: 20, marginLeft:'580px' }}>Lecture Details Update</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{marginLeft:'230px',width : '1000px'}}>Lecturer Name </label>
                        <input  type="text"style={{marginLeft:'230px',width : '1000px'}}
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label style={{marginLeft:'230px',width : '1000px'}}>Lecturer ID</label>
                        <input  type="text"style={{marginLeft:'230px',width : '1000px'}}
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group" style={{marginLeft:'230px',width : '1000px'}}>
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
                        <br/>
                        <div className="form-group" >
                            <input type="submit" value="Update Lecturer" style={{marginLeft:'330px',width : '200px'}}className="btn btn-primary"  />
                        </div>
                        <div style={{ marginTop: 20, marginBottom:'280px' }}>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}