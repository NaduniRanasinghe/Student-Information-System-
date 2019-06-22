import React,{Component} from 'react';
import axios from "axios";

export default class AssignmentDelete extends Component{
    componentDidMount() {
        document.title="Delete Assignment | SLIIT";
    }

    static deleteAssignmentFromDB(id){

        axios.delete('http://localhost:3001/assignment/'+id)
            .then(response => {
                alert("Data successfully deleted for :"+response.data.Name);
            });
    }

    render() {
        let urlStr = this.props.location.pathname;
        let examId = (urlStr.split('/')[2]);
        console.log(examId);
        AssignmentDelete.deleteAssignmentFromDB(examId);
        let{history} = this.props;
        history.push({
            pathname:'/assignmentMain/',
        });
        return(
            <div>
            </div>
        );
    }
}