import React, { Component } from 'react';
import QuestionComponent from './QuestionComponent';



class ListQuestionComponent extends Component {

    render(){
        let  questions = this.props.questions;
        return(
            <div className='container center'> 
                { questions && questions.map( question => (
                    <QuestionComponent key={question.id} question={question} /> )
                )} 
            </div>
        )
    }
}

export default ListQuestionComponent;