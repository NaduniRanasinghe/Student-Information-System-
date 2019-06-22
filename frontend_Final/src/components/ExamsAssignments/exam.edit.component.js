import React, {Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import axios from 'axios';

export default class UpdateExam extends Component {

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {

            if (this.props.location.pathname) {
                let urlStr = this.props.location.pathname;
                let examID = (urlStr.split('/')[2]);
                console.log(examID);
                scrollToComponent(this.appDiv);
                axios.get('http://localhost:3001/exam/' + courseID)
                    .then(response => {
                        this.setState({
                            ID: response.data._id,
                            Name: response.data.Name,
                            endDate: response.data.endDate,
                            email:response.data.email
                        })
                    })
                    .catch(function (error) {
                        return (error);
                    })
            }
        });
    }

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        console.log(this.props);

        this.state = {
            ID: '',
            Name: '',
            endDate:'',
            email:''
        };

    }

    componentDidMount() {
        document.title = "Modify Course(Admin) | SliiTit";
        console.log("Modify App Mounted");

    }

    onChangeName(e){
        this.setState({
            Name  : e.target.value
        });
    }
    onChangeEndDate(e){
        this.setState({
            endDate  : e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email  : e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newExam = {
            Name: this.state.Name,
            endDate: this.state.endDate,
            course: this.state.course,
            email:this.state.email
        };

        let urlStr = this.props.location.pathname;
        let courseId = (urlStr.split('/')[2]);
        console.log(courseId);
        axios.post(`http://localhost:3001/exam/update/` + courseId, newExam)
            .then(
                res => {
                    alert(`Data of ID : ${res.data._id}, Name : ${res.data.Name}, successfully updated.`);
                });
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: '450px', marginTop: 10, width: 700, background: 'black', color: 'white'}}
                     ref={(section) => {
                         this.appDiv = section;
                     }}>
                    <h3 align="center"><u>Modify Course Details</u></h3>
                    <form onSubmit={this.onSubmit} className="form-horizontal">
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Code : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.endDate}
                                onChange={this.onChangeEndDate}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.email || ''}
                                onChange={this.onChangeEmail}
                            />
                        </div>

                        <div className="form-group">
                            <input style={{marginLeft: '300px'}} type="submit" value="UpdateUser"
                                   className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>

        )

    }

}
