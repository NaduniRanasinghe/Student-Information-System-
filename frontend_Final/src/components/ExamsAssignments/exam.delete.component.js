import React,{Component} from 'react';
import axios from "axios";

export default class ExamDelete extends Component{
    componentDidMount() {
        document.title="Delete Course | SLIIT";
    }

    static deleteExamFromDB(id){

        axios.delete('http://localhost:3001/exam/'+id)
            .then(response => {
                alert("Data successfully deleted for :"+response.data.Name);
            });
    }

    render() {
        let urlStr = this.props.location.pathname;
        let examId = (urlStr.split('/')[2]);
        console.log(examId);
        ExamDelete.deleteExamFromDB(examId);
        let{history} = this.props;
        history.push({
            pathname:'/examMain/',
        });
        return(
            <div>
            </div>
        );
    }
}