import React, { Component } from 'react';
import QuestionComponent from './QuestionComponent';



class ListQuestionComponent extends Component {

    render(){
        let  {questions, answeredQuestions } = this.props;
        return(
            <div className='container center'> 
                { questions && questions.map( question => (
                    <QuestionComponent key={question.id} question={question} answeredQuestion={this.props.answeredQuestions}/> )
                )} 
            </div>
        )
    }
}

export default ListQuestionComponent;