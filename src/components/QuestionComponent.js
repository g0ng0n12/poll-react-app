import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class QuestionComponent extends Component {


    render(){
        let { user, question, answeredQuestion } = this.props;
        return(
            <div>
                { user  &&
                    <div className='container center'> 
                        <h3> {user.name} Asks:</h3>
                        <div className="question">
                            <div className='avatar'>
                                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                            </div>
                            <div class='question-details'>
                                <h4>Would you Rather</h4>
                                <p>{question.optionOne.text}</p>
                                { answeredQuestion ? 
                                    <Link to={`/question/${question.id}`} >View Question Answered</Link> :
                                    <Link to={`/question/${question.id}/submit`}>Answer Question</Link>
                                }
                            </div>
                        </div>
                    </div>
            }
            </div>           
        )
    }
}
function mapStateToProps({users, authedUser}, props) {
    let { question } = props
    let usersArray= Object.keys(users).map( key => users[key])

    return {
        user: question && usersArray.find((user) => user.id === props.question.author)
    }
}

export default withRouter(connect(mapStateToProps)(QuestionComponent));