import React,{Component} from 'react';
import axios from "axios";
export default class CourseAdd extends Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Name: '',
            Code: '',
            nameError:"",
            codeError:"",
        }
    };

    onChangeName(e){
        this.setState({
            Name  : e.target.value
        });
    }

    onChangeCode(e){
        this.setState({
            Code:e.target.value
        });
    }
    validate =() => {
        let nameError ="";
        let codeError = "";

        if(!this.state.Name){

            nameError ="Name cannot be empty";
        }
        if(!this.state.Code){

            codeError ="Code cannot be empty"
        }
        if(nameError || codeError ){
            this.setState({nameError,codeError});
            return false;
        }
        return true;

    }

    onSubmit(event){
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
            const newCourse={
                Name: this.state.Name,
                Code: this.state.Code,
                Lecturer : this.state.Lecturer
            };

            axios.post('http://localhost:3001/course/add', newCourse)
                .then(res => {
                        console.log(res);
                        alert(`Course Name: ${res.data.Name} ,: ID ${res.data._id}`);
                    }
                );

            this.state= {
                Name: '',
                Code: '',
                Lecturer :'',
                nameError:"",
                codeError:"",

            }
        }
        else{
            console.log(this.state);
        }

    }
    componentDidMount() {
        document.title="Add Course | SLIIT";
    }

    render() {
        return(
            <div style={{background:'#FFFFFF'}}>
                <div className="container" style={{width:700,background:'#FFFFFF',color:'white'}}>
                    <h3 align="center" style={{color:'#000000'}}>Add new Course</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label style={{color:'#000000'}}>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Name || ''}
                                onChange={this.onChangeName}
                            />
                            <div style={{fontSize:16,color:"red"}}>
                                {this.state.nameError}
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{color:'#000000'}}>Course Code : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Code || ''}
                                onChange={this.onChangeCode}
                            />
                            <div style={{fontSize:16,color:"red"}}>
                                {this.state.codeError}
                            </div>
                        </div>
                        <div className="form-group" style={{marginLeft:'250px'}}>
                            <input type="submit" value="RegisterCourse" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}