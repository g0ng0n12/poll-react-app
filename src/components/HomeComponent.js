import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ListQuestionComponent from './ListQuestionComponent';

class HomeComponent extends Component {

    constructor(){
        super();
        this.state = {
            answeredQuestionActive : false,
            unAnsweredQuestionActive : true 
        };
    }

    render() {

        return(
            <div>
                <div className='center'> 
                    <button className='btn' type='submit'
                    disabled={this.state.unAnsweredQuestionActive}> Unaswererd Questions </button>
                    <button  className='btn' type='submit'
                    disabled={this.state.answeredQuestionActive}> Answered Questions </button>
                </div>

                { this.state.unansweredQuestions ?
                    <ListQuestionComponent questions={this.props.questions}/>
                    : <ListQuestionComponent questions={this.props.questions}/>
                }
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, props) {


    return {
        questions: Object.keys(questions).map( key => questions[key])
    }
}

export default connect(mapStateToProps)(HomeComponent)
