import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ListQuestionComponent from './ListQuestionComponent';

class HomeComponent extends Component {

    constructor(){
        super();
        this.state = {
            answeredQuestionActive : true,
            unAnsweredQuestionActive : false 
        };
        this.toogleQuestions = this.toogleQuestions.bind(this);
    }

    toogleQuestions() {
        
        this.setState({
            answeredQuestionActive: !this.state.answeredQuestionActive,
            unAnsweredQuestionActive: !this.state.unAnsweredQuestionActive
          });
    }


    render() {

        return(
            <div>
                <div className='center'> 
                    <button className='btn' type='submit'
                    onClick={this.toogleQuestions} disabled={this.state.answeredQuestionActive}> Unaswererd Questions </button>
                    <button  className='btn' type='submit'
                     onClick={this.toogleQuestions} disabled={this.state.unAnsweredQuestionActive}> Answered Questions </button>
                </div>

                { this.state.answeredQuestionActive ?
                    <ListQuestionComponent questions={this.props.unAnsweredQuestions} answeredQuestions={false}/>
                    : <ListQuestionComponent questions={this.props.answeredQuestions}  answeredQuestions={true}/>
                }
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, props) {
    
    let questionsArray = Object.keys(questions).map( key => questions[key])
    let answeredQuestions = questionsArray.filter(question => 
        question.optionOne.votes.includes(authedUser) ||  question.optionTwo.votes.includes(authedUser));
    let unAnsweredQuestions = questionsArray.filter(question => 
        !question.optionOne.votes.includes(authedUser) ||  !question.optionTwo.votes.includes(authedUser)
    )

    return {
        answeredQuestions:  answeredQuestions,
        unAnsweredQuestions: unAnsweredQuestions
    }
}

export default connect(mapStateToProps)(HomeComponent)
